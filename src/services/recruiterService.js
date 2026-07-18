import API from "../api/axiosConfig";

export const postJob = async (jobData) => {
  const response = await API.post("/recruiter/jobs", jobData);
  return response.data;
};

export const getMyJobs = async () => {
  const response = await API.get("/recruiter/jobs");
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await API.delete(`/recruiter/jobs/${id}`);
  return response.data;
};

export const updateJob = async (id, jobData) => {
  const response = await API.put(`/recruiter/jobs/${id}`, jobData);
  return response.data;
};

export const getApplicants = async (jobId) => {
  const response = await API.get(`/recruiter/jobs/${jobId}/applications`);
  return response.data;
};