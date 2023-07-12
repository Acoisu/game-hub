import useGenres from "../hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  UnorderedList,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import getResizedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner color="gray.500" />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem padding={"5px"}>
          <HStack>
            <Image
              src={getResizedImageUrl(genre.image_background)}
              width={"45px"}
              borderRadius={5}
            ></Image>
            <Text fontSize={"lg"} key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
