import API from "../api/axiosConfig";

export const login = async (loginData) => {
  const response = await API.post("/auth/login", loginData);
  return response.data;
};

export const register = async (registerData) => {
  const response = await API.post("/auth/register", registerData);
  return response.data;
};