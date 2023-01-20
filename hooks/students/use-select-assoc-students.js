import { useQuery } from "react-query";
import axios from "axios";


const useSelectAssocStudents = (parentId) => {
    return useQuery(["assoc-students", parentId], async () => {
        const res = await axios.get(`/api/students/get-assoc-students?parentId=${parentId}`);
        return res?.data;
    })
}


export default useSelectAssocStudents;