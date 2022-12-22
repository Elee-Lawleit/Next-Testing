import { useQuery } from "react-query";
import axios from "axios";

const useFetchMeetingsRatings = (userId) => {

    //it is used fetching data
    return useQuery(["monthly-meetings", userId], async () => {
        const res = await axios.get(`/api/meetings/get-meetings-ratings?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchMeetingsRatings;