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
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #000;
    font-style: italic;
    text-align: center;
  }

  img {
    width: 350px;
    border: 8px solid #000;
    outline: 1px solid #fff;
    outline-offset: -0.3rem;
    transition: 0.3s;
  }

`;

export const InfoContainer = styled.div`
  margin-left: 30px;
  flex: 1;

  h2 {
    margin: 10px 0;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #000;
    font-style: italic;
    
  }

  strong {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-style: italic;
  }

  div {
    margin-top: 16px;
    font-size: 24px;
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
  transition: 0.3s;

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
