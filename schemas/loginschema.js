import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
});
