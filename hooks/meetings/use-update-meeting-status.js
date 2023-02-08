import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useUpdateMeetingStatus = () => {
    
    return useMutation(
        async ({ currentAdminId, oldTimeslotId, status }) => {
            
            return await axios.post("/api/meetings/update-meeting-status", {
                currentAdminId, oldTimeslotId, status
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

export default useUpdateMeetingStatus;