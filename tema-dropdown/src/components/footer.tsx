import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "./colorMode";

interface FooterProps {
    empressName: string,
    bg: string,
    textColor: string
}

export default function Footer({empressName, bg, textColor}: FooterProps) {
    return (
        <Box w="100%" bg={bg} color={textColor} as="footer" position="fixed" bottom="0">
            <HStack justifyContent="space-between" p={4} paddingInline={7} fontSize="14px">
                <Link href="/" > <Text fontSize="16px" fontFamily="Mono">{empressName}</Text> </Link>
                <Text> <Text fontSize="14px"> ® Todos os direitos reservados </Text> </Text>
                <Link href="/"> Confira nossas políticas de privacidade </Link>
            </HStack>
        </Box>
    )
}