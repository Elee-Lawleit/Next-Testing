import { useQuery } from "react-query";
import axios from "axios";


const useSelectStudentsGPA = (gpa) => {
    return useQuery(["bulk-students", gpa], async () => {
        const res = await axios.get(`/api/students/select-students-gpa?gpa=${gpa}`);
        return res?.data;
    })
}


export default useSelectStudentsGPA;