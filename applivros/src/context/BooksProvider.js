import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../data/env';
export const BooksContext = React.createContext();

const BooksProvider = (props) => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "books"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        const novoLivro = {
          id: doc.id,
          nome: doc.data().nome,
          autor: doc.data().autor,
          paginas: doc.data().paginas,
          imagem: doc.data().imagem,
        };
        const livrosAux = [...livros];
        livrosAux.push(novoLivro);
        setLivros(livrosAux);
      });
    }
    fetchData();
  }, []);

  // useEffect(() => {

  //   setLivros(
  //     [
  //       {
  //         id: 0,
  //         nome: "A descoberta do mundo",
  //         autor: "Clarice Lispector",
  //         paginas: "480",
  //         imagem: "https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg"

  //       },
  //       {
  //         id: 1,
  //         nome: "Gênero e desigualdades",
  //         autor: "Flávia Biroli",
  //         paginas: "210",
  //         imagem: "https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg"
  //       },
  //       {
  //         id: 2,
  //         nome: "A ditadura é assim",
  //         autor: " Equipo Plantel",
  //         paginas: "52",
  //         imagem: "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/200732-800-800/767022_ampliada.jpg?v=637266030488030000"
  //       },
  //       {
  //         id: 3,
  //         nome: "Pequeno Manual Antirracista",
  //         autor: "Djamila Ribeiro",
  //         paginas: "136",
  //         imagem: "https://images-na.ssl-images-amazon.com/images/I/71D3cAdm0GL.jpg"
  //       },
  //       {
  //         id: 4,
  //         nome: "Homofobia - História e crítica de um preconceito",
  //         autor: "Daniel Borrillo",
  //         paginas: "144",
  //         imagem: "https://images-na.ssl-images-amazon.com/images/I/91AzPtbpRuL.jpg"
  //       }
  //     ]
  //   );
  // }, []);

  const navigate = useNavigate();

  const incluirLivro = async (event) => {
    event.preventDefault();
    console.log('Inclue livro');
    const id = livros.length;
    const novoLivro = {
      id: id,
      nome: event.target.nome.value,
      autor: event.target.autor.value,
      paginas: event.target.paginas.value,
      imagem: event.target.imagem.value,
    };
    const livrosAux = [...livros];
    livrosAux.push(novoLivro);
    setLivros(livrosAux);

    //gravarLivroDB();
    console.log(db);
    await setDoc(doc(db, "books", id.toString()), {
      id: id,
      nome: event.target.nome.value,
      autor: event.target.autor.value,
      paginas: event.target.paginas.value,
      imagem: event.target.imagem.value,
    });

    navigate('/');
  }

  const alterarLivro = (event) => {
    event.preventDefault();
    const indiceLivro = event.target.id.value;
    console.log(indiceLivro);
    const livrosAux = [...livros];
    livrosAux[indiceLivro] = {
      nome: event.target.nome.value,
      autor: event.target.autor.value,
      paginas: event.target.paginas.value,
      imagem: event.target.imagem.value,
    };
    setLivros(livrosAux);
    navigate('/');
  }

  const apagarLivro = (index) => {
    console.log('Apaga livro', index);
    let livrosAux = livros.slice(); // ou ..= [...books]
    livrosAux.splice(index, 1);
    setLivros(livrosAux);
  }

  return (
    <BooksContext.Provider value={{
      livros: livros,
      incluirLivro: incluirLivro,
      alterarLivro: alterarLivro,
      apagarLivro: apagarLivro
    }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;