import { useQuery } from "react-query";
import axios from "axios";


const useGetCgpa = (studentId) => {
    return useQuery(["student-cgpa", studentId], async () => {
        const res = await axios.get(`/api/students/get-cgpa?studentId=${studentId}`);
        return res?.data;
    })
}


export default useGetCgpa;