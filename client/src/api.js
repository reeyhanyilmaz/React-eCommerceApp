import axios from "axios";

export const fetchProductList = async() => {
    const {data} = await axios.get("https://6263dd6598095dcbf927b111.mockapi.io/products");

    return data;
}

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`https://6263dd6598095dcbf927b111.mockapi.io/products/?id=${id}`);

    return data;
}

