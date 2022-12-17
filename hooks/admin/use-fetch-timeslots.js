import { useQuery } from "react-query";
import axios from "axios";

const useFetchTimeSlots = (userId) => {

    return useQuery(["timeslots", userId], async () => {
        const res = await axios.get(`/api/admin/get-timeslots?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchTimeSlots;