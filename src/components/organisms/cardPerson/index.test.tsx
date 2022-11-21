import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { CardPerson } from ".";

describe(CardPerson, () => {
  const Component = (
    <CardPerson
      appearance={{
        gender: "Male",
        race: "Clone",
        height: ["6'4", "193 cm"],
        weight: ["250 lb", "113 kg"],
        id: 2,
        name: "1536",
        "eye-color": "",
        "hair-color": "",
      }}
      biography={{
        id: 2,
        name: "1536",
        "full-name": "Kaine Parker",
        "alter-egos": "No alter egos found.",
        "first-appearance": "",
        "place-of-birth": "",
        aliases: [],
        alignment: "",
        publisher: "",
      }}
      connections={{
        id: 2,
        name: "1536",
        "group-affiliation": "-",
        relatives: "",
      }}
      id={578}
      image={{
        id: 2,
        name: "1536",
        url: "https://www.superherodb.com/pictures2/portraits/10/100/1536.jpg",
      }}
      name="Scarlet Spider II"
      powerstats={{
        id: 2,
        name: "1536",
        intelligence: 88,
        strength: 55,
        speed: 60,
        durability: 40,
        power: 37,
        combat: 56,
      }}
      work={{ id: 2, name: "1536", occupation: "Fugitive", base: "-" }}
    />
  );
  it("Should render view component", () => {
    render(Component, {
      wrapper: MemoryRouter,
    });
  });
});
