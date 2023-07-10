import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  GridItem,
  Heading,
  Hide,
  Image,
} from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card border="2px" borderColor="grey" borderRadius={10} overflow="Hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
