import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useUpdateFeedback = () => {

    return useMutation(
        async ({meetingId, feedback, rating }) => {
            return await axios.post("/api/meetings/update-meeting-feedback", {
                meetingId, feedback, rating
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

export default useUpdateFeedback;