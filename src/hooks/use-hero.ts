import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getHerosByName } from "../pages/home/utils";
import { addHero } from "../store/create-hero-group";
import useDebounce from "./use-debounce";
import { useAppDispatch, useAppSelector } from "./use-redux";

function useHero() {
  const [loadingHerosSearched, setLoadingHerosSearched] = useState(false);
  const [herosFound, setHerosFound] = useState<Superhero.HeroType[]>([]);
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const { heros } = useAppSelector((state) => state.heros);

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
      (heroIterator) => heroIterator.id === hero.id
    );

    if (heroAlreadyExists) {
      toast.error("Error: hero already exists");
      return;
    }

    if (herosFound) {
      setHerosFound(herosFound.filter((heroFound) => heroFound.id !== hero.id));
    }

    dispatch(addHero(hero));
  };

  useEffect(() => {
    debouncedSearchValue && handleGetHerosByNamePersist();
  }, [debouncedSearchValue]);

  return {
    loadingHerosSearched,
    setLoadingHerosSearched,
    herosFound,
    setHerosFound,
    search,
    setSearch,
    debouncedSearchValue,
    handleGetHeroByName,
    handleAddHeroInList,
  };
}

export default useHero;
