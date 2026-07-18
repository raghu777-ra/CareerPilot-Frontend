import API from "../api/axiosConfig";

export const getAllJobs = async () => {
  const response = await API.get("/jobs");
  return response.data;
};

export const getJobById = async (id) => {
  const response = await API.get(`/jobs/${id}`);
  return response.data;
};

export const searchJobs = async (keyword) => {
  const response = await API.get(`/jobs/search?keyword=${keyword}`);
  return response.data;
};