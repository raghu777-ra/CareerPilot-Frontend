import API from "../api/axiosConfig";

export const getProfile = async () => {
  const response = await API.get("/candidate/profile");
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await API.put("/candidate/profile", profileData);
  return response.data;
};

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post(
    "/candidate/profile/resume",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};