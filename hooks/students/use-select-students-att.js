import { useQuery } from "react-query";
import axios from "axios";


const useSelectStudentsAtt = (attendance) => {
    return useQuery(["bulk-students", attendance], async () => {
        const res = await axios.get(`/api/students/select-students-att?attendance=${attendance}`);
        return res?.data;
    })
}


export default useSelectStudentsAtt;