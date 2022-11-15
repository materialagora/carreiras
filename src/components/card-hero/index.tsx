import React from "react";

import * as S from "./styles";

type CardHeroProps = {
  hero: Superhero.GithubHeroType;
};

const CardHero: React.FC<CardHeroProps> = ({ hero }) => {
  return (
    <S.CardWrapper>
      <S.CardImage src={hero.images.lg} alt="user-img-thumb" />
      <S.CardOverlay className="card__overlay">
        <S.CardHeader className="card__header">
          <S.CardArc xmlns="http://www.w3.org/2000/svg">
            <path />
          </S.CardArc>
          <S.CardThumb src={hero.images.lg} alt="person-img-thumb" />
          <S.CardTitle>{hero.name}</S.CardTitle>
        </S.CardHeader>
        <S.CardDescription>
          <S.UserData>
            <S.ListItem>
              <strong>Gender: </strong> {hero.appearance.gender}
            </S.ListItem>
            <S.ListItem>
              <strong>Race: </strong> {hero.appearance.race}
            </S.ListItem>
            <S.ListItem>
              <strong>Aliases: </strong> {hero.biography.aliases}
            </S.ListItem>
          </S.UserData>
        </S.CardDescription>
      </S.CardOverlay>
    </S.CardWrapper>
  );
};

export default CardHero;
