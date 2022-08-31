import * as yup from "yup";

export const loginSchema = yup.object().shape({
  regno: yup.string().required(),
  password: yup.string().min(8).required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
});
