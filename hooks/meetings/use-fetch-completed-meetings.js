import { useQuery } from "react-query";
import axios from "axios";

const useFetchCompletedMeetings = (userId) => {

    return useQuery(["completed-meetings", userId], async () => {
        const res = await axios.get(`/api/meetings/get-completed-meetings?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchCompletedMeetings;