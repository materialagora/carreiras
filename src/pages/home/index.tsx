import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Card from "../../components/card-hero";

import * as S from "./styles";
import { getAllHeros } from "./utils";

const Home: FC = () => {
  const [heros, setHeros] = useState<Superhero.GithubHeroType[]>([]);
  const [search, setSearch] = useState("");

  const handleGetAllHeros = async () => {
    try {
      setHeros(await getAllHeros());
    } catch (err) {
      console.log("Err: ", err);
    }
  };

  useEffect(() => {
    handleGetAllHeros();
  }, []);

  return (
    <S.Wrapper>
      <S.SearchHeroInput>
        <S.Title>
          <strong>SUPER</strong>
          <span>HERO</span>
        </S.Title>

        <S.SearchInput
          placeholder="search for some hero ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SearchHeroInput>

      <S.Cards>
        {heros.map((hero) => (
          <Link key={hero.id} to={`/hero/${hero.name}`}>
            <Card hero={hero} />
          </Link>
        ))}
      </S.Cards>
    </S.Wrapper>
  );
};

export default Home;
