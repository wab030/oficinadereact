import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { BooksContext } from '../../context/BooksProvider';

import Imagem from "../Imagem/Imagem";
import './Livro.css';

const Livro = (props) => {

  console.log(props);
  const { alterarLivro, apagarLivro } = useContext(BooksContext);

  return (
    <div className="livro">
      <div className="livro-imagem-container">
        <Imagem imagemurl={props.livro.imagem} />
      </div>
      <div className="livro-texto-container">
        <p className="livro-titulo">{props.livro.nome}</p>
        <p>{props.livro.autor}</p>
        <p>{props.livro.paginas}</p>
        <FontAwesomeIcon className="icon" icon={faPenToSquare} onClick={alterarLivro}/>
        <FontAwesomeIcon className="icon" icon={faTrashCan} color='red' onClick={() => apagarLivro(props.indice)} />
      </div>
    </div>
  );
};

export default Livro;
