import React from "react";
import ImageGallery from "react-image-gallery";
import { Box, Text, Grid } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { IconButton } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      <Box className={styles.homePageCarousel}>
        <Carousel
          autoPlay="true"
          emulateTouch="true"
          infiniteLoop="true"
          showArrows="true"
          width="800px"
        >
          <div>
            <img src="https://www.elislab.com.tr/wp-content/uploads/2020/01/laboratuvar-sarf-malzemeleri.jpg" />
          </div>
          <div>
            <img src="https://www.sentezlab.com/class/INNOVAEditor/assets/laboratuvar%20cam%20malzemeleri.jpg" />
          </div>
          <div>
            <img src="https://www.kocar.com.tr/uploads/slider/images/000/000/049/medium" />
          </div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/419/993/small/ry2k_k4r5_180620.jpg" />
          </div>
          <div>
            <img src="https://tetralaboratuvar.com/wp-content/uploads/2021/03/Ozel-Laboratuvar.jpg" />
          </div>
          <div>
            <img src="https://microbenotes.com/wp-content/uploads/2020/05/Instruments-used-in-Microbiology-Lab-with-Principle-and-Uses.jpeg" />
          </div>
          <div>
            <img src="https://www.nasilbe.com/wp-content/uploads/2020/07/Laboratuvar-Malzemelerinin-isimleri-Nelerdir-1024x551.jpg" />
          </div>
        </Carousel>
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
