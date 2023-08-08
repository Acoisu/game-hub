import Developer from "./Developer";
import Genre from "./Genre";
import Platform from "./Platform";

export default interface GameDetail {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  developers: Developer[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}
