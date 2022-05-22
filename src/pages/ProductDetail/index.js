import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../contexts/BasketContext";

function ProductDetail() {
  const { id } = useParams(); //APIdan gelecek id.
  const { addToBasket, basketItems } = useBasket();
  const { isLoading, isError, data } = useQuery(["product", id], () =>
    //product key birden fazla olabileceği için id ile ayrıştırıyoruz.
    fetchProduct(id)
  );

  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred: " + isError.message;

  const findBasketItems = basketItems.find((item) => item.id === data[0].id);
  const images = data[0].image.map((url) => ({ original: url }));

  console.log(data);

  return (
    <div>
      <Text as="h2" fontSize="2xl">
        {data[0].title}
      </Text>

      {/* <Text>{moment(data[0].createdAt).format("DD/MM/YYYY")}</Text> */}

      <p>
        {data[0].description} - {data[0].price}$
      </p>

      {/* butona tıklayınca sepete ekleyecek, data API'dan gelen data. */}
      <Button
        backgroundColor={findBasketItems ? "#c0b9dd" : "#84A59D"}
        color="white"
        mt="1"
        onClick={() => addToBasket(data[0], findBasketItems)}
      >
        {findBasketItems ? "Sepetten kaldır" : "Sepete Ekle"}
      </Button>

      <Box margin="10">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          autoPlay={false}
        />
      </Box>
    </div>
  );
}

export default ProductDetail;
