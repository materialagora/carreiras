import * as S from "../styles";

type PowerStatsProps = {
  data: Superhero.PowerStatsType | undefined;
};

const PowerStats: React.FC<PowerStatsProps> = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <strong>Intelligence</strong>
        <span>{data?.intelligence}</span>
      </S.Item>
      <S.Item>
        <strong>Strength</strong>
        <span>{data?.strength}</span>
      </S.Item>
      <S.Item>
        <strong>Speed</strong>
        <span>{data?.speed}</span>
      </S.Item>
      <S.Item>
        <strong>Durability</strong>
        <span>{data?.durability}</span>
      </S.Item>
      <S.Item>
        <strong>Power</strong>
        <span>{data?.power}</span>
      </S.Item>
      <S.Item>
        <strong>Combat</strong>
        <span>{data?.combat}</span>
      </S.Item>
    </S.Wrapper>
  );
};

export default PowerStats;
