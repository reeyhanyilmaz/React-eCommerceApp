import React from "react";
import styles from "./styles.module.css";
import { Grid, Box, Text, GridItem } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Button, VStack, Divider } from "@chakra-ui/react";
// import WhatsAppWidget from "react-whatsapp-widget";
// import "react-whatsapp-widget/dist/index.css";
import { IconButton } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerFooter} style={{ textAlign: "center" }}>
        <Grid
          width="100%"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          pt="8"
          justifyContent={"space-between"}
          justifyItems={"stretch"}
          columns={[2, null, 3]}
        >
          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize="lg" marginBottom={"3"}>
                ChemDev Kimyasal Satış
              </Text>
              <ul>
                <li>
                  <a href="#">Biz Kimiz</a>
                </li>
                <li>
                  <a href="#">Vizyon & Misyon </a>
                </li>
                <li>
                  <a href="#">İş Ortaklarımız</a>
                </li>
              </ul>
            </Box>
          </GridItem>

          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize="lg" marginBottom={"3"}>
                Sosyal Medya
              </Text>
              <VStack>
                <Button
                  width="100%"
                  colorScheme="facebook"
                  leftIcon={<FaFacebook />}
                >
                  Facebook
                </Button>
                <Button
                  width="100%"
                  colorScheme="twitter"
                  leftIcon={<FaTwitter />}
                  href="https://twitter.com/reeyhanyilmaz"
                >
                  Twitter
                </Button>
              </VStack>
            </Box>
          </GridItem>

          <GridItem padding={"0.5rem"}>
            <Box>
            <Text fontSize="lg" marginBottom={"3"}>
                İletişim
              </Text>
              <IconButton
                variant="outline"
                variantColor="#84A59D"
                color="#84A59D"
                aria-label="Send email"
                icon={<EmailIcon />}
                width="200px"
                href="mailto:reyhanylmz1993@gmail.com"
                marginBottom="8px"             
              />
              <br />
              <IconButton
                backgroundColor="#84A59D"
                color="white"
                aria-label="Call Segun"
                icon={<PhoneIcon />}
                width="200px"
                href="tel:08500000000"               
              />
            </Box>
          </GridItem>
       
          <GridItem padding={"0.5rem"}>
            <Box>
              <Text fontSize="lg" marginBottom={"3"}>
                Yardım
              </Text>
              <ul>
                <li>
                  <a href="#">Güvenli Alışveriş</a>
                </li>
                <li>
                  <a href="#">Nasıl İade Edebilirim</a>
                </li>
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
              </ul>
            </Box>
          </GridItem>
        </Grid>

        {/* <WhatsAppWidget
            phoneNumber="0850 000 00 00"
            message="Merhaba! ChemDev ailesi olarak size nasıl yardımcı olabiliriz?"
            sendButton="Gönder"
            marginBottom="30"
            companyName="ChemDev Destek"
            textReplyTime="Bir gün içinde yanıt verilir"
          /> */}

        <Divider mt="6" />

        <Text textAlign="center" mt="2" fontSize="16" p="20px 0">
          Copyright 2022 © ChemDev | Developer by
          <a href="https://www.linkedin.com/in/reeyhanyilmaz/" target="_blank">{" "}
            Reyhan Yılmaz
          </a>
        </Text>
      </div>
    </div>
  );
}

export default Footer;
