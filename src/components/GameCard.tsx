import {
  Card,
  CardBody,
  CardFooter,
  GridItem,
  HStack,
  Heading,
  Hide,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getResizedImageUrl from "../services/image-url";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { isLoading } = useGames();

  return isLoading ? (
    <GameCardSkeleton />
  ) : (
    <Card
      border="2px"
      borderColor="gray.500"
      borderRadius={10}
      overflow="Hidden"
    >
      <Image src={getResizedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore critic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
