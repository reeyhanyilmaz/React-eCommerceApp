import axios from "axios";

export const fetchProductList = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products`);

    return data;
}

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/?id=${id}`);

    return data;
}

