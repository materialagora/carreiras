import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";
import axios from "axios";
import { IPerson } from "interfaces/person";
import { BASE_URL } from "utils/constants";

import { SearchPersonInput } from ".";

describe(SearchPersonInput, () => {
  const Component = (
    <SearchPersonInput
      onChange={function (
        data?: IPerson[] | undefined,
        isPending?: boolean | undefined,
      ): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
  it("should search superhero", async () => {
    const { data } = await axios.get(`${BASE_URL}/search/Black Adam`);
    expect(data.response).toBe("success");
    expect(data["results-for"]).toBe("Black Adam");
    expect(data.results[0].name).toBe("Black Adam");
  });
});
