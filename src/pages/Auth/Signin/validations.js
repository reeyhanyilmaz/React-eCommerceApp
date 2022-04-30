import * as yup from 'yup';

const validation = yup.object().shape({ 
    email: yup.string().email('E-mail adresi bulunamadı').required('Zorunlu Alan'),
    password: yup.string().required('E-mail veya parola hatalı'),
})

export default validation; 