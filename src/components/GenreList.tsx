import React from "react";
import apiClient from "../services/api-client";
import useGenres from "../hooks/useGenres";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Genre {
  id: number;
  name: string;
}

const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {data.map((genre) => (
          <ListItem key={genre.id}>{genre.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
