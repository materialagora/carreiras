import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSearch from "../../components/hero-search";
import MutateHeroGroup from "../../components/mutate-hero-group";
import { useAppSelector } from "../../hooks/use-redux";
import * as S from "./styles";
import { createHeroGroup } from "./utils";

const CreateHeroGroupPage: React.FC = () => {
  const [groupName, setGroupName] = useState("");

  const navigate = useNavigate();
  const { heros } = useAppSelector((state) => state.heros);

  const handleCreateHeroGroup = () => {
    const response = createHeroGroup({ groupName, heros });

    if (response === "success") {
      navigate("/hero-group/list");
    }
  };

  return (
    <S.Wrapper>
      <HeroSearch />

      <MutateHeroGroup
        type="Create"
        heros={heros}
        groupName={groupName}
        setGroupName={setGroupName}
        onSubmit={handleCreateHeroGroup}
      />
    </S.Wrapper>
  );
};

export default CreateHeroGroupPage;
