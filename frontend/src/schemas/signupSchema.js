import * as yup from "yup";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const errorMessage = "use lowercase, uppercase and digits";

const signupSchema = yup.object().shape({
  name: yup.string().max(30).required(),
  username: yup.string().min(5).max(30).required("username is required"),
  email: yup.string().email("email is required"),
  password: yup
    .string()
    .matches(passwordPattern)
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], 'password must match')
    .required("confirmPassword is required"),
});

export default signupSchema;