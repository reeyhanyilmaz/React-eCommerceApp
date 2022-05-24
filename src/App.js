import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";

function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="App">
      <Navbar />

      <div id="content">
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={ <Products /> } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/*"
            admin={true}
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
     

      {/* Scroll Up butonu için yazıldı */}
      <>
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <ArrowUpIcon mb="0.5" mr="0.5" />
            Yukarı Çık
          </button>
        )}
      </>

      </div>

      <Footer />
    </div>
  );
}

export default App;
