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
  SimpleGrid,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { fetchUsers, fetchUserDetails } from "@/api/users";
import { useColorModeValue } from "./colorMode";

interface UserListProps {
  bg: string
  searchQuery: string
}

export default function UserList({bg, searchQuery}: UserListProps) {
  const textColor = useColorModeValue("black", "white");
  const { data, isLoading, error } = useQuery("users", fetchUsers);

  const filteredUsers = data?.filter((user: any) =>
  user.name.toLowerCase().includes(searchQuery.toLowerCase())
) || [];


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

  if (isLoading) return <Box display="flex" justifyContent="center" alignItems="center"><Spinner /></Box>;
  if (error) return <Text>Erro ao carregar usuários</Text>;

  return (
    <VStack align="stretch" mt={1} pb="120px">
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        gap={4}
        paddingInline={7}
      >
        {filteredUsers.map((user: any) => (
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

      <Modal isOpen={isOpen} onClose={closeModal} isCentered closeOnEsc>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent
          maxW="350px"
          marginInline="auto"
          p={8}
          bg="gray.900"
          borderRadius="16px"
          color={textColor}
          border="2px solid"
          borderColor={bg}
          position="fixed"
          top="30%"
          left="0"
          right="0"
        >
          <Box marginLeft="auto" p={2}>
            <ModalCloseButton cursor="pointer" />
          </Box>

         
          <ModalBody>
            {isUserLoading ? (
              <Box marginInline="auto" display="flex" justifyContent="center">
                 <Spinner mb={5}/>
              </Box>
             
            ) : (
              userDetails && (
              
                <VStack gap={4} paddingInline={2} mb={4}>
                     <ModalHeader textAlign="center" fontWeight="bold">
            Detalhes do Usuário
          </ModalHeader>
                  <Text>
                    <b>Nome:</b> {userDetails.name}
                  </Text>
                  <Text>
                    <b>Email:</b> {userDetails.email}
                  </Text>
                  <Text>
                    <b>Telefone:</b> {userDetails.phone}
                  </Text>
                  <Text>
                    <b>Website:</b> {userDetails.website}
                  </Text>
                </VStack>
              )
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
