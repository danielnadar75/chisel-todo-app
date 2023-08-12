import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_AUTH_TOKEN,
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("[axios]: ", response.statusText);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
/**
 *
 */
