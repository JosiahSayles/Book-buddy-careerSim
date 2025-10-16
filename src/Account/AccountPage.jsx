import { Link } from "react-router";
import { useAuth } from "../Auth/AuthContext";
import { useReservations } from "../Reservations/ReservationsContext";

export default function AccountPage() {
  const { returnABook, reservedBooks } = useReservations();
  const { user } = useAuth();

  if (!user)
    return (
      <>
        <h1>Please log in or register </h1>
        <Link to="/login">Go to log in</Link>
        <Link to="/register">Go to register</Link>
      </>
    );
  return (
    <>
      <h1>Welcome {user.firstname} </h1>
      <p>Your email on file with us is {user.email}</p>
      <h2>Your reservations</h2>
      {reservedBooks.length > 0 ? (
        <ul>
          {reservedBooks.map((book) => (
            <li key={book.id}>
              {book.title}
              <button
                onClick={async () => {
                  try {
                    await returnABook(book.id);
                    alert("Book returned Successfully");
                  } catch (err) {
                    console.error("Error returning book " + err.message);
                  }
                }}
              >
                Return book
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations yet!</p>
      )}
    </>
  );
}
