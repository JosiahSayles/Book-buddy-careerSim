import React from "react";

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
    <article>
      <h2>
        <Link to={"/details/" + book.id}>{book.title}</Link>
      </h2>
      <figure>
        <img alt={book.title} src={book.coverimage} />
      </figure>
      <p>
        {book.author} {book.description}
      </p>
    </article>
  );
}
