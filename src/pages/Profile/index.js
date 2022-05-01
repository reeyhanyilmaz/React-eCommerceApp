import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Text , Button , TableContainer , Table , Thead, Tr, Th, Td, Tbody} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import {getAllUsers} from "../../api";

function Profile() {
    const { user , logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      //logout tıklanınca ansayfaya yönlendirmesi icin
      logout(() => {
        navigate("/");
      });
    };

  return (
    <div>
        {/* <Text fontWeight="bold">Profil</Text> */}
        {/* <code>{JSON.stringify(user)}</code> */}
        <TableContainer>

  <Table size='lg'>
    <Thead>
      <Tr>
        <Th>Kullanıcı Bilgisi</Th>
        <Th>E-mail</Th>
        <Th isNumeric>Şifre</Th>
      </Tr>
    </Thead>
    <Tbody>
          <Tr >
            <Td>{user.role}</Td>
            <Td>{user.email}</Td>
            <Td isNumeric>{user.password}</Td>
          </Tr>
    </Tbody>
  </Table>
</TableContainer>

        <br /><br />

        <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
            Çıkış Yap
        </Button>
    </div>
  );
}

export default Profile;
