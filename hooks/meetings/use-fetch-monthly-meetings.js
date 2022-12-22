import { useQuery } from "react-query";
import axios from "axios";

const useFetchMonthlyMeetings = (userId, month, year) => {

    //it is used fetching data
    return useQuery(["monthly-meetings", userId, month, year], async () => {
        const res = await axios.get(`/api/meetings/get-monthly-meetings?userId=${userId}&month=${month}&year=${year}`);
        return res?.data;

    })
}

export default useFetchMonthlyMeetings;