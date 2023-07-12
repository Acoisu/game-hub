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
import useGames, { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getResizedImageUrl from "../services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import useData, { Games } from "../hooks/useData";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { isLoading } = useGames();

  return (
    <>
      <Card height={"100%"}>
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
    </>
  );
};

export default GameCard;
