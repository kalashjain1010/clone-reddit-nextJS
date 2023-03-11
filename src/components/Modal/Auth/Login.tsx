import React, { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]:event.target.value
        }))
  } ;
  

  return (
    <form>
      <Input
        required
        name="email"
        placeholder="email"
        type="text"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{color:"gray.500"}}
        _hover={{
            bg:"white",
            border:"1px solid "  ,
            borderColor: "blue.500"
        }}
        _focus={{
            outline:"none",
            bg: "white",
            border:"1px solid "  ,
            borderColor: "blue.500"

        }}
        bg="gray.50"
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{color:"gray.500"}}
        _hover={{
            bg:"white",
            border:"1px solid "  ,
            borderColor: "blue.500"
        }}
        _focus={{
            outline:"none",
            bg: "white",
            border:"1px solid "  ,
            borderColor: "blue.500"

        }}
        bg="gray.50"
      />
      <Button
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        type="submit"
        // isLoading={loading}
      >
        Log In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
        //   onClick={() => toggleView("signup")}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
