import axios from "axios";


//authorization'a header eklemek icin.
// axios.interceptors.request.use(
//     function (config) {
//     // Do something before request is sent
//     const {origin} = new URL(config.url);
//     const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
//     const token = localStorage.getItem("access-token");

//     if ( allowedOrigins.includes(origin)){
//         config.headers.authorizsation = token;
//     }
//     return config;
//   }, 

//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });


export const fetchProductList = async({ pageParam = 1 }) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products?page=${pageParam}&limit=12`); //pageParam yani sayfa numarası

    return data;
}

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/?id=${id}`);

    return data;
}

//user eklenmesi, yani yeni kullanıcının eklenmesi.
export const fetchRegister = async(input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`, input);

    return data;
}

export const fetchLogin = async(input) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`, input);

    return data;
}

//user'ların cekilmesi
export const getAllUsers = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`);
    
    return data;
}

export const controllerUserMail = async (mail) => {
    // üye olan tüm kullanıcıları çektik
    const allUser = await getAllUsers();
    
    // bu kullanıcıların içinde email'i form'daki email olan var mı?
    return allUser.find(user => user.email === mail );
    
} ;

export const controllerUserPassword = async (password) => {
    const allUser = await getAllUsers();

    // password kontrol
    return allUser.find(user => user.password === password );
}


export const fetchMe = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`);
    
    return data;
};

export const fetchLogout = async () => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users` , 
    // {refresh_token: localStorage.getItem("refresh-token"), }
    );
    
    return data;
};