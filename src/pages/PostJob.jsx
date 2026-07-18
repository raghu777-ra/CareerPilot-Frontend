import { useState } from "react";
import { postJob } from "../services/recruiterService";

function PostJob() {

  const [job, setJob] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    employmentType: "",
    description: "",
    salary: "",
    experience: ""
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postJob(job);

      alert("Job posted successfully!");

      setJob({
        jobTitle: "",
        companyName: "",
        location: "",
        employmentType: "",
        description: "",
        salary: "",
        experience: ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to post job.");
    }
  };

  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard-card">

          <h2 className="mb-4">Post New Job</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                className="form-control"
                value={job.jobTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="companyName"
                className="form-control"
                value={job.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={job.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Employment Type</label>
              <input
                type="text"
                name="employmentType"
                className="form-control"
                value={job.employmentType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                name="salary"
                className="form-control"
                value={job.salary}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Experience</label>
              <input
                type="text"
                name="experience"
                className="form-control"
                value={job.experience}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                rows="5"
                className="form-control"
                value={job.description}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary-custom"
            >
              Post Job
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default PostJob;