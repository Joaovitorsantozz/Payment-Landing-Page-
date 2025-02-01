import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in</h2>
        <div className="login-sec">
          <label>Email do usuário</label>
          <input
            type="text"
            placeholder="Email : genericemail@gmail.com"
          ></input>
        </div>
        <div className="login-sec">
          <label>Senha do usuário</label>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
            ></input>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                size="lg"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>

        <Link to="/Login"> Sign in</Link>
      </div>
      <div className="login-welcome">
        <h2>Bem vindo de volta !</h2>
        <p>
          Não tem uma conta ainda? Crie a sua agora e descubra novas
          oportunidades para o seu futuro financeiro. Junte-se a nós e dê o
          primeiro passo rumo ao sucesso!
        </p>
        <Link to="/cadastrar">Crie agora</Link>
      </div>
    </div>
  );
}

export default Login;
