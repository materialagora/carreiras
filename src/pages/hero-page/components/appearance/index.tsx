import * as S from "../styles";

type AppearanceProps = {
  data: Superhero.AppearanceType | undefined;
};

const Appearance: React.FC<AppearanceProps> = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <strong>Gender</strong>
        <span>{data?.gender}</span>
      </S.Item>
      <S.Item>
        <strong>Race</strong>
        <span>{data?.race}</span>
      </S.Item>
      <S.Item>
        <strong>Height</strong>
        <span>{data?.height.join(" ")}</span>
      </S.Item>
      <S.Item>
        <strong>Weight</strong>
        <span>{data?.weight.join(" ")}</span>
      </S.Item>
      <S.Item>
        <strong>Eye Color</strong>
        <span>{data?.eyeColor}</span>
      </S.Item>
      <S.Item>
        <strong>Hair Color</strong>
        <span>{data?.hairColor}</span>
      </S.Item>
    </S.Wrapper>
  );
};

export default Appearance;
