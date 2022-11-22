import * as S from "../styles";

type ConnectionsProps = {
  data: Superhero.ConnectionsType | undefined;
};

const Connections: React.FC<ConnectionsProps> = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Item>
        <strong>Group Affiliation</strong>
        <span>{data?.groupAffiliation}</span>
      </S.Item>
      <S.Item>
        <strong>Relatives</strong>
        <span>{data?.relatives}</span>
      </S.Item>
    </S.Wrapper>
  );
};

export default Connections;
