import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { useAuth } from "../Auth/AuthContext";
import { getBook } from "../API/books";
import { useReservations } from "../Reservations/ReservationsContext";

export default function BookDetails() {
  const { book } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const { token } = useAuth();
  const { reserveABook, reservedBooks } = useReservations();

  useEffect(() => {
    const syncBook = async () => {
      const data = await getBook(book);
      setBookDetails(data);
    };
    syncBook();
  }, [book]);

  if (!bookDetails) return <p>Loading... </p>;

  return (
    <article>
      <div className="book-card">
        <figure>
          <img
            alt={bookDetails.title}
            src={bookDetails.coverimage}
            height={200}
          />
        </figure>
        <section>
          <h1>{bookDetails.title}</h1>
          <p className="author">{bookDetails.author}</p>
          <p>{bookDetails.description}</p>
        </section>
      </div>
      <Link to="/account">
        {token && (
          <button
            className="reserve-button"
            onClick={async () => {
              try {
                await reserveABook(bookDetails);
              } catch (err) {
                alert("Error reserving book " + err.message);
              }
            }}
          >
            Reserve this book
          </button>
        )}
      </Link>
    </article>
  );
}
