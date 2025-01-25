import login from "./../assets/login.png";
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
        <a>
          <img src={login} width={35}></img>Fazer Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
