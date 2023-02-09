import { useQuery } from "react-query";
import axios from "axios";

const useFetchBestAdmin = () => {

    return useQuery(["best-admin"], async () => {
        const res = await axios.get(`/api/admin/get-average-rating`);
        return res?.data;

    })
}

export default useFetchBestAdmin;