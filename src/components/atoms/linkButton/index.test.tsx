import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { LinkButton } from ".";

describe(LinkButton, () => {
  const Component = <LinkButton title="anchor" to={"/"} />;
  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
});
