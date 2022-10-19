import React, { useContext } from "react";
import { BooksContext } from '../../context/BooksProvider';
import './NewBook.css';

const NewBook = (props) => {

  const { createBook } = useContext(BooksContext);

  return (
    <div className="NewBook">
      <form onSubmit={createBook}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do livro"
        />
        <input
          type="text"
          id="ayuthor"
          name="author"
          placeholder="Digite o nome do autor(a)"
        />
        <input
          type="text"
          id="pages"
          name="pages"
          placeholder="Número de páginas"
        />
        <input
          type="text"
          id="image"
          name="image"
          placeholder="url da imagem"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default NewBook;
