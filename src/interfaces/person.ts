import { IAppearance } from "./appearance";
import { IBiography } from "./biography";
import { IConnections } from "./connections";
import { IImage } from "./image";
import { IPowerstats } from "./powerstats";
import { IWork } from "./work";

export interface IPerson {
  id: number;
  name: string;
  powerstats: IPowerstats;
  biography: IBiography;
  appearance: IAppearance;
  work: IWork;
  connections: IConnections;
  image: IImage;
}
