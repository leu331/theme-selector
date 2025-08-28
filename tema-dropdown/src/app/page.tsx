"use client";

import { Box, Text  } from "@chakra-ui/react";
import { ChakrProvider } from "@/providers/chakra.provider";
import { ColorModeButton, useColorModeValue } from "@/components/color.mode";
import { ReactQueryProvider } from "@/providers/react.query.provider";
import UserList from "@/components/userList";
import Header from "@/components/Header";

export default function Home() {
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <ChakrProvider>
      <ReactQueryProvider>
        <Box bg={bg} color={textColor} paddingBlock={5} paddingInline={8} mb={3}>
          <Header
          userName="Leuzimar"
          bg={bg}
          textColor={textColor}
          />
        </Box>

        <Box w="100%" display="flex" justifyContent="center" pb={4} mt={6}>
          <Text fontWeight="bold">Usuários Cadastrados</Text>
        </Box>

        <UserList/>
      </ReactQueryProvider>
    </ChakrProvider>
  );
}
