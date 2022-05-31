import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { BooksContext } from '../../context/BooksProvider';
import './AlterarLivro.css';

const FormAlterarLivro = () => {

  const [livro, setLivro] = useState({});

  let params = useParams();

  const { livros, alterarLivro } = useContext(BooksContext);

  useEffect(() => {
    setLivro(livros[params.id]);
  }, []);

  const alteraCampo = (event) => {
    const campo = event.target.name;
    let livroAux = { ...livro };
    if (campo === 'nome') {
      livroAux.nome = event.target.value;
    };
    if (campo === 'autor') {
      livroAux.autor = event.target.value;
    };
    if (campo === 'paginas') {
      livroAux.paginas = event.target.value;
    };
    if (campo === 'imagem') {
      livroAux.imagem = event.target.value;
    };
    setLivro(livroAux);
  };

  return (
    <div className="alterarlivro">
      <form onSubmit={alterarLivro}>
        <input 
          type="text"
          id="id"
          name="id"
          readonly
          value={params.id}
        />
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o nome do livro"
          value={livro.nome}
          onChange={alteraCampo}
        />
        <input
          type="text"
          id="autor"
          name="autor"
          placeholder="Digite o nome do autor(a)"
          value={livro.autor}
          onChange={alteraCampo}
        />
        <input
          type="text"
          id="paginas"
          name="paginas"
          placeholder="Número de páginas"
          value={livro.paginas}
          onChange={alteraCampo}
        />
        <input
          type="text"
          id="imagem"
          name="imagem"
          placeholder="url da imagem"
          value={livro.imagem}
          onChange={alteraCampo}
        />
        <button type="submit">Alterar</button>
      </form>
    </div>
  );
};

export default FormAlterarLivro;
