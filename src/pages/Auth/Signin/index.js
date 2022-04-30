 import React from 'react';
 import {Flex , Box , Heading , FormControl , FormLabel , Button, Input , Alert} from '@chakra-ui/react';
import {useFormik} from 'formik';
import validation from './validations';
import {getAllUsers, fetchLogin , controllerUserMail , controllerUserPassword } from '../../../api';
import { useNavigate } from 'react-router-dom';

import {useAuth} from "../../../contexts/AuthContext";

function Signin() {
  const {login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({  
    initialValues: {
      role:'',
      email: '',
      password: '',
    },
   
    onSubmit: async (values , bag) => {
     
      const checkUserMail = await controllerUserMail(values.email);
      const checkUserPassword = await controllerUserPassword(values.password);

      if(checkUserMail === undefined){
        bag.setErrors({email: 'E-mail adresi bulunamadı'});
      } else if(checkUserPassword === undefined){
        bag.setErrors({password :"E-mail veya parola hatalı"});
      } else {
        const loginResponse = await fetchLogin({
              role: values.role,
              email: values.email,
              password: values.password,              
            });
            console.log("signin response:", loginResponse);
            login(loginResponse);
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
            <Heading>Sign In</Heading>
          </Box>

          <Box my={5}>
            {
              formik.errors.email && formik.touched.email && 
              (
                <Alert status='error'>
                  {formik.errors.email}
                </Alert>
              )
            }
          </Box>

          <Box my={5}>
            {
              formik.errors.password && formik.touched.password &&
              (
                <Alert status='error'>
                  {formik.errors.password}
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

              <Button mt={4} width="full" type='submit'>
                Sign In
              </Button>
            </form>

          </Box>
        </Box>

      </Flex>
      </div>
  )
}

export default Signin;