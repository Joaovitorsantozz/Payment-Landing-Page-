import cracha from "./../assets/cracha.png";
import acordo from "./../assets/acordo.png";
import grafico from "./../assets/grafico.png";
function Quality() {
  return (
    <div className="intersection">
      <div className="qualitys">
        <h1>O que torna a Expert Investimentos diferente? </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit non saepe
          provident mollitia fugit porro odio.
          <br />
          In repellendus non saepe provident mollitia fugit porro odio
        </p>

        <div className="qualitys-sec">
          <div className="quality-unique">
            <img src={cracha}></img>
            <h2>Profissionais certificados</h2>
            <p>
              Nossa equipe é formada por especialistas certificados, prontos
              para oferecer as melhores oportunidades com transparência e
              responsabilidade.
            </p>
          </div>
          <div className="quality-unique">
            <img src={grafico}></img>
            <h2>Investimento personalizado</h2>
            <p>
              Sabemos que cada decisão financeira importa. Criamos estratégias
              que se ajustam ao seu perfil, seja você um investidor conservador
              ou alguém que busca rentabilidade agressiva.
            </p>
          </div>
          <div className="quality-unique">
            <img src={acordo}></img>
            <h2>Suporte rápido e humanizado</h2>
            <p>
              Possuimos um suporte 24h que está disposto a te atender.
              Atendimento humanizado e instantâneo para tirar qualquer dúvida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
