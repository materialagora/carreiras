import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import { store } from "redux/store";

import { CreateGroup } from ".";

describe(CreateGroup, () => {
  const Component = (
    <Provider store={store}>
      <CreateGroup />
    </Provider>
  );

  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
});
