import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatforms";
import { SortType } from "./SortSelector";
import SearchInput from "./SearchInput";

interface Props {
  genreFilter: Genre | null;
  platformFilter: Platforms | null;
  selectorFilter: SortType | null;
  search: string | null;
}

const GameGrid = ({
  genreFilter,
  platformFilter,
  selectorFilter,
  search,
}: Props) => {
  const { data, error, isLoading } = useGames(
    genreFilter,
    platformFilter,
    selectorFilter,
    search
  );
  const skeletons: number[] = [];
  for (let count = 0; count < 20; count++) {
    skeletons.push(count);
  }
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={Skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
