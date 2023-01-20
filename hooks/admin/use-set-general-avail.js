import { useMutation } from "react-query";
import axios from "axios";

const useSetGeneralAvail = () => {

    return useMutation(
        async ({adminId, state}) => {
            return await axios.post("/api/admin/set-general-avail", {
                adminId, state
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Admin availibility updated");
            },
            onError: (erra, variables, context) => {
                console.log(erra);
            },
        }
    )
}

export default useSetGeneralAvail;