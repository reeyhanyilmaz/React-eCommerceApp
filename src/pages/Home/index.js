import React from "react";
import { Box, Text, Grid, Button } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { IconButton } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div>
      <Grid templateColumns="repeat(8, 1fr)"  mt="3" mb="20">
        {/* <Box borderRadius="8px" width="100px" height="150px" mt="5" size="30px">
          <img src="/assets/logo.jpg" alt="logo" />
        </Box> */}

        <Box className={styles.grow} height="50px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yJb-W5ql6Gr34v--7KIOKFYZE13z196IFw&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow} height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TvFv26-q7KMK0o0VrW8HSvJloL56R99Dhg&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow } height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJr_suVyGoY7zcST_eqs4Bu_chZgOi0jlEA&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow} height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUZD777dUP8jf2_zbCvGqBwBuBG3oTeMBbw&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow} height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbWJ95Ka6ZB7kHYNeOcrwYdINEcrblEVbNw&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow} height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblLWaWJW6dn0pngwAKV0zyHTslLB4H4XfVw&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow} height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTub-yeliCQld-pTEdDq08AJjeZT1C9nkAQew&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>

        <Box className={styles.grow} height="70px" width="100px">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2D8MrjnmzzDDHzZuFat_DIZDA0TBhetGAlQ&usqp=CAU"
            alt="icon"
            className={styles.icon}
          />
        </Box>
      </Grid>

      <Box className={styles.homePageCarouselBox}>
        <Carousel
          autoPlay="true"
          emulateTouch="true"
          infiniteLoop="true"
          showArrows="true"
          className={styles.homePageCarousel}
        >
          <div>
            <img
              src="https://www.elislab.com.tr/wp-content/uploads/2020/01/laboratuvar-sarf-malzemeleri.jpg"
              alt="carouselImage"
            />
          </div>
          <div>
            <img
              src="https://microbenotes.com/wp-content/uploads/2020/05/Instruments-used-in-Microbiology-Lab-with-Principle-and-Uses.jpeg"
              alt="carouselImage"
            />
          </div>
          <div>
            <img
              src="https://www.nasilbe.com/wp-content/uploads/2020/07/Laboratuvar-Malzemelerinin-isimleri-Nelerdir-1024x551.jpg"
              alt="carouselImage"
            />
          </div>
          <div>
            <img
              src="https://www.sentezlab.com/class/INNOVAEditor/assets/laboratuvar%20cam%20malzemeleri.jpg"
              alt="carouselImage"
            />
          </div>
          <div>
            <img
              src="https://www.kocar.com.tr/uploads/slider/images/000/000/049/medium"
              alt="carouselImage"
            />
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/419/993/small/ry2k_k4r5_180620.jpg"
              alt="carouselImage"
            />
          </div>
          <div>
            <img
              src="https://tetralaboratuvar.com/wp-content/uploads/2021/03/Ozel-Laboratuvar.jpg"
              alt="carouselImage"
            />
          </div>
        </Carousel>
      </Box>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        mt="20"
        height="400px"
        border="solid 1px #e0e0e0"
        borderRadius="8px"
        paddingTop="10px"
        className={styles.grow}       
      >
        <img
          src="http://sc04.alicdn.com/kf/HTB1zgqmhlmWBuNkSndV763sApXal.png"
          alt="homeImage"
          className={styles.encokSatılanlarImage}
         
        />
        <img
          src="https://www.nukleonlab.com.tr/images/urunler/Pipet-ucu-780.jpg"
          alt="homeImage"  
          className={styles.encokSatılanlarImage}      
        />
        <Box className={styles.enCokSatılanlarBox}>
          <Text
            fontSize="2xl"
            textAlign="center"
            className={styles.enCokSatılanlar}
          >
            EN ÇOK <br /> SATILANLAR
            <br /> <br />
            <Button backgroundColor="#84A59D" color="white">
              Keşfet
            </Button>
          </Text>
        </Box>
      </Grid>

      <Box mt="20" className={styles.ozelFiyatlarBox}>
        <Text fontSize="2xl" className={styles.ozelFiyatlar}>
          <Button color="#c0b9dd" size="lg">
            ÖZEL FİYATLAR
          </Button>
        </Text>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEGIb181IToKaLjnFlxJkPL9dPVyAGbwF5Q&usqp=CAU"
          alt="ozelfiyatlar"
          className={styles.ozelFiyatlarImage}
        />
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="20" className={styles.explanationContact}>
        <Box className={styles.explanationContact__textBox}>
          <Text fontSize="lg" className={styles.explanation}>
            En kaliteli ve hijyenik malzemelerden yapılan ChemDev Kimyasal
            Malzemeleri ile çalışmalarınızı en başarılı şekilde
            gerçekleştirebileceksiniz. Yenilenen ürün yelpazemizi kaçırmamak
            için bizi sosyal medya hesaplarımızdan takip edebilirsiniz. Bizimle
            telefon ve mail yoluyla iletişime geçebilirsiniz.
          </Text>
        </Box>

        <Box className={styles.explanationContact__buttonBox}>
          <IconButton
            variant="outline"
            variantColor="#84A59D"
            color="#84A59D"
            aria-label="Send email"
            icon={<EmailIcon />}
            className={styles.contactPart}
          />

          <br />
          <br />
          <IconButton
            backgroundColor="#84A59D"
            color="white"
            aria-label="Call Segun"
            icon={<PhoneIcon />}
            className={styles.contactPart}
          />
        </Box>
      </Grid>
    </div>
  );
}

export default Home;
