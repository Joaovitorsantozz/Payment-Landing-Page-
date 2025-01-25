import "./../styles/index.css";
import Button from "./../components/button";
import Navbar from "../components/navbar";
function Header() {
  return (
    <header>
      <Navbar></Navbar>
      <div className="background">
        <div className="overlay"></div>
      </div>
      <div className="img-center">
        <div className="overlay">
          <h2>
            Comece uma nova jornada com a <br />
            <span className="blue">Experts Investimentos</span>
          </h2>
          <div className="buttons">
            <Button text="Saiba mais" classe="sm-btn blue"></Button>
            <Button text="Iniciar consulta" classe="ic-btn"></Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
