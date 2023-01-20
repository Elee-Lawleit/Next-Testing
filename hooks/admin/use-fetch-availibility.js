import { useQuery } from "react-query";
import axios from "axios";

const useFetchAvail = (userId) => {

    return useQuery(["availibility", userId], async () => {
        const res = await axios.get(`/api/admin/get-availibility?userId=${userId}`);
        return res?.data;

    })
}

export default useFetchAvail;