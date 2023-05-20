import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Min 6 letters required for password'),
})

const signUpSchema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Full name is too short').required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short'),
  confirmPassword: Yup.string()
    .required('Password is required')
    .min(6, 'Min 6 letters required for password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
}
);


const todoSchema = Yup.object().shape({
  todo: Yup.string().required('This field is required.'),
})

export { loginSchema, todoSchema, signUpSchema }
