import { Spinner } from "@chakra-ui/react";
import useMovies from "../../hooks/game detail/useMovies";

interface Props {
  gameId: number;
}

const GameMovie = ({ gameId }: Props) => {
  const { data, isLoading, error } = useMovies(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstM = data?.results[0];

  return firstM ? <video src={firstM?.data["max"]} controls /> : null;
};

export default GameMovie;
