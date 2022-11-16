import { useParams } from "react-router-dom";

const Hero: React.FC = () => {
  const params = useParams();
  return <h1>Hello, {params.heroName}</h1>;
};

export default Hero;
