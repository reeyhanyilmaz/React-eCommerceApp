import { Routes, Route, Link} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Products from "./pages/Auth/Products";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <div>   
        <Navbar />

          <div id="content">
          <Routes>
              <Route path="/" element={<Products /> }/>
              <Route path="/signin" element={<Signin /> } />
              <Route path="/signup" element={<Signup />} /> 
          </Routes> 
          </div>

      </div>      
  );
}

export default App;
