import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useUpdateFeedback = () => {

    return useMutation(
        async ({meetingId, suggesstion, rude, polite, attentive }) => {
            return await axios.post("/api/meetings/update-meeting-feedback", {
                meetingId, suggesstion, rude, polite, attentive
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