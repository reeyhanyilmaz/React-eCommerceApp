import axios from "axios";

export const fetchProductList = async({ pageParam = 1 }) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products?page=${pageParam}&limit=12`); //pageParam yani sayfa numarası

    return data;
}

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/?id=${id}`);

    return data;
}

//user'ların cekilmesi
export const getAllUsers = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`);
    
    return data;
}

//user eklenmesi, yani yeni kullanıcının eklenmesi.
export const fetchRegister = async(input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`, input);

    return data;
}

export const controllerUserMail = async (mail) => {
    // üye olan tüm kullanıcıları çektik
    const allUser = await getAllUsers();
    
    // bu kullanıcıların içinde email'i form'daki email olan var mı?
    return allUser.find(user => user.email === mail);
    
} 