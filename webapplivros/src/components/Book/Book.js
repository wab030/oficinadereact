import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { BooksContext } from '../../context/BooksProvider';

import Image from '../Image/Image';

import './Book.css';
const Book = ({ book }) => {
  // console.log(`[Book Component] Book`, book);

  const { deleteBook } = useContext(BooksContext);

  const navigate = useNavigate();

  const updateBook = ( bookId ) => {
    navigate('/alterarlivro/'+bookId);
  }

  return (
    <div className="Book">
      <h3>{book.name}</h3>
      <div className='Book-Image-Container'>
        <Image image={book.image} alt="Texto alternativo" />
      </div>
      <p>{book.author}</p>
      <p>{book.pages}</p>
      <div className="Icon-Container">
        <FontAwesomeIcon className="Icon" icon={faPenToSquare} onClick={() => updateBook(book.id)} />
        <FontAwesomeIcon className="Icon" icon={faTrashCan} color='red' onClick={() => deleteBook(book.id)} />
      </div>
    </div>
  )
}

export default Book;