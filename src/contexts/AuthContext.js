import {useState , useEffect , useContext , createContext} from "react";
import { fetchLogout, fetchMe , fetchLogin } from "../api";
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
            const loginData = JSON.parse(localStorage.getItem("loginData"));
            const me = await fetchMe(); //fethcMe API ile kullanıcı bilgilerini getir dedik. /users

            if (loginData !== null) {
                const newMe = me.find((item) => item.email === loginData.email);
                setLoggedIn(true);
                setUser(newMe);
            }
            // setUser(me); 
            setLoading(false); 
           } catch (e) {
            setLoading(false); 
           }
        })();
    }, [])


    const login = (data) => {
        setLoggedIn(true); 

        // setUser((user, data) =>{

        //     if(user?.role === "admin"){
        //         return data[0];
        //     } 
        //     if (user?.role === "user") {
        //         return data;
        //     }
        // });
        setUser(data);

        localStorage.setItem("loginData" , JSON.stringify(data));
        
    };

    const logout = async (callback) => {
        setLoggedIn(false);
        setUser(null);
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