import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useCreateMeetingMutation = () => {

    return useMutation(
        async({date, reason, registrationNumber, time, students, userId, userRole, adminId, assocRegno})=>{
            return await axios.post(userRole === "Admin"? "/api/meetings/create-meeting" : "/api/meetings/create-meetingP", {
                date, reason, registrationNumber, time, students, userId, adminId, assocRegno
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