import styled from "styled-components";

interface PowerBarProps {
  size: string;
}

export const Container = styled.div`
  color: #ffff;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
`;

export const ImageContainer = styled.div`
  h3 {
    font-size: 36px;
    margin: 10px 0;
  }

  img {
    width: 350px;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
  flex: 1;

  h2 {
    margin: 10px 0;
  }

  div {
    margin-top: 16px;
    font-size: 24px;
  }
`;

export const PowerBar = styled.div<PowerBarProps>`
  width: ${(props) => Number(props.size)}%;
  height: 20px;
  background-color: red;
  display: flex;
  align-items: center;
  -webkit-transform: skew(-10deg);
      -ms-transform: skew(-10deg);
      transform: skew(-10deg); 

  span {
    font-size: 15px;
    display: block;
    margin-left: 5px;
    font-weight: 700;
  }
`;
