import {useAuth} from "../../contexts/AuthContext";
import {Text , Button } from "@chakra-ui/react";

function Profile() {
    const { user } = useAuth();
  return (
    <div>
        <Text fontWeight="bold">Profile</Text>
        <code>{JSON.stringify(user)}</code>

        <br /><br />

        <Button colorScheme="pink" variant="solid">
            Logout
        </Button>
    </div>
  );
}

export default Profile;
