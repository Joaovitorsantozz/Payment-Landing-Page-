import "./../styles/profile.css";
import {
  faEnvelope,
  faUser,
  faPhone,
  faIdCard,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import OtpInput from "./../../OtpInput.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formatDate } from "./../../formatDate.tsx";
import UserImage from "./../assets/user-default.jpeg";
import { useEffect, useState } from "react";
import Axios from "axios";
function MeuPerfil() {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [fieldValue, setFieldValue] = useState<string>("");
  const [user, setUser] = useState<Usuario | null>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Axios.get("http://localhost:3000/meu-perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {});
    }
  }, []);
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        Axios.put(
          "http://localhost:3000/editar-meuperfil",
          {
            [editingField!]: fieldValue,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        ).then((response) => {
          alert(response.data.message);
        });
        setUser((prevUser) =>
          prevUser ? { ...prevUser, [editingField!]: fieldValue } : prevUser
        );
        setEditingField(null);
      }
    } catch (error) {
      console.log("erro ao fazer requisição put editar perfil");
    }
  };
  interface Usuario {
    id: number;
    email: string;
    name: string;
    data_de_criacao: Date;
    idade: number;
    telefone: number;
  }

  const handleEdit = (field: keyof Usuario) => {
    setEditingField(field);
    setFieldValue(user ? user[field].toString() : "");
  };
  //mes dia ano

  /*const dataAgora = new Date(2005, 10, 23);const dataFinal = new Date(); let anoFinal = dataFinal.getFullYear();let anoInicial = dataAgora.getFullYear();let mesFinal = dataFinal.getMonth() + 1;let mesInicial = dataAgora.getMonth() + 1;let diaFinal = dataFinal.getDate(); let diaInicial = dataAgora.getDate(); if (diaFinal < diaInicial) {mesFinal -= 1; diaFinal += new Date(anoFinal, mesFinal, 0).getDate(); }  if (mesFinal < mesInicial) {    anoFinal -= 1;    mesFinal += 12;  }const difAno = anoFinal - anoInicial;  const difMes = mesFinal - mesInicial; const difDia = diaFinal - diaInicial;const resultado = `${difAno} anos, ${difMes} meses e ${difDia} dias`;console.log(resultado);
   */
  return (
    <div className="myProfile-container">
      <div className="myProfile-container-title">
        <h2>Configurações</h2>
        <p>Edite e configure detalhes da sua conta Expert </p>
      </div>
      <div className="myProfile-box">
        <div className="myProfile-verifyEmail">
          <div className="ls">
            <div>!</div>
          </div>
          <div className="cs">
            <h2>Por favor, confirme seu email para poder alterar seu perfil</h2>
            <h3>
              Nos enviamos um email verificador contendo 6 digitos para{" "}
              <b>{user?.email}</b> .<a href="#"> Não recebeu o email ? </a>
            </h3>
          </div>

          <div className="rs">
            <OtpInput></OtpInput>
          </div>
        </div>
        <div className="myprofile-section">
          <h1>Meu Perfil</h1>

          {[
            {
              label: "Seu nome",
              field: "name",
              desc: "Nome que sera exibido no seu perfil",
            },
            {
              label: "Seu Email",
              field: "email",
              desc: "Email que sera exibido no seu perfil",
            },
            {
              label: "Telefone/Celular",
              field: "telefone",
              desc: "Número para contato",
            },
            { label: "Sua idade", field: "idade", desc: "Idade do usuário" },
          ].map(({ label, field, desc }) => (
            <div key={field} className="myprofile-unique">
              <div className="my-profile-unique-box">
                <h2>
                  {label} * <br />
                  <strong>{desc}</strong>
                  {""}
                </h2>
                <div style={{ display: "flex" }}>
                  {editingField === field ? (
                    <>
                      <input
                        type="text"
                        value={fieldValue}
                        onChange={(e) => setFieldValue(e.target.value)}
                        placeholder={
                          user ? String(user[field as keyof Usuario]) : ""
                        }
                      ></input>
                      <button onClick={handleSave}>Salvar</button>
                    </>
                  ) : (
                    <>
                      <h2>
                        {user ? String(user[field as keyof Usuario]) : ""}
                      </h2>
                      <a
                        onClick={() => handleEdit(field as keyof Usuario)}
                        style={{ cursor: "pointer" }}
                      >
                        Edit
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeuPerfil;
