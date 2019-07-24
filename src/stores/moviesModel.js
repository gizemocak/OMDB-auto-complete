import { action, thunk } from "easy-peasy";

const movies = {
  movies: [],
  selectedMovie: {
    Title: "",
    Poster: "",
    Released: "",
    Type: "",
    Actors: "",
    Director: "",
    Genre: "",
    Language: "",
    imdbRating: "",
    Plot: ""
  },
  error: null,
  loading: false,
  fetchSelectedMovie: thunk(async (actions, id) => {
    actions.updateLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=bce872a9&i=${id}`)
      .then(res => res.json())
      .then(res => {
        actions.updateSelectedMovie(res);
        actions.updateLoading(false);
      });
  }),
  fetchMovies: thunk(async (actions, input) => {
    fetch(`http://www.omdbapi.com/?apikey=bce872a9&s=${input}`)
      .then(res => res.json())
      .then(res => {
        actions.updateError(null);
        if (res.Search) {
          actions.updateMovies(res.Search);
        } else {
          actions.updateMovies([]);
          if (res.Error && res.Error !== "Something went wrong.") {
            actions.updateError(res.Error);
          }
        }
      });
  }),
  updateMovies: action((state, movies) => {
    state.movies = movies;
  }),
  updateSelectedMovie: action((state, selectedMovie) => {
    state.selectedMovie = selectedMovie;
  }),
  updateLoading: action((state, loading) => {
    state.loading = loading;
  }),
  updateError: action((state, error) => {
    state.error = error;
  })
};

export default movies;
