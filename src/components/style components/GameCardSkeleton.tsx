import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <Card height={"100%"}>
        <Skeleton height={"250px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
