import { localAPI } from './localAPI';
import Hero from '../types/hero';

interface Group {
  id: string;
  name: string;
  members: Hero[];
}

interface AddHeroToGroupProps {
  hero: Hero;
  groups: Group[];
}

export async function addHeroToGroup({ hero, groups }: AddHeroToGroupProps) {
  groups.forEach(async (group) => {
    await localAPI.put(`/groups/${group.id}`, {
      name: group.name,
      members: [...group.members, hero],
    });
  });
}
