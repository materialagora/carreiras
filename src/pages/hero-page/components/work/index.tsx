import * as S from "../styles";

type WorkProps = {
  data: Superhero.WorkType | undefined;
};

const Work: React.FC<WorkProps> = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <strong>Occupation</strong>
        <span>{data?.occupation}</span>
      </S.Item>
      <S.Item>
        <strong>Base</strong>
        <span>{data?.base}</span>
      </S.Item>
    </S.Wrapper>
  );
};

export default Work;
