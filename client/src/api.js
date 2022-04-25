import axios from "axios";

export const fetchProductList = async({ pageParam = 1 }) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products?page=${pageParam}`); //pageParam yani sayfa numarası

    return data;
}

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/?id=${id}`);

    return data;
}

