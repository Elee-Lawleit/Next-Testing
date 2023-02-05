import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useUpdateMeetingStatus = () => {
    
    return useMutation(
        async ({ time, date }) => {
            
            return await axios.post("/api/meetings/update-meeting-status", {
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

export default useUpdateMeetingStatus;