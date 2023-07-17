import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";

const SortSelector = () => {
  const [type, setType] = useState<string>();

  const sortType: string[] = [
    "Name",
    "Released",
    "added",
    "Created",
    "Updated",
    "Rating",
    "Metacritic",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
        Order by : {type || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortType.map((type) => (
          <MenuItem
            onClick={() => {
              setType(type);
            }}
            key={type}
          >
            {type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
