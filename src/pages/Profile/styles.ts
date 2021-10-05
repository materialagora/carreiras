import styled from "styled-components";

interface PowerBarProps {
  size: string;
}

export const Container = styled.div`
  display: flex;
  color: #ffff;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 24px;
  background: #001526;
  -webkit-transform: skew(-10deg);
      -ms-transform: skew(-10deg);
      transform: skew(-10deg); 
  border: 5px solid #000;
  outline: 3px solid #fff;
  
`;

export const ImageContainer = styled.div`
  background: #000c16;
  border-right: 5px solid #000;

  img {
    width: 300px;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
  flex: 1;

  h3 {
    font-size: 36px;
    margin: 10px 0;
    text-shadow: #000 7px 7px;
    font-style: italic;
  }

  strong {
    text-shadow: #000 2px 2px;
    color: #ffcc01;
    font-weight: normal;
  }

  div {
    margin-top: 16px;
    font-size: 20px;
  }
`;

export const PowerBar = styled.div<PowerBarProps>`
  width: ${(props) => Number(props.size)}%;
  height: 35px;
  background-color: #000;
  display: flex;
  align-items: center;
  -webkit-transform: skew(-10deg);
      -ms-transform: skew(-10deg);
      transform: skew(-10deg); 
  border: 3px solid #000;
  outline: 2px solid #d7bb02;
  outline-offset: -0.3rem;

  &:hover {
    outline: 2px solid ${(props) => props.color ?? '#000'};
  }

  span {
    font-size: 15px;
    display: block;
    margin-left: 5px;
    font-weight: 700;
    color: #ffcc01;
  }
`;
