import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./color.mode";

interface HeaderProps {
    userName?: string,
    bg?: string,
    textColor?: string
}

export default function Header({userName, bg, textColor}: HeaderProps) {
    return (
        <Box bg={bg} color={textColor}>
        <VStack  align="stretch">
          <HStack justifyContent="space-between">
            <Heading fontSize={20}>Dashboard</Heading>
            <HStack gap={2}>
                <Text fontWeight="550">Olá, ${userName}</Text>
                <ColorModeButton /> 
            </HStack>
          </HStack>              
        </VStack>
      </Box>
    )
}
