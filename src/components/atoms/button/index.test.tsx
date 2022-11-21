import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { Button } from ".";

describe(Button, () => {
  const Component = <Button title="something" />;
  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
});
