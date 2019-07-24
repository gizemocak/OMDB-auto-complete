import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchedListStyled = styled.div`
  line-height: 2.5;
  padding-left: 10%;
  padding-right: 10%;

  ul {
    list-style: none;
    text-decoration: none;
    text-align: left;
  }

  li {
    font-weight: bolder;
    border-bottom: 1px solid #5dbff0;
  }

  .movie-link {
    text-decoration: none;
    color: #3d576e;
    font-weight: bolder;
  }

  .movie-link:visited,
  .movie-link:active {
    color: #3d576e;
  }
`;

export default function SearchedList(props) {
  return (
    <SearchedListStyled>
      <ul>
        {props.movies.map(item => {
          return (
            <li key={item.imdbID}>
              <Link to={`/movie/${item.imdbID}`} className="movie-link">
                {item.Title}
              </Link>
            </li>
          );
        })}
      </ul>
    </SearchedListStyled>
  );
}
