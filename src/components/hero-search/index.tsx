import useHero from "../../hooks/use-hero";
import ModalHeroSearch from "../modal-hero-search";
import * as S from "./styles";

const HeroSearch: React.FC = () => {
  const {
    loadingHerosSearched,
    herosFound,
    search,
    setSearch,
    debouncedSearchValue,
    handleAddHeroInList,
  } = useHero();

  return (
    <>
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
    </>
  );
};

export default HeroSearch;
