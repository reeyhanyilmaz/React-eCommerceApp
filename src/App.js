import { Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div>   
        <Navbar />

          <div id="content">
          <Routes>
              <Route path="/" element={<Home /> }/>
              <Route path="/products" element={<Products /> }/>
              <Route path="/product/:id" element={<ProductDetail /> }/>
              <Route path="/signin" element={<Signin /> } />
              <Route path="/signup" element={<Signup />} /> 
              <Route path="/basket" element={<Basket />} /> 
              <Route path="/profile"  element={ 
              <ProtectedRoute> 
                <Profile /> 
                </ProtectedRoute> } />

              <Route path="/admin/*" admin={true} element={ 
              <ProtectedRoute  > 
                <Admin /> 
                </ProtectedRoute> }  />
                
              <Route path="*" element={<Error404 />} /> 
          </Routes> 
          </div>

      </div>      
  );
}

export default App;
