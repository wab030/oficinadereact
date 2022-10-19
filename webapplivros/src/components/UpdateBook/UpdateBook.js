import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { BooksContext } from '../../context/BooksProvider';
import './UpdateBook.css';

const UpdateBook = () => {

  const [book, setBook] = useState({ name: '', author: '', pages: 0, image: '' });

  let params = useParams();

  const { books, updateBook } = useContext(BooksContext);

  useEffect(() => {
    const bookToUpdateId = params.id;
    // console.log('[Update Book form] id to update', bookToUpdateId);
    console.log('[]', books);
    let index = books.findIndex(book => book.id == bookToUpdateId);
    // console.log('[Update Book form] book index', index);
    setBook(books[index]);
  }, [books]);

  const changeField = (event) => {
    const field = event.target.name;
    console.log('[Update form] changing field', field);

    let bookAux = { ...book };
    if (field === 'name') {
      bookAux.name = event.target.value;
    };
    if (field === 'author') {
      bookAux.author = event.target.value;
    };
    if (field === 'pages') {
      bookAux.pages = event.target.value;
    };
    if (field === 'image') {
      bookAux.image = event.target.value;
    };
    setBook(bookAux);
  };

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const bookToUpdate = {
      id: params.id,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
      image: event.target.image.value,
    }
    updateBook(bookToUpdate)
  }

  return (
    <div className="UpdateBook">
      {book ?
        <form onSubmit={handleUpdateBook}>
          {/* <input
            type="text"
            id="id"
            name="id"
            readonly
            value={params.id}
          /> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome do livro"
            value={book.name}
            onChange={changeField}
          />
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Digite o nome do autor(a)"
            value={book.author}
            onChange={changeField}
          />
          <input
            type="text"
            id="pages"
            name="pages"
            placeholder="Número de páginas"
            value={book.pages}
            onChange={changeField}
          />
          <input
            type="text"
            id="image"
            name="image"
            placeholder="url da imagem"
            value={book.image}
            onChange={changeField}
          />
          <button type="submit">Alterar</button>
        </form>
        : null}
    </div>
  );
};

export default UpdateBook;
