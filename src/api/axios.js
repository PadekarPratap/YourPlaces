import axios from "axios";

const SERVER = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: SERVER,
});

export default axiosInstance;
