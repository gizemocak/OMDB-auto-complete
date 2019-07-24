import React, { useState } from "react";
import styled from "styled-components";

const SearchInputStyled = styled.div`
  input {
    border: none;
    border-bottom: 1.5px solid #2b8adc;
    font-size: 18px;
    height: 40px;
    width: 300px;
    text-align: center;
    color: #7c7c7c;
    background: #fff;
  }
`;

export default function SearchInput(props) {
  const [searchInput, updateSearchInput] = useState("");

  const handleInputChange = e => {
    const input = e.target.value;
    updateSearchInput(input);
    props.fetchMovies(input);
  };

  return (
    <SearchInputStyled>
      <input
        name="omdbAutoComplete"
        placeholder="Start typing to search for
        movies!"
        onChange={handleInputChange}
        value={searchInput}
      />
    </SearchInputStyled>
  );
}
