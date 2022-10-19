import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return(
    <header className="Header">
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/novolivro">Novo Livro</NavLink></li>
      </ul>
    </nav>
  </header>
  ) 
}

export default Header;