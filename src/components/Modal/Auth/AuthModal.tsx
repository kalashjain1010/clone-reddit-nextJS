import React, { useEffect } from "react";
import {
    Button,
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
import { authModalState } from "@/atoms/authModalAtom";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
    const[modalState, setModalState]=useRecoilState(authModalState)

    const handleClose =() =>{
      setModalState((prev) =>({
        ...prev,
        open:false,
      }));
    }
  return (
   <>
   

      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          
        </ModalContent>
      </Modal></>
  );
};
export default AuthModal;
