import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useCallParent = () => {

    return useMutation(
        async ({ currentAdminId, oldTimeslotId, status, waitingListId }) => {

            return await axios.post("/api/meetings/call-parent", {
                currentAdminId, oldTimeslotId, status, waitingListId
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

export default useCallParent;