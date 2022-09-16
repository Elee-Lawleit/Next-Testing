import { useQuery } from "react-query";
import axios from "axios";

const useFetchMeetings = (dateString, userId, userRole)=>{

    return useQuery(["meetings-for-calendar", dateString, userId, userRole], async()=>{
        const res = await axios.get(`/api/meetings/get-meetings?dayString=${dateString}&userId=${userId}&userRole=${userRole}`);
        return res?.data;

    })
}

export default useFetchMeetings;