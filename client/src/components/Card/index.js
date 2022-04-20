import { Box, Button , Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" >

        <Link to="#/">
            <Image src="https://picsum.photos/seed/picsum/200/300" alt="products"/>

            <Box p="6">
                <Box d="plex" alignItems="baseline" >
                20/04/2022
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    Erlenmeyer
                </Box> 

                <Box>
                    25$
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