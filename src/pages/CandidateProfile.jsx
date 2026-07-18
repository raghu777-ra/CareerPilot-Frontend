import { useEffect, useState } from "react";
import {
  getProfile,
  updateProfile,
  uploadResume,
} from "../services/candidateService";

function CandidateProfile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    education: "",
    experience: "",
  });

  const [resume, setResume] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();

      setProfile({
        fullName: data.fullName || "",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
        skills: data.skills || "",
        education: data.education || "",
        experience: data.experience || "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to load profile.");
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(profile);

      localStorage.setItem("fullName", profile.fullName);
      localStorage.setItem("email", profile.email);
      
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    }
  };

  const handleResumeUpload = async () => {
    if (!resume) {
      alert("Please select a resume.");
      return;
    }

    try {
      await uploadResume(resume);
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to upload resume.");
    }
  };

  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard-card">

          <h2 className="mb-4">Candidate Profile</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={profile.email}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={profile.location}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Skills</label>
              <textarea
                className="form-control"
                rows="3"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Education</label>
              <textarea
                className="form-control"
                rows="3"
                name="education"
                value={profile.education}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Experience</label>
              <textarea
                className="form-control"
                rows="3"
                name="experience"
                value={profile.experience}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Upload Resume (PDF/DOC/DOCX)
              </label>

              <input
                type="file"
                className="form-control"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
              />

              <button
                type="button"
                className="btn btn-secondary mt-3"
                onClick={handleResumeUpload}
              >
                Upload Resume
              </button>
            </div>

            <button
              type="submit"
              className="btn btn-primary-custom"
            >
              Update Profile
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default CandidateProfile;