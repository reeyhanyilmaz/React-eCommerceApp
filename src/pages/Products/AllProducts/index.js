import React,{ useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { Grid, Box, Input, Flex, Button } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { fetchProductList, fetchProductNonePageLimit } from "../../../api";

function AllProducts() {
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

  const [search, setSearch] = useState("");
  const [allProductsArray, setAllProductsArray] = useState([]); //tüm ürünleri burada
  const [filteredData, setFilteredData] = useState([]); // input değiştikçe filtrelenmiş ürünleri array olarak tutuyorum

  // filtrelerken tüm product'lar içinden filtreleme yapması için tüm product'ları tek bir array olarak çektim, çünkü infinitequery sayfa sayfa çekiyordu.
  useEffect(() => {
    (async () => {
      const initialData = await fetchProductNonePageLimit();
      setAllProductsArray(initialData);
    })();
  }, []);


  const handleSearch = (e) => {
    setSearch(e.target.value);
    // arama yapınca filtrelemeyi tüm product'lardan yapsın diye allProductsArray'i filtreledim.
    const newFilter = allProductsArray.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredData(newFilter);
  };


  if (status === "loading") return "Loading...";
  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div>
      {/* ürünler ve filtreleme yapılan input kısmı */}
      <Input
        variant="filled"
        placeholder="Aramak istediğiniz ürünü yazınız.."
        _placeholder={{ opacity: 1, color: "gray.500" }}
        value={search}
        onChange={handleSearch}
        focusBorderColor="#84A59D"
      />

      {/* {filteredData.length >0 ? <Text> Toplam filtrelenen ürün sayısı: ({filteredData.length} )</Text> : <Text> Filtreleme sonucu ürün bulunamadı.</Text>}  */}

      {search !== "" ?
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {filteredData &&
            filteredData.map((item, i) => (
              <Box w="100%" key={i}>
                <Card item={item} />
              </Box>
            ))}
        </Grid>
        :
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {/* ic ice map yaptık cünkü pageparam icinde pages oldugu icin. Group group yani. */}
          {data.pages &&
            data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group &&
                  group.map((item) => (
                    <Box w="100%" key={item.id}>
                      <Card item={item} />
                    </Box>
                  ))}
              </React.Fragment>
            ))}
        </Grid>
      }

      {/* diger sayfaları yükleyebilmemiz icin */}
      {search === "" && (
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
      )}

    </div>
  );
}

export default AllProducts;
