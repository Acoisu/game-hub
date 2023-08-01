import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const Header = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  //   console.log(genre);
  //   console.log(platform);

  return (
    <Heading as={"h1"} size={"2xl"} paddingBottom={10} paddingLeft={2.5}>
      {genre?.name ? genre.name + " " : ""}
      {platform?.name ? platform.name + " games" : "Games"}
    </Heading>
  );
};

export default Header;
