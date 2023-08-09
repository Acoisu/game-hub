import { Badge } from "@chakra-ui/react";

interface Props {
  critic: number;
}

const CriticScore = ({ critic }: Props) => {
  const color =
    critic > 85 ? "green.500" : critic > 70 ? "yellow.500" : "red.500";
  return <Badge bgColor={color}>{critic}</Badge>;
};

export default CriticScore;
