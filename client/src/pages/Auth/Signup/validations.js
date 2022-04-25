import * as yup from 'yup';

const validationSchema = yup.object().shape({ 
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),
})

export default validationSchema; 