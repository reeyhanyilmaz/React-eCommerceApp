import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../contexts/BasketContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToBasket, basketItems } = useBasket();

  const { isLoading, error, data } = useQuery(["product", id], () =>
    fetchProduct(id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const findBasketItems = basketItems.find((item) => item.id === data.id);

  const images = data[0].image.map((url) => ({ original: url }));

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
        backgroundColor={findBasketItems ? "#cab1bd" : "#b5c9c3"}
        color="white"
        mt="1"
        onClick={() => addToBasket(data, findBasketItems)}
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
