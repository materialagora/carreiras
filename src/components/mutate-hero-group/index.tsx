import HerosAddedInList from "../heros-added-in-list";
import * as S from "./styles";

type MutateHeroGroupProps = {
  type: "Create" | "Edit";
  groupName: string;
  setGroupName: (e: string) => void;
  heros: Superhero.HeroType[];
  onSubmit: () => void;
};

const MutateHeroGroup: React.FC<MutateHeroGroupProps> = ({
  type,
  groupName,
  setGroupName,
  heros,
  onSubmit,
}) => {
  return heros.length ? (
    <>
      <S.HeroGroupWrapper>
        <S.SearchHeroInput
          placeholder="type here the hero group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <S.HeroGroupButton onClick={onSubmit}>{type}</S.HeroGroupButton>
      </S.HeroGroupWrapper>

      <HerosAddedInList heros={heros} />
    </>
  ) : null;
};

export default MutateHeroGroup;
