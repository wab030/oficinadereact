import React from "react";
import './Imagem.css';

const Imagem = ( props ) => {
  return(
    <div className="imagem">
      <img src={props.imagemurl} alt="Imagem da capa do livro"/>
    </div>
  );
};

export default Imagem;