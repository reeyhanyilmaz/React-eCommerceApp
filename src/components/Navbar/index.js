import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { basketItems } = useBasket();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    //logout tıklanınca ansayfaya yönlendirmesi icin
    logout(() => {
      navigate("/");
    });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.innerContainer}>
      <div className={styles.left}>
       
          <Link to="/">
            <img
              src="/assets/logo.jpg"
              alt="logo"
              className={styles.logoImage}
            />
          </Link>

          <Link to="/">
            <img
              src="/assets/chemdevv.jpg"
              alt="chemdev"
              className={styles.logo}
            />
          </Link>
          
        <ul className={styles.menu}>
          <li>
            <Link to="/">Ana Sayfa</Link>
          </li>

          <li>
            <a onClick={onOpen}>Kategoriler<ChevronDownIcon boxSize="1.5em"/></a>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                {/* <DrawerHeader borderBottomWidth="1px">Kategoriler</DrawerHeader> */}
                <DrawerBody className={styles.drawerMenuLi}>
                  <ul>
                    <li>
                      <Link to="/Products/CamMalzeme">Cam Malzeme</Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link to="/Products/Pipet">Otomatik Pipet & Pipet Uçları</Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link to="/Products/HacimselOlcum">Hacimsel Ölçüm</Link>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <Link to="/Products/LaboratuvarCihazlari">Laboratuvar Cihazları</Link>
                    </li>
                  </ul>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </li>

          <li>
            <Link to="/Products/AllProducts">Ürünler</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {/* kullanıcı giris yapmamıssa */}
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button color="white" backgroundColor="#c0b9dd">
                Giriş
              </Button>
            </Link>

            <Link to="/signup">
              <Button color="white" backgroundColor="#c0b9dd">
                Yeni Üye Girişi
              </Button>
            </Link>
          </>
        )}

        {/* kullanıcı girisi varsa profile gidecek */}
        {loggedIn && (
          <>
            {/* giris yapılmıssa sepetteki ürünleri göstermek icin */}
            {basketItems.length > 0 && (
              <Link to="/basket">
                <Button color="#4a5568" variant="outline">
                  Sepetim {basketItems.length}
                </Button>
              </Link>
            )}

            <Menu>
              <MenuButton as={Button} ml="1" color="#4a5568" p="5">
                Profil
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profil" fontSize="15">
                  <MenuDivider />
                  <Link to="/profile">
                    <MenuItem fontSize="16" mb="1">
                      <a>Hesap Bilgilerim</a>
                    </MenuItem>
                  </Link>

                  {/* admin islemleri */}
                  {user?.role === "admin" && (
                    <Link to="/admin/orders">
                      <MenuItem fontSize="16" mb="1">
                        <a>Admin</a>
                      </MenuItem>
                    </Link>
                  )}

                  <MenuItem fontSize="16" mb="1">
                    <a onClick={handleLogout}>Çıkış Yap</a>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </>
        )}
      </div>

      </div>
    </nav>
  );
}

export default Navbar;
