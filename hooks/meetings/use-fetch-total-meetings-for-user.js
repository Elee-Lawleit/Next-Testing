import { useQuery } from "react-query";
import axios from "axios";

const useFetchTotalMeetings = (userId, userRole) => {

    return useQuery(["total-meetings", userId, userRole], async () => {
        const res = await axios.get(`/api/meetings/get-total-meetings-for-user?userId=${userId}&userRole=${userRole}`);
        return res?.data;

    })
}

export default useFetchTotalMeetings;