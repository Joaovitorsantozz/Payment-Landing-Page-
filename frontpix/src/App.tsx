import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home.tsx";
import Consultoria from "./pages/consultoria.tsx"
function App() {
 

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/consultoria" element={<Consultoria/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
