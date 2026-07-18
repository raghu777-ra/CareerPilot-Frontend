import API from "./api";

export const getDashboard = async () => {
    const response = await API.get("/admin/dashboard");
    return response.data;
};

export const getUsers = async () => {
    const response = await API.get("/admin/users");
    return response.data;
};

export const toggleUser = async (id) => {
    await API.put(`/admin/users/${id}/toggle`);
};

export const getJobs = async () => {
    const response = await API.get("/admin/jobs");
    return response.data;
};

export const toggleJob = async (id) => {
    await API.put(`/admin/jobs/${id}/toggle`);
};

export const deleteJob = async (id) => {
    await API.delete(`/admin/jobs/${id}`);
};