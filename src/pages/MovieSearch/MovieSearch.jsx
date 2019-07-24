import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import SearchInput from "../../components/SearchInput";
import SearchedList from "../../components/SearchedList";
import styled from "styled-components";

const MovieSearchStyled = styled.div`
  text-align: center;
  padding-top: 8%;
  h1 {
    color: #5dbff0;
  }
`;

export default function MovieSearch() {
  const movies = useStoreState(state => state.movies);
  const error = useStoreState(state => state.error);
  const fetchMovies = useStoreActions(actions => actions.fetchMovies);
  const updateSelectedMovie = useStoreActions(
    actions => actions.updateSelectedMovie
  );

  const handleInputChange = e => {
    let input = e.target.value;
    fetchMovies(input);
  };

  useEffect(() => {
    updateSelectedMovie([]);
  });

  return (
    <MovieSearchStyled>
      <h1>Movie search</h1>
      <SearchInput fetchMovies={fetchMovies} />
      {error && <p>{error}</p>}
      {movies && movies.length > 0 && (
        <>
          <SearchedList movies={movies} />
        </>
      )}
    </MovieSearchStyled>
  );
}
