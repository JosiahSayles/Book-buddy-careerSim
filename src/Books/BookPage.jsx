import { useState, useEffect } from "react";
import { getBooks } from "../API/Books";
import BookList from "./BookList";

export default function BookPage() {
  const [books, setBooks] = useState([]);

  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <label className="search">
        <input
          type="text"
          name="searchbar"
          placeholder="Search for a book..."
        />
        <button>Search</button>
      </label>
      <BookList books={books} syncBooks={syncBooks} />
    </>
  );
}
