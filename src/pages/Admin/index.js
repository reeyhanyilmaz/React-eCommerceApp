import React from 'react';
import { NavLink , Route, Routes } from 'react-router-dom';
import "./style.css";
import { Box } from '@chakra-ui/react';
import Home from './Home';
import Products from './Products';
import Orders from './Orders'; 
import ProductDetail from './ProductDetail';
import NewProduct from './Products/new';
import {Button} from "@chakra-ui/react";

function Admin() {

  return (
    <div>
        <nav>
            <ul className='admin-menu'>
                {/* <li>
                    <NavLink to="/admin">Ana Sayfa</NavLink>
                </li> */}

                <li>
                    <NavLink to="/admin/orders">
                        <Button color="white" backgroundColor="#c0b9dd">Siparişler</Button>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin/products">
                        <Button color="white" backgroundColor="#c0b9dd">Ürünler</Button>
                    </NavLink>
                </li>
            </ul>
        </nav>

        <Box mt="2">
            <Routes>
                {/* <Route  path="/" element={<Home />} /> */}
                <Route  path="orders" element={<Orders/>} />
                <Route  path="products" element={<Products/>} />
                <Route  path="products/new" element={<NewProduct />} />
                <Route  path="products/:id" element={<ProductDetail/>} />
            </Routes>
        </Box>
    </div>
  )
}

export default Admin;