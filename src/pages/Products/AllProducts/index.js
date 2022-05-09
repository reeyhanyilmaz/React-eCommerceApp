import { useState } from "react";
import React from "react";
import { Grid, Box, Input, Text} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { useQuery } from "react-query";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchProductNonePageLimit } from "../../../api";

function AllProducts() {
  const { data } = useQuery("products", fetchProductNonePageLimit);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredData = data.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  return (
    <div>
      <Input
        variant="filled"
        placeholder="Aramak istediğiniz anahtar kelimeyi yazınız.."
        value={search}
        onChange={handleSearch}
      />
      
      <Text> Toplam filtrelenen ürün sayısı: ({filteredData.length} )</Text> 

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {filteredData && filteredData.map((item, i) => (
          <Box w="100%" key={i}>
            <Card item={item} />
          </Box>
        ))}
      </Grid>
      
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data &&
          data.map((item, i) => (
            <Box w="100%" key={i}>
              <Card item={item} />
            </Box>
          ))}
      </Grid>

      

    
    </div> // return kapsayıcı div
  );
}

export default AllProducts;
