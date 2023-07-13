import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  TagRightIcon,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsArrowDownShort } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;

  console.log({ data });

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsArrowDownShort />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

// {data.map((genre) => (

//     ))}
