import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { api } from "../../utils/api";

import { Container, ImageContainer, InfoContainer, PowerBar } from "./styles";

type Hero = {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
};

interface RouteParams {
  id: string;
}

export const Hero: React.FC = () => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams<RouteParams>();

  useEffect(() => {
    const getHero = async () => {
      const { data } = await api.get(`/${id}`);
      setHero(data);
      setLoading(false);
    };

    getHero();
  }, [setHero, setLoading]);

  return (
    <Container>
      {hero && (
        <>
          <ImageContainer>
            <h3>{hero.name} </h3> <img src={hero.image?.url} alt={hero.name} />
          </ImageContainer>

          <InfoContainer>
            <Tabs>
              <TabList>
                <Tab>Power Stats</Tab>
                <Tab>Biography</Tab>
                <Tab>Appeareance</Tab>
                <Tab>Work</Tab>
                <Tab>Connections</Tab>
              </TabList>

              <TabPanel>
                <h2>Power Stats</h2>
                <div>
                  <strong>Intelligence</strong>
                  <PowerBar size={hero.powerstats.intelligence}>
                    <span>{hero.powerstats.intelligence}</span>
                  </PowerBar>
                </div>
                <div>
                  <strong>Strength</strong>
                  <PowerBar size={hero.powerstats.strength}>
                    <span>{hero.powerstats.strength}</span>
                  </PowerBar>
                </div>
                <div>
                  <strong>Speed</strong>
                  <PowerBar size={hero.powerstats.speed}>
                    <span>{hero.powerstats.speed}</span>
                  </PowerBar>
                </div>
                <div>
                  <strong>Durability</strong>
                  <PowerBar size={hero.powerstats.durability}>
                    <span>{hero.powerstats.durability}</span>
                  </PowerBar>
                </div>
                <div>
                  <strong>Power</strong>
                  <PowerBar size={hero.powerstats.power}>
                    <span>{hero.powerstats.power}</span>
                  </PowerBar>
                </div>
                <div>
                  <strong>Combat</strong>
                  <PowerBar size={hero.powerstats.combat}>
                    <span>{hero.powerstats.combat}</span>
                  </PowerBar>
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Biography</h2>
                <div>
                  <strong>Full Name: </strong>
                  <span>{hero.biography["full-name"]}</span>
                </div>
                <div>
                  <strong>Alter egos: </strong>
                  <span>{hero.biography["alter-egos"]}</span>
                </div>
                <div>
                  <strong>Alias: </strong>
                  {hero.biography.aliases.reduce((previous, current, index) => {
                    if (!index) return current;
                    return `${previous}, ${current}`;
                  })}
                </div>
                <div>
                  <strong>Place of Birth: </strong>
                  <span> {hero.biography["place-of-birth"]}</span>
                </div>
                <div>
                  <strong>First Appearance: </strong>
                  <span> {hero.biography["first-appearance"]}</span>
                </div>
                <div>
                  <strong>Publisher: </strong>
                  <span> {hero.biography.publisher}</span>
                </div>
                <div>
                  <strong>Alignment: </strong>
                  <span> {hero.biography.alignment}</span>
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Appearance</h2>
                <div>
                  <strong>Gender: </strong>
                  <span>{hero.appearance.gender}</span>
                </div>
                <div>
                  <strong>Race: </strong>
                  <span>{hero.appearance.race}</span>
                </div>
                <div>
                  <strong>Height: </strong>
                  <span>{hero.appearance.height}</span>
                </div>
                <div>
                  <strong>Weight: </strong>
                  <span>{hero.appearance.weight}</span>
                </div>
                <div>
                  <strong>Eye Color: </strong>
                  <span>{hero.appearance["eye-color"]}</span>
                </div>
                <div>
                  <strong>Hair Color: </strong>
                  <span>{hero.appearance["hair-color"]}</span>
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Work</h2>
                <div>
                  <strong> Occupation: </strong>
                  <span>{hero.work.occupation}</span>
                </div>
                <div>
                  <strong> Base: </strong>
                  <span>{hero.work.base}</span>
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Connections</h2>
                <div>
                  <strong>Group Affiliation: </strong>
                  <span>{hero.connections["group-affiliation"]}</span>
                </div>
                <div>
                  <strong>Relatives </strong>
                  <span>{hero.connections.relatives}</span>
                </div>
              </TabPanel>
            </Tabs>
          </InfoContainer>
        </>
      )}
    </Container>
  );
};
