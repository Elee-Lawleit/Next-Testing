import { useQuery } from "react-query";
import axios from "axios";

const useFetchMeetingStats = (userId, userRole) => {
    
    return useQuery(["meetings-stats", userId, userRole], async () => {
        const res = await axios.get(`/api/meetings/get-meeting-stats?userId=${userId}&userRole=${userRole}`);
        return res?.data;

    })
}

export default useFetchMeetingStats;