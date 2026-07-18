import API from "../api/axiosConfig";

export const saveJob = async (jobId) => {
  const response = await API.post(`/saved-jobs/${jobId}`);
  return response.data;
};

export const getSavedJobs = async () => {
  const response = await API.get("/saved-jobs");
  return response.data;
};

export const removeSavedJob = async (jobId) => {
  const response = await API.delete(`/saved-jobs/${jobId}`);
  return response.data;
};