import { GridItem, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ title, children }: Props) => {
  return (
    <GridItem>
      <Heading size={"sm"} color={"gray.500"} paddingTop={5} paddingBottom={2}>
        {title}
      </Heading>
      <Text>{children}</Text>
    </GridItem>
  );
};

export default DefinitionItem;
