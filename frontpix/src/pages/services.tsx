import rendaf from "./../assets/rendafixa.png";
import rendav from "./../assets/rendavariavel.png";
import fundoI from "./../assets/fundoimobiliario.png";
import previdencia from "./../assets/previdenciap.png";
function Services() {
  return (
    <div className="services">
      <h2>
        Transforme Seu <strong>Futuro Financeiro</strong> com Consultoria
        Especializada e <strong>Estratégias Personalizadas</strong>
      </h2>
      <div className="investimentos-sec">
        <div className="investimento-unique">
          <img className="left" src={rendaf} alt="Imagem Renda Fixa" />
          <div className="texto">
            <h2>
              <strong>Renda Fixa</strong>: Estabilidade e Segurança para Seu
              Dinheiro
            </h2>
            <p>
              A Renda Fixa é uma das opções mais confiáveis para quem busca
              estabilidade e previsibilidade. Com produtos como títulos do
              Tesouro, CDBs e LCIs/LCAs, você garante uma rentabilidade definida
              desde o início, com baixo risco. Se você quer um investimento
              seguro e com retorno constante, a Renda Fixa é uma escolha
              inteligente.
            </p>
          </div>
        </div>
        <div className="investimento-unique">
          <img className="left" src={rendav} alt="Imagem Renda Fixa" />
          <div className="texto">
            <h2>
              <strong>Renda Variável</strong>: Potencial de Crescimento e
              Oportunidades
            </h2>
            <p>
              Na Renda Variável, o retorno do seu investimento pode ser mais
              volátil, mas também oferece um grande potencial de crescimento.
              Com opções como ações e ETFs, você pode diversificar seus
              investimentos e aproveitar o movimento do mercado para maximizar
              seus lucros. Ideal para quem busca mais retorno e está disposto a
              assumir riscos calculados.
            </p>
          </div>
        </div>
        <div className="investimento-unique">
          <img className="left" src={fundoI} alt="Imagem Renda Fixa" />
          <div className="texto">
            <h2>
              <strong>Fundos Imobiliários</strong>: Investindo no Mercado
              Imobiliário com Diversificação
            </h2>
            <p>
              Os Fundos Imobiliários (FIIs) permitem que você invista no mercado
              imobiliário sem precisar comprar um imóvel diretamente. Com
              exemplos como HGLG11 e KNRI11, você pode obter renda passiva de
              grandes propriedades comerciais e ainda se beneficiar da
              valorização dos ativos. É uma alternativa acessível e com menor
              custo de entrada para quem busca diversificação e retornos
              estáveis.
            </p>
          </div>
        </div>
        <div className="investimento-unique">
          <img className="left" src={previdencia} alt="Imagem Renda Fixa" />
          <div className="texto">
            <h2>
              <strong> Previdência Privada</strong>: Planeje Seu Futuro com
              Tradição e Vantagens
            </h2>
            <p>
              A Previdência Privada é a solução ideal para quem quer garantir um
              futuro financeiro estável. Com benefícios fiscais e planejamento a
              longo prazo, ela permite que você comece a investir hoje para
              assegurar uma aposentadoria tranquila. Se você deseja tomar as
              rédeas do seu futuro financeiro e aproveitar vantagens exclusivas,
              a Previdência Privada é um passo essencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
