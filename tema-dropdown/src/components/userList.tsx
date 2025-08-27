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

export default function UserList() {
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
    <VStack align="stretch" mt={5}>
     <SimpleGrid columns={4} gap={4}>
  {data.map((user: any) => (
    <Button
      key={user.id}
      onClick={() => {
        setSelectedUserId(user.id);
        console.log(`Usuário selecionado: ${user.name}`);
        openModal();
      }}
    >
      {user.name}
    </Button>
  ))}
</SimpleGrid>

    
<Modal isOpen={isOpen} onClose={closeModal}>
  <ModalOverlay 
 
    backdropFilter="blur(5px)"/>
  <ModalContent
    maxW="400px"
    p={8}
    bg="black"
    borderRadius="16px"
    color="white"
    position="fixed"
    top="30%"
    left="40%"
    transform="translate(-50%, -50%)"
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
