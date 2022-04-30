import { useRef , useState } from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";
import {useAuth} from '../../contexts/AuthContext';

function Basket() {
  const [address, setAddress] = useState("");
  const { basketItems, removeFromBasket , emptyBasket  } = useBasket();
  const {user} = useAuth();
console.log(user)
  //chakra'dan aldık
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  //toplama islemini yapacak func.
  const total = basketItems.reduce((acc, item) => acc + item.price, 0);

  console.log(basketItems);
  const handleSubmitForm = async (e) => {
    
    const input = {
      email: user.email,
      address,
      basketItems,
    };

    const response = await postOrder(input);
    console.log("order response:" , response);

    //emptyBasket çalışacak sepet temizlenecek ve modal kapanacak.
    emptyBasket();
    onClose();
  };
  return (
    <Box p="5">
      {basketItems.length < 1 && (
        <Alert status="warning">Sepetinizde ürün bulunmamaktadır.</Alert>
      )}

      {basketItems.length > 0 && (
          <Alert status="success">
            Sepetinizde {basketItems.length} adet ürün bulunmaktadır.
          </Alert>
        ) && (
          <>
            <h1 fontWeight="bold">Sepetim</h1>
            <ul style={{ listStyleType: "decimal" }}>
              {basketItems.map((item) => (
                <li key={item.id} style={{ marginBottom: 15 }}>
                  <Link to={`/product/${item.id}`}>
                    <Text fontSize="18">
                      {item.title} - {item.price} $
                    </Text>
                    <Image
                      hmtlWidth={200}
                      loading="lazy"
                      src={item.image}
                      alt="basket item"
                    />
                  </Link>

                  <Button
                    mt="2"
                    size="md"
                    colorScheme="pink"
                    onClick={() => removeFromBasket(item.id)}
                  >
                    Sepetten Kaldır
                  </Button>
                </li>
              ))}
              <Box mt="10">
                <Text fontSize="22">Toplam Tutar: {total} $</Text>
              </Box>
            </ul>

            <Button mt="2" size="sm" colorScheme="green" onClick={onOpen}>
              Sipariş ver
            </Button>

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
                    <Textarea ref={initialRef} placeholder="Adres Giriniz" value={address} onChange={(e) => setAddress(e.target.value) }/>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSubmitForm} >
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
