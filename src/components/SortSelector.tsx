import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsArrowDownShort } from "react-icons/bs";
import useGameQueryStore from "../store/store.ts";

export interface SortType {
  name: string;
  request: string;
}

const SortSelector = () => {
  const sortTypes: SortType[] = [
    { name: "Relevance", request: "" },
    { name: "Name", request: "name" },
    { name: "Realeased date", request: "-dates" },
    { name: "Updated time", request: "-updated" },
    { name: "Rating", request: "-metacritic" },
  ];
  const selector = useGameQueryStore((s) => s.gameQuery.select);
  const setSelector = useGameQueryStore((s) => s.setSelect);
  const currentSortType = sortTypes.find(
    (type) => type?.name === selector?.name
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
        Order by : {currentSortType?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortTypes.map((type) => (
          <MenuItem
            onClick={() => {
              setSelector(type);
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
