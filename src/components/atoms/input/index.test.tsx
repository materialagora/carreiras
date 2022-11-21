import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { Input } from ".";

describe(Input, () => {
  const Component = <Input />;
  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
});
