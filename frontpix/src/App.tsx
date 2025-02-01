import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Consultoria from "./pages/consultoria.tsx";
import Login from "./pages/login.tsx";
import Cadastrar from "./pages/cadastrar.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/consultoria" element={<Consultoria />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
