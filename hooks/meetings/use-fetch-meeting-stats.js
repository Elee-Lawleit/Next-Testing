import { useQuery } from "react-query";
import axios from "axios";
import { counter } from "@fortawesome/fontawesome-svg-core";

const useFetchMeetingStats = (userId, userRole) => {

    console.log("foo", userRole);
    return useQuery(["meetings-stats", userId, userRole], async () => {
        const res = await axios.get(`/api/meetings/get-meeting-stats?userId=${userId}&userRole=${userRole}`);
        return res?.data;

    })
}

export default useFetchMeetingStats;