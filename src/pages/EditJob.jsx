import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../services/jobService";
import { updateJob } from "../services/recruiterService";

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
    employmentType: "",
    experience: "",
    description: "",
    status: ""
  });

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const data = await getJobById(id);

      setJob({
        jobTitle: data.jobTitle || "",
        companyName: data.companyName || "",
        location: data.location || "",
        salary: data.salary || "",
        employmentType: data.employmentType || "",
        experience: data.experience || "",
        description: data.description || "",
        status: data.status || ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to load job.");
    }
  };

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateJob(id, job);
      alert("Job updated successfully!");
      navigate("/my-jobs");
    } catch (error) {
      console.error(error);
      alert("Failed to update job.");
    }
  };

  return (
    <section className="dashboard">
      <div className="container">

        <div className="dashboard-card">

          <h2 className="mb-4">Edit Job</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                name="jobTitle"
                value={job.jobTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={job.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={job.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                className="form-control"
                name="salary"
                value={job.salary}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Employment Type</label>
              <select
                className="form-select"
                name="employmentType"
                value={job.employmentType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Experience</label>
              <input
                type="text"
                className="form-control"
                name="experience"
                value={job.experience}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Job Description</label>
              <textarea
                className="form-control"
                rows="5"
                name="description"
                value={job.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={job.status}
                onChange={handleChange}
              >
                <option value="OPEN">OPEN</option>
                <option value="CLOSED">CLOSED</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary-custom"
            >
              Update Job
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default EditJob;