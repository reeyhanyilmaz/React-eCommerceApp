import React,{useState} from "react";
import { Grid, Box } from "@chakra-ui/react";
import Card from "../../../components/Card";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchCamMalzeme } from "../../../api";
import { useEffect } from "react";


function CamMalzeme() {
  
  const [camData, setCamData] = useState([]);

  useEffect(() => {
    (async () => {
      const data =await fetchCamMalzeme();
      setCamData(data)
    })();
  }, [])

  if (camData.length < 1) return "Loading...";

  // if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div>
      {/* Gap arasındaki boslukları belirler, repeat ekranda kaç tane card görünmesini istiyorsak. */}
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {camData && camData.map((item) => (
          <Box w="100%" key={item.id}>
            <Card item={item} />
          </Box>
        ))}
      </Grid>
    </div> // return kapsayıcı div
  );
}

export default CamMalzeme;
