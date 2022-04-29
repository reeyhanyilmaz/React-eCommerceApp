import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct , updateProduct } from "../../../api";
import { useQuery } from "react-query";
import { Formik, FieldArray } from "formik";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea, Button
} from "@chakra-ui/react";
import { message} from "antd";

import validationSchema from "./validations";

function ProductDetail() {
  const { id } = useParams();
  console.log("use params id:", id);

  //admin:product dersek catchlendikten sonra baska product'a gecersek catch degismis olur, o yüzden id olarak ayırmamız gerekiyor.
  const { isLoading, isError, error, data } = useQuery(
    ["admin:product", id],
    () => fetchProduct(id)
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error {error.message}</div>;

  console.log("admin/productDetail data:", data);

  const handleSubmit = async (values , bag) => {
      //bag formun icinde yapabilecegimiz func gelir. Formu resetlemek, validasyınları tekrar calıstırmak gibi tanımlar gelir.
    console.log("admin/productDetail submitted:", values);

    //key daha sonra güncelleyecegimiz icin verdik. Updating görünüyor islem gerceklestikten sonra baska sekilde göstermemiz icin key vermeliyiz.
    message.loading({ content: 'Yükleniyor...', key: 'product_update' });

    try {
        await updateProduct(values, id);  
        message.success({
          content: "Ürün başarılı şekilde güncellendi.",
          key: "product_update", //güncellenecek olan.
          duration: 2, //duration 2 saniye sonunda kaybolması icin
        });
      } catch (e) {
        console.log("admin/productDetails ürün update error:" , e);
        message.error("Ürün güncellenirken bir hata oluştu.");
      }
  };

  return (
    <div>
      <Text fontSize="2xl"> Düzenle </Text>

      <Formik
        initialValues={{
          //data verdik cünkü varsayılan olarak gelsin ve degisebilsin.
          title: data.title,
          description: data.description,
          price: data.price,
          image: data.image,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* formik'in verdiği tanımları aldık , handleChang:input degismesi, handleBlur: inputtan ayrılması, values:o an ki formun degerleri, isSubmitting:form submit edilmisse true, degilse false döner.*/}
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            {/* Box aslında HTML div gibi ek özellikleri var ve proplar verilebiliyor
            disabled={isSubmitting} ise form gönderiliyorsa disable olması */}
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Ürün Adı</FormLabel>
                    <Input
                      name="title"
                      placeholder="Ürün Adı"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      isInvalid ={touched.title && errors.title}
                    />

                    {/* hepsi varsa <Text></Text> kısmını yazdır  */}
                    {touched.title && errors.title && ( 
                        <Text color="red.500">{errors.title}</Text>
                    )}                   
                  </FormControl>

                  <FormControl mt="4">
                    <FormLabel> Ürün Detayı</FormLabel>
                    <Textarea
                      name="description"
                      placeholder="Ürün Detayı"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      isInvalid ={touched.description && errors.description}
                    />
                    {touched.description && errors.description && ( 
                        <Text color="red.500">{errors.description}</Text>
                    )} 
                  </FormControl>

                  <FormControl mt="4">
                    <FormLabel>Fiyat</FormLabel>
                    <Input
                      name="price"
                      placeholder="Fiyat"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      isInvalid ={touched.price && errors.price}
                    />
                     {touched.price && errors.price && ( 
                        <Text color="red.500">{errors.price}</Text>
                    )} 
                  </FormControl>

                  <FormControl mt="4">
                    <FormLabel>Ürün Fotoğrafı</FormLabel>
                    <FieldArray
                      name="image"
                      render={(arrayHelpers) => (
                        <div>
    {/* values altında image diye key varsa bunu map'liyoruz. image array oldugu icin */}
                          {values.image &&
                            values.image.map((images, index) => (
                              <div key={index}>

         {/* birden fazla fotograf olacagı iicn, input name'i de ona göre degissin diye bu seilde yazdık */}
                                <Input name={`image.${index}`} value={images}
                                disabled={isSubmitting} onChange={handleChange} width="3xl"/>

                                <Button ml="4" type="button" colorScheme="red" onClick={() => arrayHelpers.remove(index)}>Sil</Button>
                              </div>
                            ))}

                            <Button mt="5" onClick={() => arrayHelpers.push("")}>Fotoğraf Ekle</Button>
                        </div>
                      )}
                    />
                  </FormControl>

{/* güncelle tıklayınca loading oluyor ve üstteki inputlar disable olur */}
                  <Button mt="4" width="full" type="submit" isLoading={isSubmitting}>
                      Güncelle
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default ProductDetail;
