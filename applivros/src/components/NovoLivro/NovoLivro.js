import React, { useContext } from "react";
import { BooksContext } from '../../context/BooksProvider';
import './NovoLivro.css';

const NovoLivro = (props) => {

  const { incluirLivro } = useContext(BooksContext);

  return (
    <div className="novolivro">
      <form onSubmit={incluirLivro}>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o nome do livro"
        />
        <input
          type="text"
          id="autor"
          name="autor"
          placeholder="Digite o nome do autor(a)"
        />
        <input
          type="text"
          id="paginas"
          name="paginas"
          placeholder="Número de páginas"
        />
        <input
          type="text"
          id="imagem"
          name="imagem"
          placeholder="url da imagem"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default NovoLivro;
