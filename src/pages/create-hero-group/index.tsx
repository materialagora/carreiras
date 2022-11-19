import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardHero from "../../components/card-hero";
import ModalHeroSearch from "../../components/modal-hero-search";
import useDebounce from "../../hooks/use-debounce";
import * as HomeStyles from "../home/styles";
import { getHerosByName } from "../home/utils";
import * as S from "./styles";

const CreateHeroGroup: React.FC = () => {
  const [loadingHerosSearched, setLoadingHerosSearched] = useState(false);
  const [herosFound, setHerosFound] = useState<Superhero.HeroType[]>([]);
  const [heros, setHeros] = useState<Superhero.HeroType[]>([]);
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce<string>(search, 400);

  const handleGetHeroByName = async () => {
    setLoadingHerosSearched(true);

    try {
      const herosData = await getHerosByName(debouncedSearchValue);

      setHerosFound(herosData);
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }

    setLoadingHerosSearched(false);
  };

  const handleGetHerosByNamePersist = useCallback(
    () => handleGetHeroByName(),
    [debouncedSearchValue]
  );

  const handleAddHeroInList = (hero: Superhero.HeroType) => {
    const heroAlreadyExists = heros.find(
      (heroIterator) => heroIterator.name === hero.name
    );

    if (heroAlreadyExists) {
      toast.error("Error: hero already exists");
      return;
    }

    if (herosFound) {
      setHerosFound(
        herosFound.filter((heroFound) => heroFound.name !== hero.name)
      );
    }

    setHeros((prevHeros) => [...prevHeros, hero]);
  };

  useEffect(() => {
    debouncedSearchValue && handleGetHerosByNamePersist();
  }, [debouncedSearchValue]);

  return (
    <S.Wrapper>
      <S.SearchHeroInput
        placeholder="search for some hero to add ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {debouncedSearchValue ? (
        <ModalHeroSearch
          heros={herosFound}
          isLoading={loadingHerosSearched}
          type="search"
          getHeroInfo={handleAddHeroInList}
        />
      ) : null}

      <HomeStyles.Cards>
        {heros.map((hero) => (
          <CardHero key={hero.id} hero={hero} />
        ))}
      </HomeStyles.Cards>
    </S.Wrapper>
  );
};

export default CreateHeroGroup;
