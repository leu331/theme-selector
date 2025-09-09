import { Box, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useColorModeValue } from "./colorMode";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");

  const bg1 = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("black", "white");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
    onSearch(query);
  };

  return (
    <Box w="100%" maxW="450px" ml="auto">
      <Box
        display="flex"
        bg={bg1}
        color={textColor}
        border="2px solid"
        gap={2}
        borderRadius="25px"
        alignItems="center"
        paddingInline={4}
      >
        <MagnifyingGlass size={20} />
        <Input
          placeholder="Digite o nome que está procurando"
          value={search}
          onChange={handleSearch}
          size="md"
          border="none"
          outline="none"
          bg="transparent"
        />
      </Box>
    </Box>
  );
}