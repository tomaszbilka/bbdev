import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters long')
    .required('Required'),
  email: Yup.string().email('invalid email').required('Required'),
  subject: Yup.string()
    .min(5, 'Must be at least 5 characters long')
    .required('Required'),
  message: Yup.string()
    .min(20, 'Must be at least 20 characters long')
    .required('Required'),
});

export default validationSchema;
