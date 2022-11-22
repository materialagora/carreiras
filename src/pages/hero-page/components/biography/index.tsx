import * as S from "../styles";

type BiographyProps = {
  data: Superhero.BiographyType | undefined;
};

const Biography: React.FC<BiographyProps> = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <strong>Full Name</strong>
        <span>{data?.fullName}</span>
      </S.Item>
      <S.Item>
        <strong>Alter Egos</strong>
        <span>{data?.alterEgos}</span>
      </S.Item>
      <S.Item>
        <strong>Aliases</strong>
        <span>{data?.aliases.join(" ")}</span>
      </S.Item>
      <S.Item>
        <strong>Place Of Birth</strong>
        <span>{data?.placeOfBirth}</span>
      </S.Item>
      <S.Item>
        <strong>First Appearance</strong>
        <span>{data?.firstAppearance}</span>
      </S.Item>
      <S.Item>
        <strong>Publisher</strong>
        <span>{data?.publisher}</span>
      </S.Item>
      <S.Item>
        <strong>Alignment</strong>
        <span>{data?.alignment}</span>
      </S.Item>
    </S.Wrapper>
  );
};

export default Biography;
