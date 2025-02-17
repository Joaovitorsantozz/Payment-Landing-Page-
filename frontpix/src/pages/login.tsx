import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  interface FormValues {
    email: string;
    senha: string;
  }
  const handlerLogin = (values: FormValues) => {
    Axios.post("http://localhost:3000/login", {
      email: values.email,
      senha: values.senha,
    })
      .then((response) => {
        console.log("antes de salvar na API", response.data.token);
        const token = response.data.token;
        alert("Voce foi logado" + response.data.token);

        localStorage.setItem("token", token);

        navigate("/meu-perfil");
      })
      .catch((error) => {
        if (error.response) {
          alert("Erro: " + error.response.data.error);
        } else {
          alert("Erro ao tentar se conectar ao servidor");
        }
      });
  };

  const verifiquerLogin = Yup.object().shape({
    email: Yup.string().email().required("Insira um email válido"),
    senha: Yup.string()
      .min(8)
      .required("a senha deve ter mais de 8 caracteres"),
  });
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in</h2>
        <Formik
          initialValues={{ email: "", senha: "" }}
          validationSchema={verifiquerLogin}
          onSubmit={handlerLogin}
        >
          <Form>
            <div className="login-sec">
              <label>Email do usuário</label>
              <div className="input-container">
                <Field
                  type="text"
                  name="email"
                  placeholder="Insira seu email"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
                <button type="button">
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </div>
            </div>
            <div className="login-sec">
              <label>Senha do usuário</label>
              <div className="input-container">
                <Field
                  name="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="senha"
                  className="form-error"
                />
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
              <button className="form-submit" type="submit">
                Fazer login
              </button>
            </div>
          </Form>
        </Formik>
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
