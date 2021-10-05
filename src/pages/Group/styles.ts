import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px;
  position: relative;

  h1 {
    width: 100%;
    max-width: 1200px;
    color: #fff;
    text-align: left;
    font-size: 48px;
    font-style: italic;
    text-shadow: #000 7px 7px;
    font-style: italic;
  }
`;

export const HeaderButtonsContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  button {
    width: 200px;
    height: 40px;

    & + button {
      margin-left: 16px;
    }
  }
`;

export const HeroesListContainer = styled.div`
  width: 100%;

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 21%;
  }
`;

export const HeroItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 48px 64px;
  width: 216px;
  height: 400px;
  transition: 0.2s;
  position: relative;
  -webkit-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  transform: skew(-10deg);
  transform-origin: bottom left;

  a {
    width: 100%;
    height: 75%;
    overflow: hidden;
    border: 7px solid #fff;
    outline: 5px solid #000;
    outline-offset: -0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      border-color: #1064c4;
    }

    img {
      margin-left: 20px solid transparent;
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: 0.3s;

      &:hover {
        height: 110%;
        width: 110%;
      }
    }
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    margin: 8px 0;
    width: 100%;
    font-family: 'Anton', sans-serif;
    font-style: italic;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
  }
`;
