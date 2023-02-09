import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useRemoveFromWait = () => {

    return useMutation(
        async ({ waitingId, timeslotId }) => {
            console.log("values in hook", [waitingId, timeslotId])
            return await axios.post("/api/meetings/remove-from-wait", {
                waitingId, timeslotId
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

export default useRemoveFromWait;