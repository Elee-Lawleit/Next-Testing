import { useQuery } from "react-query";
import axios from "axios";


const useGetDisciplinary = (studentId) => {
    return useQuery(["student-disciplinary", studentId], async () => {
        const res = await axios.get(`/api/students/get-disciplinary?studentId=${studentId}`);
        return res?.data;
    })
}


export default useGetDisciplinary;