import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import MovieSearch from "./pages/MovieSearch";
import MovieDetails from "./pages/MovieDetails";
import { createStore, StoreProvider } from "easy-peasy";
import moviesModel from "./stores/moviesModel";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    font-family: "Raleway", sans-serif;
  }
`;

const store = createStore({
  ...moviesModel
});

function App() {
  return (
    <StoreProvider store={store}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={MovieSearch} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </StoreProvider>
  );
}

export default withRouter(App);
