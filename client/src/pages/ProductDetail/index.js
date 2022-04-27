import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import moment from "moment";
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
  console.log("data details :", data);

  const findBasketItems = basketItems.find((item) => item.id === data[0].id);

  const images = data[0].image.map((url) => ({ original: url }));

  return (
    <div>
      {/* butona tıklayınca sepete ekleyecek, data API'dan gelen data. */}
      <Button
        colorScheme={findBasketItems ? "pink" : "green"}
        onClick={() => addToBasket(data, findBasketItems)}
      >
        {findBasketItems ? "Sepetten kaldır" : "Sepete Ekle"}
      </Button>

      <Text as="h2" fontSize="2xl">
        {data[0].title}
      </Text>

      <Text>{moment(data[0].createdAt).format("DD/MM/YYYY")}</Text>

      <p>{data[0].description}</p>

      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
