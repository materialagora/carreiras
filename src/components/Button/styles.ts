import styled from 'styled-components';

interface ButtonProps {
  color?: string;
}

export const Container = styled.button<ButtonProps>`
  background: ${(props) => props.color ?? '#4272a6'};
  text-transform: uppercase;
  font-weight: bold;
  height: 32px;
  color: #fff;
  width: 100%;
  margin-top: 4px;
  transition: 0.2s;
  -webkit-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  transform: skew(-10deg);
  border: 3px solid #000;
  outline: 2px solid #fff;
  outline-offset: -0.3rem;
  transition: 0.3s;

  &:hover {
    outline: 2px solid ${(props) => props.color ?? '#4272a6'};
  }
`;
