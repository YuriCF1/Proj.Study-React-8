import React from 'react'

import "./Navbar.css"

import { Link } from "react-router-dom" 

const Navbar = () => {
  return (
    <nav>
        {/* Redirecionamento trocando o componente*/}
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        {/* Redirecionamento fazendo reload  da página */}
        {/* <a href=""></a> */} 
    </nav>
  )
}

export default Navbar