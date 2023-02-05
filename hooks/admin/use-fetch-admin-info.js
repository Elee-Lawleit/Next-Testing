import { useQuery } from "react-query";
import axios from "axios";

const useFetchAdminInfo = () => {

    return useQuery(["admin-info"], async () => {
        const res = await axios.get(`/api/admin/get-admin-info`);
        return res?.data;

    })
}

export default useFetchAdminInfo;