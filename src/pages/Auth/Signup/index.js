import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel, Button, Input, Alert } from '@chakra-ui/react';
import { useFormik } from 'formik';
import validation from './validations';
import { fetchRegister, controllerUserMail } from '../../../api';
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../../contexts/AuthContext";

function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      role: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },


    onSubmit: async (values, bag) => {

      const checkUserMail = await controllerUserMail(values.email);

      if (checkUserMail !== undefined) {
        return bag.setErrors({ email: 'Bu e-mail adresi ile kayıt olunmuştur.' });
      } else {
        const registerResponse = await fetchRegister({
          role: "user",
          email: values.email,
          password: values.password,
        });

        login(registerResponse);
        navigate("/profile");
        console.log("sign up:", registerResponse);
      }
    },
    validationSchema: validation,

  });


  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Kayıt Ol</Heading>
          </Box>

          <Box my={5}>
            {
              formik.errors.email && formik.touched.email && (
                <Alert status='error'>
                  {formik.errors.email}
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
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel >Şifre</FormLabel>
                <Input name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel >Şifre Onay</FormLabel>
                <Input name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={formik.touched.passwordConfirm
                    && formik.errors.passwordConfirm} />
              </FormControl>

              <Button mt={4} width="full" type='submit'>
                Kayıt Ol
              </Button>
            </form>

          </Box>
        </Box>

      </Flex>
    </div>
  )
}

export default Signup;