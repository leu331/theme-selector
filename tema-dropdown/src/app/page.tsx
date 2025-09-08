"use client";

import { Box, Text  } from "@chakra-ui/react";
import { ChakrProvider } from "@/providers/chakra.provider";
import { ColorModeButton, useColorModeValue } from "@/components/colorMode";
import { ReactQueryProvider } from "@/providers/react.query.provider";
import UserList from "@/components/userList";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SearchBar } from "@/components/searchBar";
import { useEffect, useState } from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    
  const bg = useColorModeValue("gray.100", "gray.900");
     const bg1 = useColorModeValue("gray.300", "gray.600")
  const textColor = useColorModeValue("black", "white");
  const linkColor = useColorModeValue("blue.600", "blue.300");
   const [mounted, setMounted] = useState(false);
      useEffect(() => setMounted(true), []);
        if (!mounted) return null; 

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase())
  }

  return (
    <ChakrProvider>
      <ReactQueryProvider>
        <Box bg={bg1} color={textColor} paddingBlock={3} paddingInline={8} mb={4} >
          <Header
          userName="Leuzimar"
          bg={bg1}
          textColor={textColor}
          />
        </Box>
         <Text display="flex" justifyContent="center" fontWeight="bold">Usuários Cadastrados</Text>
        <Box w="100%" display="flex" justifyContent="center" pb={4} mt={3} paddingInline={8}>
         
          <SearchBar onSearch={handleSearch}/>
        </Box>

        <Box w="100%">
          <Footer empressName="DropD" bg={bg1} textColor={textColor}/>
        </Box >
        

        <UserList searchQuery={searchQuery} bg={bg1}/>
      </ReactQueryProvider>
    </ChakrProvider>
  );
}
