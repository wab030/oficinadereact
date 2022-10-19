import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../env';

// const constbooks = [
//   {
//     id: 0,
//     name: "A descoberta do mundo",
//     author: "Clarice Lispector",
//     pages: 480,
//     image: "https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg"

//   },
//   {
//     id: 1,
//     name: "Gênero e desigualdades",
//     author: "Flávia Biroli",
//     pages: 210,
//     image: "https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg"
//   },
//   {
//     id: 2,
//     name: "A ditadura é assim",
//     author: " Equipo Plantel",
//     pages: 52,
//     image: "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/200732-800-800/767022_ampliada.jpg?v=637266030488030000"
//   },
//   {
//     id: 3,
//     name: "Pequeno Manual Antirracista",
//     author: "Djamila Ribeiro",
//     pages: 136,
//     image: "https://images-na.ssl-images-amazon.com/images/I/71D3cAdm0GL.jpg"
//   },
//   {
//     id: 4,
//     name: "Homofobia - História e crítica de um preconceito",
//     author: "Daniel Borrillo",
//     pages: 144,
//     image: "https://images-na.ssl-images-amazon.com/images/I/91AzPtbpRuL.jpg"
//   }
// ];

export const BooksContext = React.createContext();

const BooksProvider = (props) => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "books"));
    const booksAux = [];
    querySnapshot.forEach((doc) => {
      // console.log('Id', doc.id, '=>', doc.data());
      const newBook = {
        id: doc.id,
        name: doc.data().name,
        author: doc.data().author,
        pages: doc.data().pages,
        image: doc.data().image,
      };
      booksAux.push(newBook);
    });
    setBooks(booksAux);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const createBook = async (event) => {
    event.preventDefault();
    console.log(`[Create Book Context] ${event.target.name.value}`);
    // const id = books.length;
    // const newBook = {
    //   id: id,
    //   name: event.target.name.value,
    //   author: event.target.author.value,
    //   pages: event.target.pages.value,
    //   image: event.target.image.value,
    // };
    // const booksAux = [...books];
    // booksAux.push(newBook);

    // setBooks(booksAux);

    const docRef = await addDoc(collection(db, "books"), {
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
      image: event.target.image.value,
    });
    console.log("Document written with ID: ", docRef.id);
    navigate('/');
  }

  const readBooks = () => {

  }

  const updateBook = async (bookToUpdate) => {
    const bookId = bookToUpdate.id;
    // let bookIndex = books.findIndex(item => item.id == bookId);
    // console.log(bookIndex);
    // console.log(bookToUpdate);
    // const booksAux = [...books];
    // booksAux[bookIndex].name = bookToUpdate.name;
    // booksAux[bookIndex].author = bookToUpdate.author;
    // booksAux[bookIndex].pages = bookToUpdate.pages;
    // booksAux[bookIndex].image = bookToUpdate.image;
    // console.log(booksAux);

    await setDoc(doc(db, "books", bookId), {
      name: bookToUpdate.name,
      author: bookToUpdate.author,
      pages: bookToUpdate.pages,
      image: bookToUpdate.image,
    });

    // setBooks(booksAux);
    navigate('/');
  }

  const deleteBook = async (bookId) => {
    console.log('[Delete Book Context]', bookId);
    // let index = books.findIndex(item => item.id === bookId);
    // if (index < 0) {
    //   alert('Livro inexistente!');
    //   return;
    // }
    // // console.log('[Delete Book Context]', index);
    // let booksAux = books.slice(); // ou ..= [...books]
    // booksAux.splice(index, 1);
    // setBooks(booksAux);
    // console.log(booksAux);

    // await deleteDoc(doc(db, "books", bookId));
    deleteDoc(doc(db, "books", bookId))
      .then(() => console.log('ccc'))
      .catch((error) => {
        console.log('lakjsdfçlkj');
      });
    fetchData();
    navigate('/');

  }

  return (
    <BooksContext.Provider
      value={{
        books: books,
        createBook: createBook,
        updateBook: updateBook,
        deleteBook: deleteBook
      }}>
      {props.children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;