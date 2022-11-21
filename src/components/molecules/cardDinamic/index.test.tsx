import React from "react";

import { render } from "@testing-library/react";

import { CardDinamic } from ".";

describe(CardDinamic, () => {
  const { getByTestId } = render(
    <CardDinamic
      title="fake"
      data={{
        name: "superhero",
      }}
    />,
  );
  it("Should display title", () => {
    const title = getByTestId("title").textContent;
    expect(title).toBe("fake");
  });
});
