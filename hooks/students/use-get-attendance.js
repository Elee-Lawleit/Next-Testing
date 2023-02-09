import { useQuery } from "react-query";
import axios from "axios";


const useGetAttendance = (studentId) => {
    return useQuery(["student-attendance", studentId], async () => {
        const res = await axios.get(`/api/students/get-student-attendance?studentId=${studentId}`);
        return res?.data;
    })
}


export default useGetAttendance;