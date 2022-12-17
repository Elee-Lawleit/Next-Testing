import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useCreateMeetingMutation = () => {

    return useMutation(
        async({date, reason, registrationNumber, time, students, userId})=>{
            return await axios.post("/api/meetings/create-meeting", {
                date, reason, registrationNumber, time, students, userId
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Meeting created successfully");
            },
            onError: (err, variables, context) => {
                console.log(err);
            },
        }
    )
}

export default useCreateMeetingMutation;