"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import {
  VStack,
  HStack,
  Box,
  Button,
  Spinner,
  Text,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import {Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,} from "@chakra-ui/modal"
import { fetchUsers, fetchUserDetails } from "@/api/users";
import { useColorModeValue } from "./colorMode";

export default function UserList() {
  const textColor = useColorModeValue("black", "white");
   const bg = useColorModeValue("gray.100", "gray.900");
  const { data, isLoading, error } = useQuery("users", fetchUsers);

 const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

    const openModal: () => void = () => setIsOpen(true);
    const closeModal: () => void = () => setIsOpen(false);


  const { data: userDetails, isLoading: isUserLoading } = useQuery(
    ["user", selectedUserId],
    () => fetchUserDetails(selectedUserId!),
    {
      enabled: selectedUserId !== null,
    }
  );

  if (isLoading) return <Spinner />;
  if (error) return <Text>Erro ao carregar usuários</Text>;

  return (
    <VStack align="stretch" mt={1}>
     <SimpleGrid  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}  gap={4} paddingInline={7}>
  {data.map((user: any) => (
    <Button
    bg={bg}
      color={textColor}
      key={user.id}
      onClick={() => {
        setSelectedUserId(user.id);
        console.log(`Usuário selecionado: ${user.name}`);
        openModal();
      }}
    >
      <Text fontWeight="medium" fontSize={15}>
         {user.name}
      </Text>
    </Button>
  ))}
</SimpleGrid>

    
<Modal isOpen={isOpen} onClose={closeModal}>
  <ModalOverlay 
 
    backdropFilter="blur(5px)"/>
  <ModalContent
    maxW="400px"
    p={8}
    bg="gray.900"
    borderRadius="16px"
    color={textColor}
    position="fixed"
    top="30%"
    left="40%"
    transform="translate(-50%, -50%)"
    border="2px solid"
    borderColor={bg}
  >
    <Box marginLeft="auto" p={2}>
        <ModalCloseButton cursor="pointer"/>
    </Box>
   
    <ModalHeader textAlign="center" fontWeight="bold">Detalhes do Usuário</ModalHeader>
    <ModalBody>
      {isUserLoading ? (
        <Spinner />
      ) : (
        userDetails && (
          <VStack  gap={5} paddingInline={2} paddingBlock={4}>
            <Text><b>Nome:</b> {userDetails.name}</Text>
            <Text><b>Email:</b> {userDetails.email}</Text>
            <Text><b>Telefone:</b> {userDetails.phone}</Text>
            <Text><b>Website:</b> {userDetails.website}</Text>
          </VStack>
        )
      )}
    </ModalBody>
  </ModalContent>
</Modal>


    </VStack>
  );
}
