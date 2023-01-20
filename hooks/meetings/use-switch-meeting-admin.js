import { useMutation, useQuery } from "react-query";
import axios from "axios";

const useSwitchAdmin = () => {

    return useMutation(
        async ({ meetingId, adminId }) => {
            return await axios.post("/api/meetings/switch-meeting-admin", {
                meetingId, adminId
            });
        },
        {
            onSuccess: async (res, variables, context) => {
                console.log("Meeting admin updated successfully.");
            },
            onError: (err, variables, context) => {
                console.log(err);
            },
        }
    )
}

export default useSwitchAdmin;