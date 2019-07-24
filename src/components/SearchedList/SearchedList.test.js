import React from "react";
import renderer from "react-test-renderer";
import SearchedList from "./SearchedList";
import { MemoryRouter as Router } from "react-router-dom";
import { movieSearchResultsMock } from "../../utils/__mocks__.js";

test("should render SearchedList", () => {
  const props = {
    movies: movieSearchResultsMock
  };
  const component = renderer.create(
    <Router>
      <SearchedList {...props} />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
