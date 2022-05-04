import React from "react";
import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { useInfiniteQuery } from "react-query";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchPipet } from "../../../api";

function CamMalzeme() {
  //useInfinityQuery daha fazla sayfa yüklemesi icin.
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchPipet, {
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

  return (
    <div>
      {/* Gap arasındaki boslukları belirler, repeat ekranda kaç tane card görünmesini istiyorsak. */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
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
          color="#4a5568;"
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Daha fazla"
            : "Daha fazla ürün yüklenemedi"}
        </Button>
      </Flex>
    </div> // return kapsayıcı div
  );
}

export default CamMalzeme;
