import React, { useContext } from 'react';
import Livro from '../Livro/Livro';

import { BooksContext } from '../../context/BooksProvider';

const Livros = (props) => {

  const { livros } = useContext(BooksContext);


  return (
    <div className='Livros'>
      {
        livros.map((livro, index) => {
          return (
            <Livro key={livro.id} indice={index} livro={livro} />
          )
        })
      }
    </div>
  );
}

export default Livros;