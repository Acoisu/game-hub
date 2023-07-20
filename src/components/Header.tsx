import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  genre: string | null;
  platform: string | null;
}

const Header = ({ genre, platform }: Props) => {
  //   console.log(genre);
  //   console.log(platform);

  return (
    <Heading as={"h1"} size={"3xl"} paddingBottom={10} paddingLeft={2.5}>
      {genre ? genre + " " : ""}
      {platform ? platform + " games" : "Games"}
    </Heading>
  );
};

export default Header;
