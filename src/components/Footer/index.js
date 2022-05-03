import React from "react";
import styles from "./styles.module.css";
import { Grid, Box, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Button, HStack, Divider } from "@chakra-ui/react";
import { WhatsappIcon } from "react-share";

function Footer() {
  return (
    <div className={styles.footer}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="10" ml="5" pt="3">
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

        <Box>
          <Text fontSize="lg" mb="6">
            Sosyal Medya
          </Text>

          <HStack>
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
              Facebook
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </HStack>
        </Box>

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
      </Grid>

      <Divider mt="5" />

      <Text textAlign="center" mt="2" fontSize="16">
        {" "}
        Copyright 2022 © ChemDev | Developer by
        <a href="https://www.linkedin.com/in/reeyhanyilmaz/">Reyhan Yılmaz</a>
      </Text>
    </div>
  );
}

export default Footer;
