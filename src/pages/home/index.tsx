import { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../components/card-hero";
import ModalHeroSearch from "../../components/modal-hero-search";
import useDebounce from "../../hooks/use-debounce";
import * as S from "./styles";
import { getAllHeros, getHerosByName } from "./utils";

const Home: FC = () => {
  const [heros, setHeros] = useState<Superhero.GithubHeroType[]>([]);
  const [herosFound, setHerosFound] = useState<API.SearchHeroResponse>();
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce<string>(search, 400);

  const handleGetAllHeros = async () => {
    try {
      setHeros(await getAllHeros());
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }
  };

  const handleGetHeroByName = async () => {
    try {
      const herosData = await getHerosByName(debouncedSearchValue);

      setHerosFound(herosData as API.SearchHeroResponse);
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }
  };

  const handleGetHerosByNamePersist = useCallback(
    () => handleGetHeroByName(),
    [debouncedSearchValue]
  );

  useEffect(() => {
    handleGetAllHeros();
  }, []);

  useEffect(() => {
    handleGetHerosByNamePersist();
  }, [debouncedSearchValue]);

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

      {debouncedSearchValue ? (
        <ModalHeroSearch heros={herosFound?.results} />
      ) : null}

      <S.Cards>
        {heros.map((hero) => (
          <Link key={hero.id} to={`/hero/${hero.id}`}>
            <Card hero={hero} />
          </Link>
        ))}
      </S.Cards>
    </S.Wrapper>
  );
};

export default Home;
