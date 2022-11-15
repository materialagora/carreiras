import { FC, useEffect, useState } from "react";

import Card from "../../components/card-hero";
import api from "../../services/api";

import * as S from "./styles";

const Home: FC = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const res = await api.get("/678");

      console.log("Data: ", res);
    })();
  }, []);

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
