import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsArrowDownShort } from "react-icons/bs";

interface Props {
  onFilterSelect: (select: SortType) => void;
  selector: SortType | null;
}

export interface SortType {
  name: string;
  request: string;
}

const SortSelector = ({ onFilterSelect, selector }: Props) => {
  const sortTypes: SortType[] = [
    { name: "Relevance", request: "" },
    { name: "Name", request: "name" },
    { name: "Realeased date", request: "-dates" },
    { name: "Updated time", request: "-updated" },
    { name: "Rating", request: "-metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
        Order by : {selector?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortTypes.map((type) => (
          <MenuItem
            onClick={() => {
              onFilterSelect(type);
            }}
            key={type.name}
          >
            {type.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
