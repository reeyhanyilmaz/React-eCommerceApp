import React from "react";
import { Grid, Box, Input, Text } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchProductNonePageLimit } from "../../../api";

function AllProducts() {
  const [search, setSearch] = useState("");
  const [allProductsArray, setAllProductsArray] = useState([]); //tüm ürünleri burada
  const [filteredData, setFilteredData] = useState([]); // input değiştikçe filtrelenmiş ürünleri array olarak tutuyorum

  useEffect(() => {
    (async () => {
      const initialData = await fetchProductNonePageLimit();
      setAllProductsArray(initialData);
      setFilteredData(initialData); //henüz arama inputu boş olduğu için filtrelenmiş ürünler aslında tüm ürünler
    })();
  }, [])


  const handleSearch = (e) => {
    setSearch(e.target.value);
    const newDataArray = allProductsArray.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredData(newDataArray);
  };

  if (allProductsArray === []) {
    return <h1>Loading....</h1>
  }

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

      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {filteredData.map((item, i) => (
          <Box w="100%" key={i}>
            <Card item={item} />
          </Box>
        ))}
      </Grid>
    </div>
  )
}

export default AllProducts;
