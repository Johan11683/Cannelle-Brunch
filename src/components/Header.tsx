import { Link } from 'react-router-dom';
import '../styles/_header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="/Cannelle-Brunch/images/logos/cannelle-logo.png" alt="Logo Cannelle Brunch" />

        </Link>
        <nav className="header__nav">
          <Link to="/">Accueil</Link>
          <Link to="/gallery">Galerie</Link>
        </nav>
      </div>
    </header>
  );
}
