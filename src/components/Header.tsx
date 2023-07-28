import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const Header = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

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
