import { useState } from "react";

const API = import.meta.env.VITE_API;

export default function Reservations() {
  const [reservedBook, setReservedBook] = useState(null);

  const reserveABook = async () => {
    const res = await fetch(API + "/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookId),
    });
    const result = await res.json();
    setReservedBook(result);
    if (res.ok) {
      throw Error(result.message);
    }
  };

  return <div>reservations</div>;
}
