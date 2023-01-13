import React from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Product = () => {
  // 4 -  Rotda dinâmica
  const { idUrl } = useParams(); //O 'idUrl' faz referência ao idUrl da url chmada em 'products', no App.js

  //5 - Carregamento dado individual
  const url = "http://localhost:3001/products/" + idUrl;
  const {data: product, loading, error} = useFetch(url)

  console.log(product);
  return (
    <>
      <p>ID do produto: {idUrl}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R$: {product.price}</p>
        </div>

      )}
    </>
  ) ;
};

export default Product;
