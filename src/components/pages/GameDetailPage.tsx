import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import useGame from "../../hooks/useGame";
import getResizedImageUrl from "../../services/image-url";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data } = useGame(slug!);
  console.log(data);

  return (
    <>
      <Card>
        <CardHeader>
          <Heading>{data?.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{data?.description_raw}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default GameDetailPage;
