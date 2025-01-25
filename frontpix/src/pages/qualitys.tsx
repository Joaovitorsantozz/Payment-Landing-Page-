import cracha from "./../assets/cracha.png";
import acordo from "./../assets/acordo.png";
import grafico from "./../assets/grafico.png";
import lock from "./../assets/cadeado.png";
import book from "./../assets/livro.png";
function Quality() {
  return (
    <div className="intersection">
      <div className="qualitys">
        <h1>
          Expert Investimentos: seu <strong>dinheiro</strong> trabalhando por
          você, com <strong>segurança</strong> e <strong>estratégia</strong>
        </h1>
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
            <h2>Suporte ágil e humanizado</h2>
            <p>
              Possuimos um suporte 24h que está disposto a te atender.
              Atendimento humanizado e instantâneo para tirar qualquer dúvida
            </p>
          </div>
          <div className="quality-unique">
            <img src={lock}></img>
            <h2>Segurança como prioridade</h2>
            <p>
              Garantimos máxima segurança para os seus investimentos, com
              tecnologias avançadas e total sigilo de informações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
