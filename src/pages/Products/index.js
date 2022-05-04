import React from 'react';
import { NavLink , Route, Routes } from 'react-router-dom';
// import "./style.css";
import { Box } from '@chakra-ui/react';
import CamMalzeme from './CamMalzeme';
import Pipet from './Pipet';
import HacimselOlcum from './HacimselOlcum';

function Products() {

  return (
    <div>
        <Box mt="2">
            <Routes>
                <Route  path="cammalzeme" element={<CamMalzeme/>} />
                <Route  path="pipet" element={<Pipet/>} />
                <Route  path="hacimselOlcum" element={<HacimselOlcum/>} />
            </Routes>
        </Box>
    </div>
  )
}

export default Products;