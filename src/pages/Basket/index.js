import styles from "./styles.module.css";
import { useRef, useState } from "react";
import { useBasket } from "../../contexts/BasketContext";
import {
  Alert,
  Button,
  Image,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";
import { useAuth } from "../../contexts/AuthContext";
import { QuantityPicker } from "react-qty-picker";

function Basket() {
  const [address, setAddress] = useState("");
  const { basketItems, setBasketItems, removeFromBasket, emptyBasket } =
    useBasket();
  const { user } = useAuth();
  console.log(user);
  //chakra'dan aldık
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const toast = useToast();

  //sepette item'ı arttırıp azalmak icin.
  const [count, setCount] = useState(1);

  const increment = (item_id) => {
    const newCount = basketItems.find((item) => item.id === item_id);
    if (newCount) {
      setCount(count + 1);
    }
  };

  const decrement = (item_id) => {
    const newCount = basketItems.find((item) => item.id === item_id);
    if (newCount) {
      setCount(count > 1 ? count - 1 : count);
    }
  };

  //toplama islemini yapacak func.
  const total = basketItems.reduce((acc, item) => acc + count * item.price, 0);

  console.log(basketItems);
  const handleSubmitForm = async (e) => {
    const input = {
      email: user.email,
      address,
      basketItems,
    };

    const response = await postOrder(input);
    console.log("order response:", response);

    //emptyBasket çalışacak sepet temizlenecek ve modal kapanacak.
    emptyBasket();
    onClose(
      toast({
        title: `Siparişiniz Alındı!`,
        description: "En kısa sürede kargoya verilecektir.",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      })
    );
  };
  return (
    <Box>
      {basketItems.length < 1 && (
        <Alert status="warning">Sepetinizde ürün bulunmamaktadır.</Alert>
      )}

      {basketItems.length > 0 && (
          <Alert status="success">
            Sepetinizde {basketItems.length} adet ürün bulunmaktadır.
          </Alert>
        ) && (
          <>
            <Text fontSize="2xl">Sepetim</Text>
            <ul className={styles.basketUl}>
              {basketItems.map((item) => (
                <li key={item.id} style={{ marginBottom: 15 }}>
                  <Box>
                    <Link to={`/product/${item.id}`}>
                      <Image
                        width="100"
                        height="100"
                        loading="lazy"
                        src={item.image}
                        alt="basket item"
                      />
                    </Link>
                  </Box>

                  <Box>
                    <Link to={`/product/${item.id}`}>
                      <Text fontSize="17">{item.title}</Text>
                      <Text fontSize="14">{item.description}</Text>
                    </Link>
                  </Box>

                  <Box display="flex" flex-direction="row">
                    {/* <Button onClick={() => setCount(count>1 ? count-1 : count)}>-</Button>
                           {
                              count >= 1 && ( <QuantityPicker value={count} onChange={setCount} min="1" smooth  width='8rem' /> )                                */}
                    {/* }   */}

                    {/* {basketItems.map((item) => item.id === id) && (
                        <Button onClick={() => setCount(count - 1)}>-</Button>
                      )}
                      <Text fontSize="14">{count}</Text>
                      {basketItems.map((item) => item.id === id) && (
                        <Button onClick={() => setCount(count + 1)}>+</Button>
                      )} */}

                    <Button onClick={() => decrement(item.id)}>-</Button>

                    <Text
                      fontSize="14"
                      display="flex"
                      alignItems="center"
                      p="2"
                    >
                      {count}
                    </Text>

                    <Button onClick={() => increment(item.id)}>+</Button>
                  </Box>

                  <Box>
                    <Text fontSize="17">{item.price * count}.0 $</Text>
                  </Box>

                  <Box>
                    <Button
                      color="white"
                      backgroundColor="#c0b9dd"
                      onClick={() => removeFromBasket(item.id)}
                    >
                      Sepetten Kaldır
                    </Button>
                  </Box>
                </li>
              ))}
            </ul>

            <Box mt="10" className={styles.siparisOnaylaBox}>
              <Text fontSize="xl">Sipariş Özeti: {total}.0 $</Text>
              <Button
                mt="2"
                color="white"
                backgroundColor="#84A59D"
                onClick={onOpen}
              >
                Sepeti Onayla
              </Button>
            </Box>

            {/* Sipariş onayla dedigimizde karsımıza cıkacak olan ekran (Modal) */}
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sipariş</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Adres Giriniz</FormLabel>
                    <Textarea
                      ref={initialRef}
                      placeholder="Adres Giriniz"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    backgroundColor="#c0b9dd"
                    color="white"
                    mr={3}
                    onClick={handleSubmitForm}
                  >
                    Kaydet
                  </Button>
                  <Button onClick={onClose}>İptal</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
    </Box>
  );
}

export default Basket;
