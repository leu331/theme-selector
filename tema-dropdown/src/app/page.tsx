"use client";

import { Box, Button, Heading, Link, VStack, HStack, Text  } from "@chakra-ui/react";
import { Provider } from "@/providers/chakra.provider";
import { ColorModeButton, useColorModeValue } from "@/components/color.mode";

export default function Home() {
  // cores que mudam conforme light/dark
  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Provider>
      <Box minH="100vh" bg={bg} color={textColor} p={8}>
        <VStack  align="stretch">
          <HStack justifyContent="space-between">
            <Heading fontSize={20}>Seletor de Tema</Heading>
            <HStack gap={2}>
              <Text fontWeight="550">Olá, Leuzimar</Text>
               <ColorModeButton /> 
            </HStack>
          </HStack>

       
          <HStack >
            <Link
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          
              color={linkColor}
              fontWeight="bold"
            >
              Deploy now
            </Link>
            <Link
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            
              color={linkColor}
              fontWeight="bold"
            >
              Read our docs
            </Link>
          </HStack>

          <Box as="footer" pt={8} borderTop="1px" borderColor={useColorModeValue("gray.200", "gray.700")}>
            <HStack >
              <Link
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               
                color={linkColor}
              >
                Learn
              </Link>
              <Link
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
             
                color={linkColor}
              >
                Examples
              </Link>
              <Link
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              
                color={linkColor}
              >
                Go to nextjs.org →
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Provider>
  );
}
