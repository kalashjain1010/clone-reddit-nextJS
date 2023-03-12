import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/Auth/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { Button } from "@/chakra/buttons";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      
      <AuthModal />
      <Flex justify="center" align="center" >
        {user ? (
          <button onClick={() => signOut(auth)}>log out</button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};

export default RightContent;
