import { useMutation } from "react-query";
import axios from "axios";

const useDeleteTimeslot = () => {

    return useMutation(
        async ({ timeslotId }) => {
            return await axios.post("/api/admin/delete-timeslot", {
                timeslotId
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Timeslot deleted successfully");
            },
            onError: (erra, variables, context) => {
                console.log(erra);
            },
        }
    )
}

export default useDeleteTimeslot;