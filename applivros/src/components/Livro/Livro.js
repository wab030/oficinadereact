import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { BooksContext } from '../../context/BooksProvider';

import Imagem from "../Imagem/Imagem";
import './Livro.css';

const Livro = (props) => {

  const navigate = useNavigate();

  const { apagarLivro } = useContext(BooksContext);

  const altLivro = ( indice ) => {
    console.log('Alterar livro');
    navigate('/alterarlivro/'+indice);
  }

  return (
    <div className="livro">
      <div className="livro-imagem-container">
        <Imagem imagemurl={props.livro.imagem} />
      </div>
      <div className="livro-texto-container">
        <p className="livro-titulo">{props.livro.nome}</p>
        <p>{props.livro.autor}</p>
        <p>{props.livro.paginas}</p>
        <FontAwesomeIcon className="icon" icon={faPenToSquare} onClick={() => altLivro(props.indice)} />
        <FontAwesomeIcon className="icon" icon={faTrashCan} color='red' onClick={() => apagarLivro(props.indice)} />
      </div>
    </div>
  );
};

export default Livro;
