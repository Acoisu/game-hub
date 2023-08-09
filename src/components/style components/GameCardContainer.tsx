import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      border="2px"
      borderColor="gray.500"
      borderRadius={10}
      overflow="Hidden"
      width={"100%"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
