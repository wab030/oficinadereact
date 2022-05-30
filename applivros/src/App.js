import { useState } from 'react';
import {
  BrowserRouter, Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import Livros from './components/Livros/Livros';
import NovoLivro from './components/NovoLivro/NovoLivro';
import Cabecalho from './components/Cabecalho/Cabecalho';
import BooksProvider from './context/BooksProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <BooksProvider>
          <Routes>
            <Route path="/" element={<Livros />} />
            <Route path="/novolivro" element={<NovoLivro />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Não há nada aqui.</p>
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
