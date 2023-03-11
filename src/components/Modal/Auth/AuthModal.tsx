import React, { useEffect } from "react";
import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState, ModalView } from "@/atoms/authModalAtom";
import AuthInputs from "./AuthInputs";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "reset password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="Center"
          >
            <Flex
              flexDirection={"column"}
              align="center"
              justify="Center"
              width="70%"
              pb={6}
              // border="1px solid red"
            >
              {/* <OAuthButtons/> */}
              <AuthInputs toggleView={function (view: ModalView): void {
                throw new Error("Function not implemented.");
              } }/>
              {/* <ResetPassword/> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
