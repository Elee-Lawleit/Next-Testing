import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    username: yup.string().min(8, "minimun length is 8").required(),
    email: yup.string().email().required(),
    cnic: yup.string().required(),
    regno: yup.string.required(),
    phone: yup.string().required(),
    password: yup.string().min(8).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
})