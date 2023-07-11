import React from "react";
import apiClient from "../services/api-client";
import useGenres from "../hooks/useGenres";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const GenreList = () => {
  const { genreList } = useGenres();

  return (
    <UnorderedList>
      {genreList.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreList;
