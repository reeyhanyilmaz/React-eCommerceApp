import React from "react";
import { Grid, Box , Flex , Button } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useInfiniteQuery } from "react-query";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchProductList } from "../../api";

function Products() {
  //useInfinityQuery daha fazla sayfa yüklemesi icin.
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastPage, pages) => {
      const morePagesExist = lastPage?.length === 12;

      if (!morePagesExist) {
        return;
      }
      return pages.length + 1;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;
  console.log("data products :", data);
  return (
    <div>
      {/* {data.map((item , key ) => ( <Card key={key} item={item} />))} */}

      {/* Gap arasındaki boslukları belirler, repeat ekranda kaç tane card görünmesini istiyorsak. */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {/* ic ice map yaptık cünkü pageparam icinde pages oldugu icin. Group group yani. */}
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item.id}>
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>

      {/* diger sayfaları yükleyebilmemiz icin */}
      <Flex mt="10" justifyContent="center">
         <Button
           onClick={() => fetchNextPage()}
           isLoading={isFetchingNextPage}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </Button>
       </Flex>
      


    </div> // return kapsayıcı div
  );
}

export default Products;
