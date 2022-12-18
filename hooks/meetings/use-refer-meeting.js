import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useReferMeeting = () => {

    return useMutation(
        async({meetingId, referal})=>{
          console.log("in hook: ", meetingId, referal)
            return await axios.post("/api/meetings/refer-meeting", {
                meetingId, referal
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Meeting referal successful successfully");
            },
            onError: (err, variables, context) => {
                console.log(err);
            },
        }
    )
}

export default useReferMeeting;