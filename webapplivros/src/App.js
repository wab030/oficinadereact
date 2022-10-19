import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import BooksProvider from './context/BooksProvider';
import Books from './components/Books/Books';
import NewBook from './components/NewBook/NewBook';
import UpdateBook from './components/UpdateBook/UpdateBook';
import Header from './components/Header/Header';
import './App.css';

function App() {
  // console.log('[App - Iniciando a aplicação]');
  return (
    <div className="WebAppBooks">
      <BrowserRouter>
        <BooksProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/novolivro" element={<NewBook />} />
            <Route path="/alterarlivro/:id" element={<UpdateBook />} />
            <Route
              path="*"
              element={
                <main>
                  <p>Não há nada aqui</p>
                </main>
              }
            />
          </Routes>
        </BooksProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
