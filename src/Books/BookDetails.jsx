import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../Auth/AuthContext";
import { getBook } from "../API/books";

export default function BookDetails() {
  const { book } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const { token } = useAuth();

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
        <h1>{bookDetails.title}</h1>
        <figure>
          <img
            alt={bookDetails.title}
            src={bookDetails.coverimage}
            width={80}
          />
        </figure>
        <p>{bookDetails.author}</p>
        <p>{bookDetails.description}</p>
      </div>
      {token && <button>Reserve this book</button>}
    </article>
  );
}
