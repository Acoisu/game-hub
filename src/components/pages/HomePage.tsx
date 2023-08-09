import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../active components/GameGrid";
import GenreList from "../filter compnents/GenreList";
import Header from "../style components/Header";
import PlatformSelector from "../filter compnents/PlatformSelector";
import SortSelector from "../filter compnents/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` " main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Header />
        <HStack paddingLeft={2.5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
