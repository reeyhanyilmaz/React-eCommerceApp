import React from "react";
import ImageGallery from "react-image-gallery";
import { Box, Text, Grid } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { IconButton } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

function Home() {
  const images = [
    {
      original:
        "https://www.elislab.com.tr/wp-content/uploads/2020/01/laboratuvar-sarf-malzemeleri.jpg",
      thumbnail:
        "https://www.elislab.com.tr/wp-content/uploads/2020/01/laboratuvar-sarf-malzemeleri.jpg",
    },
    {
      original:
        "https://tetralaboratuvar.com/wp-content/uploads/2021/03/Ozel-Laboratuvar.jpg",
      thumbnail:
        "https://tetralaboratuvar.com/wp-content/uploads/2021/03/Ozel-Laboratuvar.jpg",
    },
    {
      original:
        "https://www.bilimeks.com.tr/wp-content/uploads/2020/01/labmalzzeme.jpg",
      thumbnail:
        "https://www.bilimeks.com.tr/wp-content/uploads/2020/01/labmalzzeme.jpg",
    },
    {
      original:
        "https://www.sentezlab.com/class/INNOVAEditor/assets/laboratuvar%20cam%20malzemeleri.jpg",
      thumbnail:
        "https://www.sentezlab.com/class/INNOVAEditor/assets/laboratuvar%20cam%20malzemeleri.jpg",
    },
    {
      original:
        "https://www.nasilbe.com/wp-content/uploads/2020/07/Laboratuvar-Malzemelerinin-isimleri-Nelerdir-1024x551.jpg",
      thumbnail:
        "https://www.nasilbe.com/wp-content/uploads/2020/07/Laboratuvar-Malzemelerinin-isimleri-Nelerdir-1024x551.jpg",
    },
    {
      original:
        "https://www.kocar.com.tr/uploads/slider/images/000/000/049/medium",
      thumbnail:
        "https://www.kocar.com.tr/uploads/slider/images/000/000/049/medium",
    },
  ];

  return (
    <div className={styles.homePage}>
      <Box>
        <ImageGallery
          items={images}
          thumbnailPosition="right"
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          autoPlay={true}
        />
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="20">
        <img
          src="http://sc04.alicdn.com/kf/HTB1zgqmhlmWBuNkSndV763sApXal.png"
          alt=""
        />
        <img
          src="https://www.nukleonlab.com.tr/images/urunler/Pipet-ucu-780.jpg"
          alt=""
        />
        <Text
          fontSize="2xl"
          textAlign="center"
          className={styles.enCokSatılanlar}
        >
          EN ÇOK <br /> SATILANLAR
        </Text>
      </Grid>

      <Box mt="20" className={styles.ozelFiyatlarBox}>
        <Text fontSize="2xl" className={styles.ozelFiyatlar}>
          ÖZEL FİYATLAR
        </Text>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEGIb181IToKaLjnFlxJkPL9dPVyAGbwF5Q&usqp=CAU"
          alt=""
          className={styles.ozelFiyatlarImage}
        />
      </Box>

      <Grid templateColumns="repeat(1, 1fr)" gap={6} mt="20">
        <Text fontSize="lg">
          En kaliteli ve hijyenik malzemelerden yapılan ChemDev Kimyasal
          Malzemeleri ile çalışmalarınızı en başarılı şekilde
          gerçekleştirebileceksiniz. Yenilenen ürün yelpazemizi kaçırmamak için
          bizi sosyal medya hesaplarımızdan takip edebilirsiniz. Bizimle telefon
          ve mail yoluyla iletişime geçebilirsiniz.
        </Text>

        <IconButton
          variant="outline"
          variantColor="#84A59D"
          color="#84A59D"
          aria-label="Send email"
          icon={<EmailIcon />}
          size="md"
        />
        <IconButton
          backgroundColor="#84A59D"
          color="white"
          aria-label="Call Segun"
          icon={<PhoneIcon />}
        />
      </Grid>
    </div>
  );
}

export default Home;
