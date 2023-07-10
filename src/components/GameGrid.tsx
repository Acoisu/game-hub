import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { gameList, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {gameList.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
