import { useQuery } from "react-query";
import axios from "axios";

export default function useFetchGigs() {
   return useQuery(['fetch-gigs'], async () => {
    const res = await axios.get("https://api.github.com/users");
    return res?.data
   })
}