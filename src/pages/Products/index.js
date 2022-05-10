import { Route, Routes } from "react-router-dom";
// import "./style.css";
import AllProducts from "./AllProducts";
import CamMalzeme from "./CamMalzeme";
import Pipet from "./Pipet";
import HacimselOlcum from "./HacimselOlcum";
import LaboratuvarCihazlari from "./LaboratuvarCihazlari";
import { Box } from "@chakra-ui/react";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.

function Products() {
  return (
     <div>
      <Box mt="2">
        <Routes>
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="camMalzeme" element={<CamMalzeme />} />
          <Route path="pipet" element={<Pipet />} />
          <Route path="hacimselOlcum" element={<HacimselOlcum />} />
          <Route
            path="laboratuvarCihazlari"
            element={<LaboratuvarCihazlari />}
          />
        </Routes>
      </Box>
      </div>          
  );
}

export default Products;
