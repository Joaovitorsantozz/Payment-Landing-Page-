import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
function Cadastrar() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  interface FormValues {
    name: string;
    email: string;
    senha: string;
  }
  const handlerCadastro = (values: FormValues) => {};

  const validateCadastro = () => {};
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{ name: "", email: "", senha: "", confirmarsenha: "" }}
          onSubmit={handlerCadastro}
          validationSchema={validateCadastro}
        >
          <Form>
            <div className="cadastro-sec">
              <label>Nome do usuário</label>
              <Field
                className="form-field"
                name="username"
                type="text"
                placeholder="Nome"
              ></Field>
            </div>
            <div className="cadastro-sec">
              <label>Email do usuário</label>
              <Field
                className="form-field"
                name="email"
                type="text"
                placeholder="Email : genericemail@gmail.com"
              ></Field>
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
                  name="confirmar-senha"
                  type={confirmPassword ? "text" : "password"}
                  placeholder="Repita a senha"
                ></Field>

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
            </div>
          </Form>
        </Formik>
        <Link to="/Login"> Sign in</Link>
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
