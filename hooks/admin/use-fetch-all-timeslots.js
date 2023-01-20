import { useQuery } from "react-query";
import axios from "axios";

const useFetchAllTimeSlots = (userId) => {

    return useQuery(["timeslots-all", userId], async () => {
        const res = await axios.get(`/api/admin/get-all-timeslots?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchAllTimeSlots;