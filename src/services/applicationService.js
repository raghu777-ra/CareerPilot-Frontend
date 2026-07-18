import API from "../api/axiosConfig";

export const applyForJob = async (jobId) => {
  const response = await API.post(`/candidate/apply/${jobId}`);
  return response.data;
};

export const getMyApplications = async () => {
  const response = await API.get("/candidate/applications");
  return response.data;
};