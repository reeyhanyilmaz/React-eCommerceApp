import * as yup from 'yup';

const validationSchema = yup.object().shape({ 
    email: yup.string().email('Geçersiz e-mail').required('Zorunlu Alan'),
    password: yup.string().min(6, 'Parola en az 6 karakter olmalıdır.').required('Zorunlu Alan'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Parolalar eşleşmiyor.').required('Zorunlu Alan'),
})

export default validationSchema; 