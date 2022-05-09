import { Route, Routes } from "react-router-dom";
// import "./style.css";
import CamMalzeme from "./CamMalzeme";
import Pipet from "./Pipet";
import HacimselOlcum from "./HacimselOlcum";
import LaboratuvarCihazlari from "./LaboratuvarCihazlari";

import { useState } from "react";
import { Grid, Box, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card";
import { useQuery } from "react-query";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchProductNonePageLimit } from "../../api";

function Products() {
  //tüm verileri çekiyoruz.
  const { data } = useQuery("products", fetchProductNonePageLimit);

  //filtrelem islemi yapmak icin
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
      <Box mt="2">
        <Routes>
          <Route path="camMalzeme" element={<CamMalzeme />} />
          <Route path="pipet" element={<Pipet />} />
          <Route path="hacimselOlcum" element={<HacimselOlcum />} />
          <Route
            path="laboratuvarCihazlari"
            element={<LaboratuvarCihazlari />}
          />
        </Routes>
      </Box>

      {/* ürünler ve filtreleme yapılan input kısmı */}
      <Input
        variant="filled"
        placeholder="Aramak istediğiniz anahtar kelimeyi yazınız.."
        _placeholder={{ opacity: 1, color: "gray.500" }}
        value={search}
        onChange={handleSearch}
        focusBorderColor="#84A59D"
      />

      {/* {filteredData.length >0 ? <Text> Toplam filtrelenen ürün sayısı: ({filteredData.length} )</Text> : <Text> Filtreleme sonucu ürün bulunamadı.</Text>}  */}

      {filteredData ? (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {filteredData &&
            filteredData.map((item, i) => (
              <Box w="100%" key={i}>
                <Card item={item} />
              </Box>
            ))}
        </Grid>
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data &&
            data.map((item, i) => (
              <Box w="100%" key={i}>
                <Card item={item} />
              </Box>
            ))}
        </Grid>
      )}
    </div>
  );
}

export default Products;
