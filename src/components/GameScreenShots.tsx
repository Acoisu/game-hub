import { Grid, SimpleGrid, Spinner, Image } from "@chakra-ui/react";
import React from "react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} paddingTop={5} spacing={5}>
      {data?.results.map((pic) => (
        <Image src={pic.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
