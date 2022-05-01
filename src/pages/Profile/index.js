import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      {/* <Text fontWeight="bold">Profil</Text> */}
      {/* <code>{JSON.stringify(user)}</code> */}
      <TableContainer>
        <Table size="lg" fontSize="md">
          <Thead>
            <Tr>
              <Th>Kullanıcı Bilgisi</Th>
              <Th>E-mail</Th>
              <Th isNumeric>Şifre</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{user.role}</Td>
              <Td>{user.email}</Td>
              <Td isNumeric>{user.password}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Profile;
