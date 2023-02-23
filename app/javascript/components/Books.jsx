import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "/api/v1/books/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setBooks(res))
      .catch(() => navigate("/"));
  }, []);


  const allBooks = books.map((book, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        {/* <img
          src={book.image}
          className="card-img-top"
          alt={`${book.name} image`}
        /> */}
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <Link to={`/book/${book.id}`} className="btn custom-button">
            View Book
          </Link>
        </div>
      </div>
    </div>
  ));
  const noBook = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No Books yet. Why not <Link to="/new_book">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Books for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular books, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/book" className="btn custom-button">
              Create New Books
            </Link>
          </div>
          <div className="row">
            {books.length > 0 ? allBooks : noBook}
          </div>
          <Link to="/" className="btn btn-link">
            Dashbourd
          </Link>
        </main>
      </div>
    </>
  );
};

export default Books;