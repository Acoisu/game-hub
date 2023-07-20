import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector, { SortType } from "./components/SortSelector";
import Header from "./components/Header";

function App() {
  const [filterGenre, setFilterGenre] = useState<Genre | null>(null);
  const [filterPlatform, setFilterPlatform] = useState<Platforms | null>(null);
  const [filterSelect, setFilterSelect] = useState<SortType | null>(null);
  const [search, setSearch] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar search={(research) => setSearch(research)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={filterGenre}
            onFilterGenre={(genre) => setFilterGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Header genre={filterGenre?.name} platform={filterPlatform?.name} />
        <HStack paddingLeft={2.5}>
          <PlatformSelector
            selectedPlatform={filterPlatform}
            onFilterPlatform={(platform) => setFilterPlatform(platform)}
          />
          <SortSelector
            onFilterSelect={(filterSelect) => setFilterSelect(filterSelect)}
            selector={filterSelect}
          />
        </HStack>
        <GameGrid
          genreFilter={filterGenre}
          platformFilter={filterPlatform}
          selectorFilter={filterSelect}
          search={search}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
