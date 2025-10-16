import { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "../Auth/AuthContext";
const API = import.meta.env.VITE_API;
const ReservationsContext = createContext();

export default function ReservationsProvider({ children }) {
  const [reservedBooks, setReservedBooks] = useState([]);
  const { token } = useAuth();

  const reserveABook = async (book) => {
    const res = await fetch(API + "/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId: book.id }),
    });
    const result = await res.json();

    if (!res.ok) {
      throw Error(result.message || "reservation failed");
    }

    const newReservation = {
      ...result,
      title: book.title,
      author: book.author,
    };
    setReservedBooks((prev) => [...prev, newReservation]);
  };

  useEffect(() => {
    const booksReserved = async () => {
      if (!token) return;
      try {
        const res = await fetch(API + "/reservations", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (!res.ok)
          throw new Error(result.message || "Failed to fetch reservations");
        setReservedBooks(result.data || result);
      } catch (err) {
        console.error(err.message);
      }
    };
    booksReserved();
  }, [token]);

  const returnABook = async (bookId) => {
    const res = await fetch(`${API}/reservations/${bookId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setReservedBooks((prev) => prev.filter((book) => book.id !== bookId));
    return true;
  };

  const value = {
    reserveABook,
    reservedBooks,
    setReservedBooks,
    returnABook,
  };

  return (
    <ReservationsContext.Provider value={value}>
      {children}
    </ReservationsContext.Provider>
  );
}
export function useReservations() {
  const context = useContext(ReservationsContext);
  if (!context)
    throw Error("useReservations must be used within ReservationsProvider");
  return context;
}
