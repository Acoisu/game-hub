import React from "react";
import useGames from "../hooks/useGames";
import {
  Box,
  Button,
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <Card>
        <Skeleton height={"250px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
