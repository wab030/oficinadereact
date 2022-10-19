import React, { useContext } from 'react';

import Book from '../Book/Book';
import { BooksContext } from '../../context/BooksProvider';

import './Books.css';
const Books = () => {

  const { books } = useContext(BooksContext);

  return(
    <div className="Books">
      <h2>Livros</h2>
      {
        books.map((book) => {
          return <Book key={book.id} className="Books-Book" book={book}/>
        })
      }
    </div>
  )
}

export default Books;