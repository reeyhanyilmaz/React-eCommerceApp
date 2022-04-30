import { Box, Button , Image} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import moment from "moment"; //moment ile tarih saat islemleri yapılır.
import {useBasket} from "../../contexts/BasketContext";

function Card({item , data}) {
    const {addToBasket , basketItems} = useBasket();
    const findBasketItems = basketItems.find((basket_item) => basket_item.id === item.id);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

        <Link to={`/product/${item.id}`}>
            <Image src={item.image} alt="products" loading="lazy" width="100%"/> 
            {/* loading lazy ile sayfa ilk yüklendiginde fotograf yokmus gibi göstermesini engellemek icin. */}

            <Box >
                <Box display="flex" justifyContent="space-between">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}
                </Box> 

                {/* <Box d="plex" alignItems="baseline" >
                {moment(item.createdAt).format("DD/MM/YYYY")}
                </Box> */}
                <Box>
                    {item.price}$
                </Box>
                </Box>               
            </Box>
        </Link>

        <Button backgroundColor={ findBasketItems ? "#c0b9dd" : "#84A59D"}
        color="white" variant="solid" onClick={() => addToBasket(item, findBasketItems)}>
            {
                findBasketItems ? "Sepetten kaldır" : "Sepete Ekle"
            }
        </Button>
        
    </Box>
  )
}

export default Card;