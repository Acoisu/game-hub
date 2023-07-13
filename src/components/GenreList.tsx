import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  UnorderedList,
  filter,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import getResizedImageUrl from "../services/image-url";

interface Props {
  onFilterGenre: (genre: Genre) => void;
}

const GenreList = ({ onFilterGenre }: Props) => {
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
            <Button
              onClick={() => onFilterGenre(genre)}
              variant={"ghost"}
              fontSize={"lg"}
              key={genre.id}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
