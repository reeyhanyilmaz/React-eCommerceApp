import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn , user } = useAuth();
  const { basketItems } = useBasket();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">eCommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Ürünler</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {/* kullanıcı giris yapmamıssa */}
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button colorScheme="pink">Giriş</Button>
            </Link>

            <Link to="/signup">
              <Button colorScheme="pink">Yeni Üye Girişi</Button>
            </Link>
          </>
        )}

        {/* kullanıcı girisi varsa profile gidecek */}
        {loggedIn && (
          <>
            {/* giris yapılmıssa sepetteki ürünleri göstermek icin */}
            {basketItems.length > 0 && (
              <Link to="/basket">
                <Button color="#F28482" outlineColor="#F28482" variant="outline">
                  Sepetim {basketItems.length}
                </Button>
              </Link>
            )}

              {/* admin islemleri */}
            {
             user?.role === "admin" && (
                 <Link to="/admin">
                   <Button colorScheme="pink" variant="ghost" >
                      Admin
                   </Button>
                 </Link>
              )
            }

            <Link to="/profile">
              <Button>Profil</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
