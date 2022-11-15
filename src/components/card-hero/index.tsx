import React from "react";

import * as S from "./styles";

const CardHero: React.FC = () => {
  return (
    <S.CardWrapper>
      <S.CardImage
        src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        alt="user-img-thumb"
      />
      <S.CardOverlay className="card__overlay">
        <S.CardHeader className="card__header">
          <S.CardArc xmlns="http://www.w3.org/2000/svg">
            <path />
          </S.CardArc>
          <S.CardThumb
            src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            alt="person-img-thumb"
          />
          <S.CardTitle>Genilson Araújo</S.CardTitle>
        </S.CardHeader>
        <S.CardDescription>
          <S.UserData>
            <S.ListItem>
              <strong>Age: </strong> 18
            </S.ListItem>
            <S.ListItem>
              <strong>EyeColor: </strong> yellow
            </S.ListItem>
            <S.ListItem>
              <strong>Company: </strong> koepe
            </S.ListItem>
          </S.UserData>
        </S.CardDescription>
      </S.CardOverlay>
    </S.CardWrapper>
  );
};

export default CardHero;
