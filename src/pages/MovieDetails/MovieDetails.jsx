import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import styled from "styled-components";

const MovieDetailsStyled = styled.div`
padding: 5% 5% 0 5%;
line-height: 1.7;
font-weight:bolder;

  h1{
    color:#2187E1
    text-align: center
   }
  
   .movie-details-container{
     display:flex;
   }

   .movie-details{
     margin-left: 20px;
   }

   span{
     color: #2187E1
   }

   img{
    width: 300px;
    height: 450px;
    background: #D9D9D9
   }

   @media only screen and (max-width: 600px) {
    .movie-details-container{
     flex-direction: column
    }
  }

  }`;

export default function MovieDetails(props) {
  const fetchSelectedMovie = useStoreActions(
    actions => actions.fetchSelectedMovie
  );
  const selectedMovie = useStoreState(state => state.selectedMovie);
  const loading = useStoreState(state => state.loading);

  useEffect(() => {
    const movieId = props.match.params.id;
    fetchSelectedMovie(movieId);
  }, []);

  const {
    Title: title,
    Poster: poster,
    Released: released,
    Type: type,
    Actors: actors,
    Director: director,
    Genre: genre,
    Language: language,
    imdbRating,
    Plot: plot
  } = selectedMovie;

  return (
    <>
      {!loading && selectedMovie ? (
        <MovieDetailsStyled>
          <h1>{title}</h1>
          <div className="movie-details-container">
            <img src={poster} alt={`${title}'s Poster`} />
            <div className="movie-details">
              <div>
                Released in: <span>{released}</span>
              </div>
              <div>
                Genre: <span>{genre}</span>
              </div>
              <div>
                Director: <span>{director}</span>
              </div>
              <div>
                Actors: <span>{actors}</span>
              </div>
              <div>
                Type: <span>{type}</span>
              </div>
              <div>
                IMDB Rating: <span>{imdbRating}</span>
              </div>
            </div>
          </div>
          <div>Languages: {language}</div>
          <p>Description: {plot}</p>
        </MovieDetailsStyled>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}
