import React from "react";
import styles from "./styles.module.css";
import { Grid, Box, Text, GridItem } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Button, VStack, Divider } from "@chakra-ui/react";
import { WhatsappIcon } from "react-share";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerFooter}>
        <Grid
          width="100%"
          templateColumns="repeat(4, 1fr)"
          gap={6}
          pt="6"
          justifyContent={"space-between"}
          justifyItems={"stretch"}
          columns={[2, null, 3]}>

          <GridItem>
            <Box>
              <Text fontSize="lg">ChemDev Kimyasal Satış</Text>
              <ul>
                <li>
                  <a>Biz Kimiz</a>
                </li>
                <li>
                  <a>Güvenli Alışveriş</a>
                </li>
                <li>
                  <a>Sıkça Sorulan Sorular</a>
                </li>
              </ul>
            </Box>
          </GridItem>

          <GridItem>
            <Box>
              <Text fontSize="lg" mb="6">
                Sosyal Medya
              </Text>
              <VStack>
                <Button width="100%" colorScheme="facebook" leftIcon={<FaFacebook />}>
                  Facebook
                </Button>
                <Button width="100%" colorScheme="twitter" leftIcon={<FaTwitter />}>
                  Twitter
                </Button>
              </VStack>
            </Box>
          </GridItem>

          <GridItem>
            <Box>
              WhatsApp Destek
              <Text fontSize="2xl"> 0850 000 00 00 </Text>
              <WhatsappIcon
                size={35}
                round={false}
                borderRadius="8px"
                display="flex"
                justifyContent="center"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box>
              <Text fontSize="lg">Yardım</Text>
              <ul>
                <li>
                  <a>Canlı Yardım</a>
                </li>
                <li>
                  <a>Nasıl İade Edebilirim</a>
                </li>
                <li>
                  <a>Sıkça Sorulan Sorular</a>
                </li>
              </ul>
            </Box>
          </GridItem>

        </Grid>

        <Divider mt="5" />

        <Text textAlign="center" mt="2" fontSize="16" p="20px 0">
          Copyright 2022 © ChemDev | Developer by
          <a href="https://www.linkedin.com/in/reeyhanyilmaz/"> Reyhan Yılmaz</a>
        </Text>

      </div>
    </div>
  );
}

export default Footer;
