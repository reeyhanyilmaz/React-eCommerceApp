import { Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"; 

function ProtectedRoute({children}) {
    const {loggedIn} = useAuth();
    //login olunmussa profile gitsin, giris yapılmadıysa ana sayfaya gitsin.
    return loggedIn ? children : <Navigate to="/" />
  
}

export default ProtectedRoute;