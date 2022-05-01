import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { basketItems } = useBasket();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div>
          <Link to="/">
            {/* eCommerce */}
            <img
              src="assets/logo.jpg"
              alt="logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">
              <a onClick={onOpen}>Tüm Kategoriler</a>
            </Link>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                {/* <DrawerHeader borderBottomWidth="1px">Kategoriler</DrawerHeader> */}
                <DrawerBody className={styles.drawerMenuLi}>
                  <ul>
                    <li>
                      <Link to="/">
                        Cam Malzeme
                      </Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link to="/">
                        Otomatik Pipet & Pipet Uçları
                      </Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link to="/">
                        Hacimsel Ölçüm
                      </Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link to="/">
                        Laboratuvar Cihazları
                      </Link>
                    </li>
                  </ul>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {/* kullanıcı giris yapmamıssa */}
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button color="white" backgroundColor="#c0b9dd">Giriş</Button>
            </Link>

            <Link to="/signup">
              <Button color="white" backgroundColor="#c0b9dd">Yeni Üye Girişi</Button>
            </Link>
          </>
        )}

        {/* kullanıcı girisi varsa profile gidecek */}
        {loggedIn && (
          <>
            {/* giris yapılmıssa sepetteki ürünleri göstermek icin */}
            {basketItems.length > 0 && (
              <Link to="/basket">
                <Button
                  color="#4a5568"                  
                  variant="outline">
                  Sepetim {basketItems.length}
                </Button>
              </Link>
            )}

            {/* admin islemleri */}
            {user?.role === "admin" && (
              <Link to="/admin">
                <Button color="white" backgroundColor="#c0b9dd">
                  Admin
                </Button>
              </Link>
            )}

            <Link to="/profile">
              <Button color="#4a5568">Profil</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
