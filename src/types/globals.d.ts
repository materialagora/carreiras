type SuperHeroResponseType<T> = T & { success: string };
interface IRouteContext<PathMatch> {
  match: PathMatch | null;
}
