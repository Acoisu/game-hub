import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortType } from "./components/SortSelector";
import Header from "./components/Header";
import { Platform } from "./hooks/useData";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  select: SortType | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <Navbar search={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onFilterGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Header
          genre={gameQuery?.genre?.name}
          platform={gameQuery.platform?.name}
        />
        <HStack paddingLeft={2.5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onFilterPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onFilterSelect={(select) => setGameQuery({ ...gameQuery, select })}
            selector={gameQuery.select}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
