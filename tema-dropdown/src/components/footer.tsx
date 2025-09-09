import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface FooterProps {
  empressName: string;
  bg: string;
  textColor: string;
}

export default function Footer({ empressName, bg, textColor }: FooterProps) {
  return (
    <Box
      w="100%"
      bg={bg}
      color={textColor}
      as="footer"
      position="fixed"
      bottom="0"
      zIndex={5000}
    >
      <HStack
        justifyContent="space-between"
        p={4}
        paddingInline={4}
        fontSize="14px"
      >
        <Link href="/">
          <Text fontSize="16px" fontFamily="Mono">
            {empressName}
          </Text>
        </Link>

        <Text fontSize="14px">® Todos os direitos reservados</Text>

        <Link href="/">
          Confira nossas políticas de privacidade
        </Link>
      </HStack>
    </Box>
  );
}
