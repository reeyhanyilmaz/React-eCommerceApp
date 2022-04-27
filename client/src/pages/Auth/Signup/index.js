import React from 'react';
import {Flex , Box , Heading , FormControl , FormLabel , Button, Input , Alert} from '@chakra-ui/react';
import {useFormik} from 'formik';
import validation from './validations';
import {getAllUsers, fetchRegister , controllerUserMail } from '../../../api';
import { useNavigate } from 'react-router-dom';

import {useAuth} from "../../../contexts/AuthContext";

function Signup() {
  const {login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({  
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
   

    onSubmit: async (values , bag) => {
     
      const checkUserExist = await controllerUserMail(values.email);

      if(checkUserExist !== undefined){
        return bag.setErrors({email: 'Bu e-mail adresi ile kayıt olunmuştur.'});
      } else {
        const registerResponse = await fetchRegister({
              role: "user",
              email: values.email,
              password: values.password,              
            });
            console.log("registerResponse :", registerResponse);
            login(registerResponse);
            navigate("/profile");
      }
  },

  validationSchema: validation,

});


  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>

          <Box my={5}>
            {
              formik.errors.email && formik.errors.password && 
              formik.errors.passwordConfirm && (
                <Alert status='error'>
                  {formik.errors.email || formik.errors.password || formik.errors.passwordConfirm}
                </Alert>
              )
            }
          </Box>

          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel >E-mail</FormLabel>
                <Input name="email" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.email}
                isInvalid ={formik.touched.email && formik.errors.email}
                 />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel >Password</FormLabel>
                <Input name="password" 
                type="password" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.password}
                isInvalid ={formik.touched.password && formik.errors.password} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel >Password Confirm</FormLabel>
                <Input name="passwordConfirm" 
                type="password" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.passwordConfirm}
                isInvalid ={formik.touched.passwordConfirm
                 && formik.errors.passwordConfirm} />
              </FormControl>

              <Button mt={4} width="full" type='submit'>
                Sign Up
              </Button>
            </form>

          </Box>
        </Box>

      </Flex>
      </div>
  )
}

export default Signup;