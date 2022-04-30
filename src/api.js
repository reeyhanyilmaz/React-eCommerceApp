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
};

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products/?id=${id}`);

    return data;
};

export const postProduct = async (input) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/products`,input
    );
  
    return data;
  };

//user eklenmesi, yani yeni kullanıcının eklenmesi.
export const fetchRegister = async(input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`, input);

    return data;
}

//kullanıcı giris islemleri.
export const fetchLogin = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/users`);
    // let newdata = data.filter((item) => item.email === input.email);
    // if (newdata.length !== 1) {
    // newdata = false;
    // }

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
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/users`);
    
    return data;
};

export const postOrder = async (input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/order` , input);
    
    return data;
};

export const fetchOrder = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/order`);
    
    return data;
};


//admin/products sayfasından ürün silmek icin
export const deleteProduct = async (id) => {
    const {data} = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`);
  
    return data;
  };


  export const updateProduct = async (input, id) => {
    const {data} = await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`, input);
  
    return data;
  };

