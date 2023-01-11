//INSTALANDO DEPENDÊNCIAS
//npm i json-server react-router-dom

import "./App.css";
// 1 - Config react router
import React from "react"; // Avoiding error: Error : 'React' must be in scope when using JSX react/react-in-jsx-scope
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* O que está fora de Routes, existirá em todas as páginas */}
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
