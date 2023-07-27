import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsArrowDownShort } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onFilterPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onFilterPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList maxHeight={"700"} overflowY={"scroll"}>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onFilterPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

// {data.map((genre) => (

//     ))}
