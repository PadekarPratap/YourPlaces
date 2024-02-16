import axios from "axios";

export const SERVER = import.meta.env.VITE_SERVER;

const axiosInstance = axios.create({
  baseURL: SERVER,
});

export default axiosInstance;
