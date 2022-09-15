import { useQuery } from "react-query";
import axios from "axios";

const useFetchMeetings = (dateString, userId, userRole)=>{

    return useQuery(["meetings", dateString, userId, userRole], async()=>{
        const res = await axios.get(`/api/meetings/get-meetings?dayString=${dateString}&userId=${userId}&userRole=${userRole}`);
        console.log("Response inside useFetchMeetings hook: ", res)
        console.log("data IS: ", res.data);
        return res?.data;

    })
}

export default useFetchMeetings;