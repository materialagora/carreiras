import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render, waitFor } from "@testing-library/react";

import { CardGroup } from ".";

describe(CardGroup, () => {
  const Component = <CardGroup id={2} name="Wakanda Forever" persons={[]} />;
  const { getByText } = render(Component, {
    wrapper: MemoryRouter,
  });
  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
  it("Should render data object properties", () => {
    void waitFor(() => {
      expect(getByText("Wakanda Forever")).toBeInTheDocument();
      expect(getByText("0")).toBeInTheDocument();
    });
  });
});
