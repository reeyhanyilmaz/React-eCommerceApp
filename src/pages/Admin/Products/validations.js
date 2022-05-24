import * as yup from "yup";

const newProductScheme = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().min(5).required(),
	price: yup.number().required(),
	category: yup.number().required(),
});

export default newProductScheme;