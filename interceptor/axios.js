import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request)=>{
  const token = localStorage.getItem("accessToken");
  console.log(token);
  request.headers["authorization"] = `Bearer ${token}`
  return config;
});


export default axiosInstance;