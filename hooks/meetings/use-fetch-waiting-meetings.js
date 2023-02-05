import { useQuery } from "react-query";
import axios from "axios";

const useFetchWaitingList = (userId) => {

    return useQuery(["waiting-meetings"], async () => {
        const res = await axios.get(`/api/meetings/get-waiting-meetings?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchWaitingList;