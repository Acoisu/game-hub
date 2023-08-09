import { Grid, Text } from "@chakra-ui/react";
import DefinitionItem from "../../DefinitionItem";
import GameDetail from "../../entities/game detail/GameDetail";
import CriticScore from "../style components/CriticScore";

interface Props {
  data: GameDetail;
}

const GameAttributes = ({ data }: Props) => {
  return (
    <Grid templateColumns={"repeat(2, 1fr)"} padding={5}>
      <DefinitionItem title="Platforms">
        {data.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Metascore">
        <CriticScore critic={data.metacritic} />
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {data.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Developers">
        {data.developers.map((developer) => (
          <Text key={developer.id}>{developer.name}</Text>
        ))}
      </DefinitionItem>
    </Grid>
  );
};

export default GameAttributes;
