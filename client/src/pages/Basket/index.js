import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import { Alert, Button, Image, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Basket() {
  const { basketItems, removeFromBasket } = useBasket();

  //toplama islemini yapacak func.
  const total = basketItems.reduce((acc, item) => acc + item.price, 0);

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
                    <Image hmtlWidth={200} loading="lazy" src={item.image} alt="basket item" />
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
          </>
        )}
    </Box>
  );
}

export default Basket;
