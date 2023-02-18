// 2 - Links com react router
import React from "react";

import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Redirecionamento trocando o componente*/}
      {/* <Nav to="/">Home</Nav>
        <Nav to="/about">Sobre</Nav> */}

      {/* NavLink é a mesma coisa de Link, porém ele permite a atrobito IsActive */}
      {/* <Link to="/about">Sobre</Link> */}
      {/* Uma maneira de não utilizar a classe padrão 'active' */}
      <NavLink
        to="/" /* className={({isActive}) => (isActive ? 'estaAtivo' : 'naoAtivo')}*/
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
      {/* Redirecionamento fazendo reload  da página */}
      {/* <a href=""></a> */}
    </nav>
  );
};

export default Navbar;
