import { Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"; 

function ProtectedRoute({children , admin}) {
    const {loggedIn , user} = useAuth();
   
    if( admin && user.role !== "admin") return <Navigate to="/" />

     //login olunmussa profile gitsin, giris yapılmadıysa ana sayfaya gitsin.
    return loggedIn ? children : <Navigate to="/" />
  
}

export default ProtectedRoute;