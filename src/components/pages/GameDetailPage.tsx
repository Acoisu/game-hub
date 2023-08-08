import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import GameScreenShots from "../GameScreenShots";
import GameMovie from "../GameMovie";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  if (error) console.log(error);

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{data.name}</Heading>
          <ExpandableText>{data.description_raw}</ExpandableText>
          <GameAttributes data={data} />
        </GridItem>
        <GridItem>
          <GameMovie gameId={data.id} />
          <GameScreenShots gameId={data.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
