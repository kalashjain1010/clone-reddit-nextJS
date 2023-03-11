import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/RedditFace.svg" height="30px" />
        <Image
          src="/images/RedditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Flex>
        <SearchInput />
      </Flex>
    </Flex>
  );
};

export default Navbar;
