import { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CardHero from "../../components/card-hero";
import ModalHeroSearch from "../../components/modal-hero-search";
import useDebounce from "../../hooks/use-debounce";
import useHero from "../../hooks/use-hero";
import * as S from "./styles";
import { getAllHeros } from "./utils";

const Home: FC = () => {
  const {
    search,
    setSearch,
    herosFound,
    handleGetHeroByName,
    loadingHerosSearched,
  } = useHero();

  const [loadingHeros, setLoadingHeros] = useState(false);
  const [heros, setHeros] = useState<Superhero.GithubHeroType[]>([]);

  const debouncedSearchValue = useDebounce<string>(search, 400);

  const handleGetAllHeros = async () => {
    setLoadingHeros(true);

    try {
      setHeros(await getAllHeros());
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }

    setLoadingHeros(false);
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

        <Link to="/hero-group/create">
          <S.CreateHeroGroupButton>Create Hero Group</S.CreateHeroGroupButton>
        </Link>
      </S.SearchHeroInput>

      {debouncedSearchValue ? (
        <ModalHeroSearch heros={herosFound} isLoading={loadingHerosSearched} />
      ) : null}

      <S.Cards>
        {loadingHeros ? (
          <h2>Loading ...</h2>
        ) : (
          heros.map((hero) => (
            <Link key={hero.id} to={`/hero/${hero.id}`}>
              <CardHero hero={hero} />
            </Link>
          ))
        )}
      </S.Cards>
    </S.Wrapper>
  );
};

export default Home;
