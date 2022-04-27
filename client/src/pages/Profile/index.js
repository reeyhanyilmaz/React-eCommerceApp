import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Text , Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

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
        <Text fontWeight="bold">Profile</Text>
        <code>{JSON.stringify(user)}</code>

        <br /><br />

        <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
            Logout
        </Button>
    </div>
  );
}

export default Profile;
