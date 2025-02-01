import twitter from "./../assets/twt.png";
import face from "./../assets/facebook.png";
import linkedin from "./../assets/linkedin.png";
import instagram from "./../assets/instagram.png";
function footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo"></div>
        <div className="social-media">
          <h2>Nossas redes sociais</h2>
          <div className="social-logos">
            <ul>
              <li>
                <img src={twitter}></img>
              </li>

              <li>
                <img src={face}></img>
              </li>

              <li>
                <img src={linkedin}></img>
              </li>

              <li>
                <img src={instagram}></img>
              </li>
            </ul>
          </div>
        </div>
        <ul>
          <h2>Community</h2>
          <li>Produtos e serviços</li>
          <li>Produtos e serviços</li>
          <li>Produtos e serviços</li>
          <li>Produtos e serviços</li>
        </ul>

        <ul>
          <h2>Company</h2>
          <li>Sobre nós</li>
          <li>Investimentos</li>
          <li>Planos</li>
          <li>Investimentos</li>
          <li>Planos</li>
        </ul>
        <ul>
          <h2>Links Uteis</h2>
          <li>Termos de uso</li>
          <li>Política de privacidade</li>
          <li>Planos</li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
