import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  TagRightIcon,
} from "@chakra-ui/react";
import usePlatforms, { Platforms } from "../hooks/usePlatforms";
import { BsArrowDownShort } from "react-icons/bs";

interface Props {
  onFilterPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}

const PlatformSelector = ({ selectedPlatform, onFilterPlatform }: Props) => {
  const { data, error } = usePlatforms(selectedPlatform);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
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
