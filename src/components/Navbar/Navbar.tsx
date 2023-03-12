import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { auth } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";


const Navbar: React.FC = () => {
  const [user , loading , error]= useAuthState(auth)
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
        <RightContent user={user}/>
      </Flex>
    </Flex>
  );
};

export default Navbar;
