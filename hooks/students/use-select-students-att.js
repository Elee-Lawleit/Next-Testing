import { useQuery } from "react-query";
import axios from "axios";


const useSelectStudentsAtt = (attendance, subject) => {
    return useQuery(["bulk-students", attendance, subject], async () => {
        const res = await axios.get(`/api/students/select-students-att?attendance=${attendance}&subject=${subject}`);
        return res?.data;
    })
}


export default useSelectStudentsAtt;