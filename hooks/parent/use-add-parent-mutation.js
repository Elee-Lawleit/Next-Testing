import { useMutation } from "react-query";
import axios from "axios";


export default function useAddParentMutation() {
  return useMutation(
    async ({ username, email, cnic, phone, password }) => {
      return await axios.post("/api/parent/add-parent", {
        username,
        email,
        cnic,
        phone,
        password,
      });
    },
    {
      onSuccess: async (res, variables, context) => {
        console.log("Parent added");
      },
      onError: (err, variables, context) => {
        console.log(err);
      },
    }
  );
}
