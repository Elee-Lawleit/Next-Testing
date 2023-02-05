import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useChangeWaitToRes = () => {

    return useMutation(
        async ({ time, date }) => {

            return await axios.post("/api/meetings/change-wait-to-res", {
                time, date
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Meeting status updated successfully");
            },
            onError: (err, variables, context) => {
                console.log(err);
            },
        }
    )
}

export default useChangeWaitToRes;