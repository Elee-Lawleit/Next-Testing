import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useAdjustMeeting = () => {

    return useMutation(
        async ({ meetingId, startTime, endTime, day, adminId }) => {

            return await axios.post("/api/meetings/adjust-meeting", {
                meetingId, startTime, endTime, day, adminId
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

export default useAdjustMeeting;