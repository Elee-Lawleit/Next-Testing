import { useQuery } from "react-query";
import axios from "axios";


const useSelectStudents = (gpa) => {
    return useQuery(["bulk-students", gpa], async () => {
        const res = await axios.get(`/api/students/select-students?gpa=${gpa}`);
        return res?.data;
    }, {cacheTime: 0})
}


export default useSelectStudents;