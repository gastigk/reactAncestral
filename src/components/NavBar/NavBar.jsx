import "./NavBar.css"
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {

  return (

    <header className="header">

      <div className="logo__container">
        <Link to="/">
          <iframe className="logo" src="https://giphy.com/embed/H69CIJGH1eFtLCU26B" ></iframe>
        </Link>
      </div>

      <nav className="navbar">
        <Link className="navbar__link" to="/">Todo</Link>
        <Link className="navbar__link" to="/category/velas">Velas</Link>
        <Link className="navbar__link" to="/category/rituales">Rituales</Link>
      </nav>

      <CartWidget />

    </header>
  );
};

export default NavBar;

