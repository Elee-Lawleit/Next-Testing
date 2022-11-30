import { useQuery } from "react-query";
import axios from "axios";


const useSelectStudentsAtt = (attendane) => {
    return useQuery(["bulk-students", attendane], async () => {
        const res = await axios.get(`/api/students/select-students-att?attendance=${attendane}`);
        return res?.data;
    })
}


export default useSelectStudentsAtt;