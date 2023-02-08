import { useMutation } from "react-query";
import axios from "axios";

const useUpdateTimeslotStatus = () => {

    return useMutation(
        async ({ timeslotId, status, date }) => {
            return await axios.post("/api/admin/update-timeslot-status", {
                timeslotId, status, date
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Timeslot status updated successfully");
            },
            onError: (erra, variables, context) => {
                console.log(erra);
            },
        }
    )
}

export default useUpdateTimeslotStatus;