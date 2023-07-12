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
      width={"15em"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
