import { Box, Heading, Spinner } from "@chakra-ui/react";
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
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes data={data}></GameAttributes>
      <GameScreenShots gameId={data.id} />
      <GameMovie gameId={data.id} />
    </>
  );
};

export default GameDetailPage;
