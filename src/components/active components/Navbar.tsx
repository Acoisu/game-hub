import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/jeux-video.png";
import ColorModeSwitch from "../style components/ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={"cover"}></Image>
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
