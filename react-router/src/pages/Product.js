import React from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Product = () => {
  // 4 -  Rotda dinâmica
  const { idUrl } = useParams(); //O 'idUrl' pode ser qualquer nome. Ele faz referência ao id da url chmada em products, no App.js
  return (
    <>
      <p>ID do produto: {idUrl}</p>
    </>
  );
};

export default Product;
