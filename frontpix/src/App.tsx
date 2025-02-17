import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home.tsx";
import Consultoria from "./pages/consultoria.tsx";
import Login from "./pages/login.tsx";
import Cadastrar from "./pages/cadastrar.tsx";
import { authToken } from "../auth.tsx";
import { Navigate } from "react-router-dom";
import MeuPerfil from "./pages/meuPerfil.tsx";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/consultoria" element={<Consultoria />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/meu-perfil" element={<MeuPerfil />} />
        </Route>
      </Routes>
    </Router>
  );
};

const PrivateRoute = () => {
  return authToken() ? <Outlet /> : <Navigate to="/login"></Navigate>;
};

export default App;
