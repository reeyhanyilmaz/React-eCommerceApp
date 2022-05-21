import React,{useState} from "react";
import { Grid, Box } from "@chakra-ui/react";
import Card from "../../../components/Card";
//useQuery bize sade API çağrımları saglar. örn: loading, error icin state tanımları yapmamız gerekirdi. useQuery ile hazır alabiliyoruz.
import { fetchHacimselOlcum } from "../../../api";
import { useEffect} from "react";

function HacimselOlcum() {

  const [hacimData, setHacimData] = useState([]);

  useEffect(() => {
    (async () => {
      const data =await fetchHacimselOlcum();
      setHacimData(data)
    })();
  }, [])


  if (hacimData.length < 1) return "Loading...";

  return (
    <div>
      {/* Gap arasındaki boslukları belirler, repeat ekranda kaç tane card görünmesini istiyorsak. */}
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {hacimData && hacimData.map((item) => (
          <Box w="100%" key={item.id}>
            <Card item={item} />
          </Box>
        ))}
      </Grid>
    </div> // return kapsayıcı div
  );
}

export default HacimselOlcum;
