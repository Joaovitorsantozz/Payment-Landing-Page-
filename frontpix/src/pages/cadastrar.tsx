import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Cadastrar() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  interface FormValues {
    name: string;
    email: string;
    senha: string;
  }
  const handlerCadastro = (values: FormValues) => {
    Axios.post("http://localhost:3000/register", {
      name: values.name,
      email: values.email,
      senha: values.senha,
    })
      .then((response) => {
        if (response.data.msg == "Cadastrado com sucesso") {
          alert(response);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Erro ao cadastrar usuário:",
            error.response.data.message
          );
        } else {
          console.error("Erro na requisição:", error.message);
        }
      });
  };

  const validateCadastro = Yup.object().shape({
    name: Yup.string().required("Insira um nome válido"),
    email: Yup.string().email().required("Este não é um email válido"),
    senha: Yup.string()
      .min(8)
      .required("A senha deve conter mais de 8 caracteres"),
    confirmarSenha: Yup.string().oneOf(
      [Yup.ref("senha")],
      "As senhas devem ser iguais"
    ),
  });
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{ name: "", email: "", senha: "", confirmarSenha: "" }}
          onSubmit={handlerCadastro}
          validationSchema={validateCadastro}
        >
          <Form>
            <div className="cadastro-sec">
              <label>Nome do usuário</label>
              <div className="input-container">
                <Field
                  className="form-field"
                  name="name"
                  type="text"
                  placeholder="Nome"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="name"
                  className="form-error"
                />
                <button type="button">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </div>

            <div className="cadastro-sec">
              <label>Email do usuário</label>
              <div className="input-container">
                <Field
                  className="form-field"
                  name="email"
                  type="text"
                  placeholder="Email"
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

            <div className="cadastro-sec">
              <label>Crie uma senha</label>
              <div className="input-container">
                <Field
                  className="form-field"
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
            </div>

            <div className="cadastro-sec">
              <label>Repita a senha</label>
              <div className="input-container">
                <Field
                  name="confirmarSenha"
                  type={confirmPassword ? "text" : "password"}
                  placeholder="Repita a senha"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="confirmarSenha"
                  className="form-error"
                />
                <button
                  type="button"
                  onClick={() => setConfirmPassword(!confirmPassword)}
                >
                  <FontAwesomeIcon
                    icon={confirmPassword ? faEyeSlash : faEye}
                    size="lg"
                  ></FontAwesomeIcon>
                </button>
              </div>

              <button className="form-submit" type="submit">
                Cadastre-se agora
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="cadastro-welcome">
        <h2>Seja bem vindo!</h2>
        <p>
          Ja possui uma conta? Faça login para descubrir novas oportunidades
          para o seu futuro financeiro. Junte-se a nós e dê o primeiro passo
          rumo ao sucesso!
        </p>
        <Link to="/login">Entre agora</Link>
      </div>
    </div>
  );
}

export default Cadastrar;
