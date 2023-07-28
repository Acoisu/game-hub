import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getResizedImageUrl from "../services/image-url";

interface Props {
  onFilterGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onFilterGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner color="gray.500" />;

  return (
    <>
      <Heading marginBottom={2} as={"h2"} size={"lg"}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem padding={0.5}>
            <HStack>
              <Image
                key={genre.image_background}
                src={getResizedImageUrl(genre.image_background)}
                width={"45px"}
                borderRadius={5}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => onFilterGenre(genre)}
                variant={"ghost"}
                backgroundColor={genre.id === selectedGenreId ? "gray.500" : ""}
                fontSize={"lg"}
                key={genre.id}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
