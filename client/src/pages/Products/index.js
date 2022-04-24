import { Grid } from '@chakra-ui/react'
import Card from '../../components/Card';
import { useQuery } from 'react-query';
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchProductList} from "../../api"

function Products() {
  const { isLoading, error, data} = useQuery('products', fetchProductList);
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
   console.log("data products :" , data );
  return (
    <div>     
        {/* Gap arasındaki boslukları belirler, repeat ekranda kaç tane card görünmesini istiyorsak. */}
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
           {data.map((item , key ) => ( <Card key={key} item={item} />))}
        </Grid>    
    </div>
  );
}

export default Products;