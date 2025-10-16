import React from "react";
import { Link } from "react-router";

export default function BookList({ books, syncBooks }) {
  return (
    <ul>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} syncBooks={syncBooks} />
      ))}
    </ul>
  );
}

function BookListItem({ book }) {
  return (
    <ul className="book-list">
      <li className="book">
        <figure>
          <img alt={book.title} src={book.coverimage} width={100} />
        </figure>
        <div className="book-info">
          <h2>
            <Link to={`/details/${book.id}`}>{book.title}</Link>
          </h2>
          <p className="author">{book.author}</p>
          <p>
            {book.author} {book.description}
          </p>
        </div>
      </li>
    </ul>
  );
}
