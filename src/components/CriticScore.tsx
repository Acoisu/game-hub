import { Badge, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  critic: number;
}

const CriticScore = ({ critic }: Props) => {
  const color =
    critic > 85 ? "green.500" : critic > 82 ? "yellow.500" : "red.500";
  return (
    <Badge marginX={5} bgColor={color}>
      {critic}
    </Badge>
  );
};

export default CriticScore;
