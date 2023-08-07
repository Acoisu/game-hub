import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import GameMovie from "../GameMovie";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes data={data}></GameAttributes>
      <GameMovie gameId={data.id}></GameMovie>
    </>
  );
};

export default GameDetailPage;
