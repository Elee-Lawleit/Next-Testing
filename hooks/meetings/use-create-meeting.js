import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useCreateMeetingMutation = () => {

    return useMutation(
        async({date, reason, registrationNumber, time, students})=>{
            // console.log("Time: ", time, "regno:", registrationNumber);
            return await axios.post("/api/meetings/create-meeting", {
                date, reason, registrationNumber, time, students
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Parent added");
            },
            onError: (err, variables, context) => {
                console.log(err);
            },
        }
    )
}

export default useCreateMeetingMutation;