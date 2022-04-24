import { Box, Button , Image} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import moment from "moment"; //moment ile tarih saat islemleri yapılır.

function Card({item}) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" >

        <Link to={`/product/${item.id}`}>
            <Image src={item.photos} alt="products" loading="lazy"/> 
            {/* loading lazy ile sayfa ilk yüklendiginde fotograf yokmus gibi göstermesini engellemek icin. */}

            <Box p="6">
                <Box d="plex" alignItems="baseline" >
                {moment(item.createdAt).format("DD/MM/YYYY")}
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {item.title}
                </Box> 

                <Box>
                    {item.price}$
                </Box>
            </Box>
        </Link>

        <Button colorScheme="pink">
            Sepete Ekle
        </Button>
        
    </Box>
  )
}

export default Card;