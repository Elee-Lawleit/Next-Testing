import { useQuery } from "react-query";
import axios from "axios";

const useFetchAdmins = () => {

    return useQuery(["all-admin-timeslots"], async () => {
        const res = await axios.get(`/api/admin/get-admins`);
        return res?.data;
    })
}

export default useFetchAdmins;