import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { basketItems } = useBasket();

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
              <Link to="/Products/AllProducts">Ürünler</Link>
            </li>
            <li>
              <Menu>
                <MenuButton
                  as={Button}
                  color="#4a5568"
                  variant="outline"
                  className={styles.menuButton}
                >
                  Kategoriler
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuItem>
                    <Link to="/Products/CamMalzeme">Cam Malzeme</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/Products/HacimselOlcum">Hacimsel Ölçüm</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/Products/Pipet">
                      Otomatik Pipet & Pipet Uçları
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <Link to="/Products/LaboratuvarCihazlari">
                      Laboratuvar Cihazları
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
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

          
            <Link to="/basket">
              <Button color="#4a5568" variant="outline">
                Sepetim {basketItems.length > 0 && `${basketItems.length}`}
              </Button>
            </Link>
         

          {/* kullanıcı girisi varsa profile gidecek */}
          {loggedIn && (
            <>
              <Menu>
                <MenuButton as={Button} ml="1" color="#4a5568" p="5">
                  Profil
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profil" fontSize="15">
                    <MenuDivider />
                    <Link to="/profile">
                      <MenuItem fontSize="16" mb="1">
                        <a href="#">Hesap Bilgilerim</a>
                      </MenuItem>
                    </Link>

                    {/* admin islemleri */}
                    {user?.role === "admin" && (
                      <Link to="/admin/orders">
                        <MenuItem fontSize="16" mb="1">
                          <a href="#">Admin</a>
                        </MenuItem>
                      </Link>
                    )}

                    <MenuItem fontSize="16" mb="1">
                      <a href="#" onClick={handleLogout}>
                        Çıkış Yap
                      </a>
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
