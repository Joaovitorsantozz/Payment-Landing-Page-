import login from "./../assets/login.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="logo"></div>

      <ul className="list">
        <li>Sobre nós</li>
        <li>Planos/Preços</li>
        <li>Contato</li>
        <li>FAQ</li>
      </ul>

      <div className="cta">
        <Link to="/login">
          <img src={login} width={25}></img>Fazer Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
