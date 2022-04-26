import {useState , useEffect , useContext , createContext} from "react";
import { fetchLogout, fetchMe } from "../api";
import {Flex, Spinner} from "@chakra-ui/react";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    // ilk basta false gelecek. Giris yapılınca true olacak

    const [loading , setLoading] = useState(true);

    useEffect(() => {
        (async () => {
           try{
            const me = await fetchMe();
            setLoggedIn(true);
            setUser(me); 
            setLoading(false); 
           } catch (e) {
            setLoading(false); 
           }
        })();
    }, [])

    const login = (data) => {
        setLoggedIn(true);
        setUser(data.user);
        localStorage.setItem("loginData" , JSON.stringify(data));
        // localStorage.setItem("access-token" , data.accessToken);
        // localStorage.setItem("refresh-token" , data.refreshToken);
        
    };

    const logout = async (callback) => {
        setLoggedIn(false);
        setUser(null);
        // localStorage.removeItem("access-token");
        // localStorage.removeItem("refresh-token");
        localStorage.removeItem("loginData");
        await fetchLogout();        
        callback();
    };

    const values = {
        loggedIn,
        user,
        login,
        logout,
    };

    //signup yaptıgımız sayfada refresh yapınca yukarıda signin/sigup görünmesin loading görünsün sayfamızda diye yazdık.
    if( loading) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh" >
                <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" color="red.500" />
            </Flex>
        )

    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};