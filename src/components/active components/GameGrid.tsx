import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "../style components/GameCardContainer";
import GameCardSkeleton from "../style components/GameCardSkeleton";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons: number[] = [];
  for (let count = 0; count < 20; count++) {
    skeletons.push(count);
  }

  return (
    <>
      {error && <Text>{error.message}</Text>}

      <InfiniteScroll
        dataLength={data?.pages.length || 0} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
        endMessage={<Text>You got all the games already </Text>}
      >
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
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
