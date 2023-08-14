import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Game from "../../entities/Game";
import getResizedImageUrl from "../../services/image-url";
import CriticScore from "../style components/CriticScore";
import PlatformIconList from "../filter compnents/PlatformIconList";
import { Link } from "react-router-dom";
import GameDetailPage from "../pages/GameDetailPage";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Link to={"/games/" + game.slug}>
        <Card height={"100%"}>
          <Image src={getResizedImageUrl(game.background_image)} />
          <CardBody>
            <Heading fontSize="2xl">
              <Text>{game.name}</Text>
            </Heading>
            <HStack justifyContent={"space-between"}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore critic={game.metacritic} />
            </HStack>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default GameCard;
