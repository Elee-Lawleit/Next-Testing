import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useUpdateMeetingCW = () => {

    return useMutation(
        async ({ meetingId, action, feedback }) => {

            return await axios.post("/api/meetings/update-meeting-cw", {
                meetingId, action, feedback
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

export default useUpdateMeetingCW;