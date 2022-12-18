import { useQuery } from "react-query";
import axios from "axios";

const useFetchAllMeetings = (userId)=>{

    return useQuery(["all-meetings", userId], async()=>{
        const res = await axios.get(`/api/meetings/get-all-meetings?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchAllMeetings;