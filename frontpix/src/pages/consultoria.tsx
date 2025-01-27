import Button from "../components/button";

function Consultoria() {
  return (
    <div className="consultoria">
      <div className="over">
        <h2>
          Descubra <strong>Consultorias Sob Medida </strong> para Seus <br />
          <strong>Objetivos Financeiros</strong>
        </h2>
        <p>
          Nossos especialistas estão prontos para ajudar você a transformar seus
          <br />
          investimentos em estratégias sólidas, com suporte personalizado e 100%
          <br />
          alinhado às suas metas.
        </p>

        <div className="planos-container">
          <div className="planos-unique">
            <h2>Standart</h2>
            <p>
              Análise das finanças pessoais, definição de metas financeiras,
              elaboração de um orçamento simples, e recomendações de economia.
            </p>
            <div className="price">
              <h1>R$ 150</h1>
              <p>
                por mês
                <br />1 sessão de 1 hora.
              </p>
            </div>

            <ul>
              <li>
                Organize suas finanças pessoais. <b>✔</b>
              </li>
              <li>
                Defina metas financeiras claras. <b>✔</b>
              </li>
              <li>
                Crie um orçamento eficiente. <b>✔</b>
              </li>
              <li>
                Aumente o controle sobre seus gastos. <b>✔</b>
              </li>
              <li>
                Melhore a disciplina financeira. <b>✔</b>
              </li>
            </ul>
            <Button text="Assine agora" classe="btn-as"></Button>
          </div>

          <div className="planos-unique">
            <h2>Pro</h2>
            <p>
              Análise das finanças pessoais, definição de metas financeiras,
              elaboração de um orçamento simples, e recomendações de economia.
            </p>
            <div className="price">
              <h1>R$ 750</h1>
              <p>
                por mês
                <br />8 sessões de 1 hora.
              </p>
            </div>

            <ul>
              <li>
                Organize suas finanças pessoais. <b>✔</b>
              </li>
              <li>
                Defina metas financeiras claras. <b>✔</b>
              </li>
              <li>
                Crie um orçamento eficiente. <b>✔</b>
              </li>
              <li>
                Aumente o controle sobre seus gastos. <b>✔</b>
              </li>
              <li>
                Melhore a disciplina financeira. <b>✔</b>
              </li>
            </ul>
            <Button text="Assine agora" classe="btn-as"></Button>
          </div>

          <div className="planos-unique">
            <h2>Premium</h2>
            <p>
              Análise das finanças pessoais, definição de metas financeiras,
              elaboração de um orçamento simples, e recomendações de economia.
            </p>
            <div className="price">
              <h1>R$ 1250</h1>
              <p>
                por mês
                <br />
                sessões ilimitadas
              </p>
            </div>

            <ul>
              <li>
                Organize suas finanças pessoais. <b>✔</b>
              </li>
              <li>
                Defina metas financeiras claras. <b>✔</b>
              </li>
              <li>
                Crie um orçamento eficiente. <b>✔</b>
              </li>
              <li>
                Aumente o controle sobre seus gastos. <b>✔</b>
              </li>
              <li>
                Melhore a disciplina financeira. <b>✔</b>
              </li>
            </ul>
            <Button text="Assine agora" classe="btn-as"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultoria;
