import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styles";
import { getHeroById } from "./utils";

const Hero: React.FC = () => {
  const [hero, setHero] = useState<Superhero.HeroType>();
  const { heroId } = useParams();

  console.log(hero);

  const handleGetHeroById = async () => {
    try {
      const id = heroId as string;

      setHero(await getHeroById(id));
    } catch (err: any) {
      toast.error(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    handleGetHeroById();
  }, []);

  return (
    <S.Wrapper>
      <S.Left>
        <strong>{hero?.name}</strong>

        <S.Image src={hero?.image.url} alt="hero-image" />
      </S.Left>
      <S.Right></S.Right>
    </S.Wrapper>
  );
};

export default Hero;
