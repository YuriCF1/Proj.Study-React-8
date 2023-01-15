import React from "react";

import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParms] = useSearchParams();

  const url = "http://localhost:3001/products?" + searchParms; //Pega os parâmetros depois do '?'. O JSON server já é programado para esperar um 'q=parametro', e devolver a resposta
  let paramtroPesquisado = searchParms.get("q");
  console.log(paramtroPesquisado);
  console.log(searchParms);

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Deatalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
