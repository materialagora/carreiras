import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { store } from "redux/store";

import { Person } from ".";

describe(Person, () => {
  const Component = (
    <Provider store={store}>
      <>
        <Person />
      </>
    </Provider>
  );

  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
});
