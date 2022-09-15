import { useQuery } from "react-query";
import axios from "axios";

const useFetchTotalMeetings = (userId, userRole) => {

    return useQuery(["meetings", userId, userRole], async () => {
        const res = await axios.get(`/api/meetings/get-total-meetings-for-user?userId=${userId}&userRole=${userRole}`);
        console.log("Response inside useFetchMeetings hook: ", res)
        console.log("data IS: ", res.data);
        return res?.data;

    })
}

export default useFetchTotalMeetings;