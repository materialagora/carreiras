import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <Container color={color} onClick={onClick}>
      {children}
    </Container>
  );
};

export { Button };
