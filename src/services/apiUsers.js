import axios from "../api/axios";

export const signUp = async (values) => {
  const { data } = await axios.post("/api/users/signup", values);

  return data;
};

export const loginApi = async (values) => {
  const { data } = await axios.post("/api/users/login", values);

  return data;
};

export const getAllUsers = async () => {
  const { data } = await axios.get("/api/users");

  return data;
};
