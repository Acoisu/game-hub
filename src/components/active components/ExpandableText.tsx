import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const maxChar = 300;

  if (!children) return null;

  if (children.length < maxChar) return <Text>{children}</Text>;

  const summary = children.substring(0, maxChar) + "...";

  return (
    <Text>
      {expanded ? children : summary}
      <Button size={"xs"} onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
