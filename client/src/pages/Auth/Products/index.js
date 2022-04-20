import { Grid } from '@chakra-ui/react'
import Card from '../../../components/Card';

function Products() {
  return (
    <div>     
        {/* Gap arasındaki boslukları belirler, repeat ekranda kaç tane card görünmesini istiyorsak. */}
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>    
    </div>
  )
}

export default Products;