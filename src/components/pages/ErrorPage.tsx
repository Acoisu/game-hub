import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../active components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error);

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error) ? "Inavalid page" : "Unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
