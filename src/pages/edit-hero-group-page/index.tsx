import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroSearch from "../../components/hero-search";
import MutateHeroGroup from "../../components/mutate-hero-group";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux";
import { addHeroGroup } from "../../store/create-hero-group";
import * as S from "../create-hero-group-page/styles";
import { editHeroGroup, getHeroGroupInfo } from "./utils";

const EditHeroGroupPage: React.FC = () => {
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

  const handleEditHeroGroup = () => {
    const response = editHeroGroup({ id: heroGroupId!, groupName, heros });

    if (response === "success") {
      navigate("/hero-group/list");
    }
  };

  return (
    <S.Wrapper>
      <HeroSearch />

      <MutateHeroGroup
        type="Edit"
        heros={heros}
        groupName={groupName}
        setGroupName={setGroupName}
        onSubmit={handleEditHeroGroup}
      />
    </S.Wrapper>
  );
};

export default EditHeroGroupPage;
