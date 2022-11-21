import styled from "styled-components";
import { SearchInput } from "../home/styles";

export const Wrapper = styled.div`
  margin: 4rem 5vw;
  display: flex;
  flex-direction: column;
`;

export const SearchHeroInput = styled(SearchInput)`
  margin-bottom: 20px;
  width: 500px;
`;

export const CreateHeroGroupWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
