import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ModalHeroSearch from "../../components/modal-hero-search";
import useDebounce from "../../hooks/use-debounce";
import { getHerosByName } from "../home/utils";
import * as S from "./styles";

const CreateHeroGroup: React.FC = () => {
  const [loadingHerosSearched, setLoadingHerosSearched] = useState(false);
  const [herosFound, setHerosFound] = useState<API.SearchHeroResponse>();
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce<string>(search, 400);

  const handleGetHeroByName = async () => {
    setLoadingHerosSearched(true);

    try {
      const herosData = await getHerosByName(debouncedSearchValue);

      setHerosFound(herosData as API.SearchHeroResponse);
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }

    setLoadingHerosSearched(false);
  };

  const handleGetHerosByNamePersist = useCallback(
    () => handleGetHeroByName(),
    [debouncedSearchValue]
  );

  useEffect(() => {
    handleGetHerosByNamePersist();
  }, [debouncedSearchValue]);

  return (
    <S.Wrapper>
      <S.SearchHeroInput
        placeholder="search for some hero ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {debouncedSearchValue ? (
        <ModalHeroSearch
          heros={herosFound?.results}
          isLoading={loadingHerosSearched}
          type="search"
        />
      ) : null}
    </S.Wrapper>
  );
};

export default CreateHeroGroup;
