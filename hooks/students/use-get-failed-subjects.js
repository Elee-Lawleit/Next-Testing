import { useQuery } from "react-query";
import axios from "axios";


const useGetFailedSubjects = (studentId) => {
    return useQuery(["student-failed-subjects", studentId], async () => {
        const res = await axios.get(`/api/students/get-failed-subjects?studentId=${studentId}`);
        return res?.data;
    })
}


export default useGetFailedSubjects;