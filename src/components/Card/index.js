import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import moment from "moment"; //moment ile tarih saat islemleri yapılır.
import { useBasket } from "../../contexts/BasketContext";

function Card({ item, data }) {
  const { addToBasket, basketItems } = useBasket();
  const findBasketItems = basketItems.find(
    (basket_item) => basket_item.id === item.id
  );
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${item.id}`}>
        <Image
          src={item.image}
          alt="products"
          loading="lazy"
          width="100%"
          height="250px"
        // border="solid 1px #c0b9dd"
        boxShadow="0 0 10px rgba(0,0,0,0.1)"
        borderRadius="8px"/>
        {/* loading lazy ile sayfa ilk yüklendiginde fotograf yokmus gibi göstermesini engellemek icin. */}        
      </Link>

      <Box mt="2">
          <Box display="flex" justifyContent="space-between">
            <Box fontWeight="semibold" as="h4" lineHeight="tight" fontSize="lg">
              {item.title}
            </Box>

            {/* <Box d="plex" alignItems="baseline" >
                {moment(item.createdAt).format("DD/MM/YYYY")}
                </Box> */}
            <Box fontStyle="italic" fontSize="md">
              {item.price}$
            </Box>
          </Box>

          <Box>{item.description}</Box>
        </Box>

      <Button
        mt="2"
        backgroundColor={findBasketItems ? "#c0b9dd" : "#84A59D"}
        color="white"
        variant="solid"
        onClick={() => addToBasket(item, findBasketItems)}
        width="100%"
      >
        {findBasketItems ? "Sepetten kaldır" : "Sepete Ekle"}
      </Button>
    </Box>
  );
}

export default Card;
