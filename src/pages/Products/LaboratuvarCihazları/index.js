import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function LaboratuvarCihazları() {
  return (
    <div>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>Ürünler tükendi!</AlertTitle>
        <AlertDescription>
          Yenilenen stoklarımız için takipte kalın.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default LaboratuvarCihazları;
