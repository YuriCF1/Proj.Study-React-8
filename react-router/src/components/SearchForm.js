import React from "react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query); {/*mandando o resultado da pesquisa como parâmetro de busca, já configura no JSON SERVER*/}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
