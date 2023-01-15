//INSTALANDO DEPENDÊNCIAS
//npm i json-server react-router-dom

import "./App.css";
// 1 - Config react router
import React from "react"; // Avoiding error: Error : 'React' must be in scope when using JSX react/react-in-jsx-scope
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      {/* O que está fora de Routes, existirá em todas as páginas */}
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm /> {/*Criar um in put, navega até a url modificada com o input. Mudando para o componente '/search', onde pega os parâmetros e faz requisição*/}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:idUrl" element={<Product />}></Route>
          {/* 6 - Nested route */}
          <Route path="/products/:idUrl/info" element={<Info />}></Route> {/*Route cria a rota, MAS ELAS ESTÃO SENDO ACESSADAS NAS PÁGINAS*/}
          {/* 7 - Set no match route - 404 */}
          <Route path="*" element={<NotFound />}></Route>
          {/* 9 - Search page */}
          <Route path="/search" element={<Search />}></Route> {/* Só '/search' pois pode vim qualquer complemento de acordo com a pesquisa*/}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
