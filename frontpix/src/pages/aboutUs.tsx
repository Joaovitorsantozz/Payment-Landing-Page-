import imageAbout from "./../assets/sobre-empresa.jpg";
function aboutUs() {
  return (
    <section className="sobre-empresa">
      <img src={imageAbout}></img>

      <div className="descricao-sobre">
        <h2>
          <strong>Investir</strong> é Mais do que uma Decisão, é uma Jornada{" "}
          <strong>Conosco</strong>
        </h2>
        <p>
          Na Expert Investimentos, acreditamos que o mercado financeiro deve ser
          acessível a todos. Não somos apenas consultores, somos investidores
          como você, com o compromisso de encontrar as melhores oportunidades e
          evitar armadilhas.
        </p>
        <p>
          Oferecemos estratégias personalizadas para cada perfil, seja você
          iniciante ou experiente. Nosso time de especialistas analisa o cenário
          e identifica as melhores opções para seu dinheiro crescer com
          segurança.
        </p>
        <p>
          Aqui, valorizamos o conhecimento, a transparência e o planejamento
          financeiro. Estamos aqui para ajudá-lo a tomar decisões assertivas e
          conquistar seus objetivos.
        </p>
        <p>
          Investir pode ser simples e transformador.
          <b> Vamos juntos nessa jornada? </b>
        </p>
      </div>
    </section>
  );
}

export default aboutUs;
