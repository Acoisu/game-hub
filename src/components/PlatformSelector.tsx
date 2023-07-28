import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsArrowDownShort } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onFilterPlatform: (platform: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ selectedPlatformId, onFilterPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
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
            onClick={() => onFilterPlatform(platform.id)}
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
