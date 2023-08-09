import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store/store";

const Header = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading as={"h1"} size={"2xl"} paddingBottom={10} paddingLeft={2.5}>
      {genre?.name ? genre.name + " " : ""}
      {platform?.name ? platform.name + " games" : "Games"}
    </Heading>
  );
};

export default Header;
