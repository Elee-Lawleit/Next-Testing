import { useQuery } from "react-query";
import axios from "axios";

const useGetPairStats = (userId) => {

    console.log("USERID ", userId)
    return useQuery(["admin-parent-pair-statistics"], async () => {
        const res = await axios.get(`/api/meetings/admin-parent-pair-statistics`);
        return res?.data;

    })
}

export default useGetPairStats;