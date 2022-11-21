import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ModalHeroSearch from "../../components/modal-hero-search";
import useDebounce from "../../hooks/use-debounce";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux";
import { addHero } from "../../store/create-hero-group";
import * as HomeStyles from "../home/styles";
import { getHerosByName } from "../home/utils";
import HerosAddedInList from "./components/heros-added-in-list";
import * as S from "./styles";
import { createHeroGroup } from "./utils";

const CreateHeroGroup: React.FC = () => {
  const [loadingHerosSearched, setLoadingHerosSearched] = useState(false);
  const [herosFound, setHerosFound] = useState<Superhero.HeroType[]>([]);
  const [search, setSearch] = useState("");
  const [groupName, setGroupName] = useState("");

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

  const handleCreateHeroGroup = () => {
    createHeroGroup({ groupName, heros });
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

      {heros.length ? (
        <>
          <S.CreateHeroGroupWrapper>
            <S.SearchHeroInput
              placeholder="type here the hero group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <HomeStyles.CreateHeroGroupButton onClick={handleCreateHeroGroup}>
              Create
            </HomeStyles.CreateHeroGroupButton>
          </S.CreateHeroGroupWrapper>

          <HerosAddedInList />
        </>
      ) : null}
    </S.Wrapper>
  );
};

export default CreateHeroGroup;
