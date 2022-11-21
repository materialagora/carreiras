import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModalHeroSearch from "../../components/modal-hero-search";
import useHero from "../../hooks/use-hero";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux";
import { addHeroGroup } from "../../store/create-hero-group";
import HerosAddedInList from "../create-hero-group/components/heros-added-in-list";
import * as S from "../create-hero-group/styles";
import * as HomeStyles from "../home/styles";
import { editHeroGroup, getHeroGroupInfo } from "./utils";

const EditHeroGroup: React.FC = () => {
  const {
    loadingHerosSearched,
    herosFound,
    search,
    setSearch,
    debouncedSearchValue,
    handleAddHeroInList,
  } = useHero();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { heroGroupId } = useParams();
  const heroGroupInfo = useMemo(
    () => getHeroGroupInfo(heroGroupId as string),
    [heroGroupId]
  );

  const { heros } = useAppSelector((state) => state.heros);
  const [groupName, setGroupName] = useState(heroGroupInfo?.groupName || "");

  useEffect(() => {
    if (heroGroupInfo) {
      dispatch(addHeroGroup(heroGroupInfo.heros));
    }
  }, []);

  const handleCreateHeroGroup = () => {
    const response = editHeroGroup({ id: heroGroupId!, groupName, heros });

    if (response === "success") {
      navigate("/hero-group/list");
    }
  };

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
              Edit
            </HomeStyles.CreateHeroGroupButton>
          </S.CreateHeroGroupWrapper>

          <HerosAddedInList />
        </>
      ) : null}
    </S.Wrapper>
  );
};

export default EditHeroGroup;
