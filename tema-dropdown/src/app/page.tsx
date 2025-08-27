"use client";

import { Box, Button, Heading, Link, VStack, HStack, Text  } from "@chakra-ui/react";
import { ChakrProvider } from "@/providers/chakra.provider";
import { ColorModeButton, useColorModeValue } from "@/components/color.mode";
import { ReactQueryProvider } from "@/providers/react.query.provider";
import UserList from "@/components/userList";

export default function Home() {
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <ChakrProvider>
      <ReactQueryProvider>

        <Box bg={bg} color={textColor} p={8} mb={3}>
          <VStack  align="stretch">
            <HStack justifyContent="space-between">
              <Heading fontSize={20}>Dashboard</Heading>
              <HStack gap={2}>
                <Text fontWeight="550">Olá, Leuzimar</Text>
                <ColorModeButton /> 
              </HStack>
            </HStack>
        </VStack>
      </Box>

      <Box w="100%" display="flex" justifyContent="center" pb={4}>
        <Text fontWeight="bold">Usuários Cadastrados</Text>
      </Box>

      <UserList/>
     

      </ReactQueryProvider>
    </ChakrProvider>
  );
}
