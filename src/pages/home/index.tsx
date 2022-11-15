import { FC, useState } from "react";

import Card from "../../components/card-hero";

import * as S from "./styles";

const Home: FC = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <S.Wrapper>
      <S.SearchTermInput>
        <strong>MySocial</strong>

        <S.SearchInput
          placeholder="search persons ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SearchTermInput>

      <S.Cards>
        {Array(10)
          .fill({})
          .map((_, index) => (
            <li key={index}>
              <Card />
            </li>
          ))}
      </S.Cards>
    </S.Wrapper>
  );
};

export default Home;
