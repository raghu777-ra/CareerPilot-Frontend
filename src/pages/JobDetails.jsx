import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../services/jobService";
import { applyForJob } from "../services/applicationService";
import { saveJob } from "../services/savedJobService";
import { isLoggedIn } from "../utils/auth";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const data = await getJobById(id);
      setJob(data);
    } catch (error) {
      console.error("Error loading job:", error);
      alert("Failed to load job details.");
    }
  };

  const handleApply = async () => {
    if (!isLoggedIn()) {
      alert("Please login to apply for this job.");
      return;
    }

    try {
      await applyForJob(id);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to apply for the job.");
    }
  };

  const handleSaveJob = async () => {
    if (!isLoggedIn()) {
      alert("Please login to save this job.");
      return;
    }

    try {
      await saveJob(id);
      alert("Job saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save the job.");
    }
  };

  if (!job) {
    return (
      <div className="loading-state">
        Loading...
      </div>
    );
  }

  return (
    <section className="job-details">
      <div className="container">

        <div className="job-details-card">

          <h1>{job.jobTitle}</h1>

          <div className="company">
            {job.companyName}
          </div>

          <div className="job-info">
            <span>📍 {job.location}</span>
            <span>💼 {job.employmentType}</span>
            <span>💰 ₹ {job.salary}</span>
            <span>⭐ {job.experience}</span>
            <span>📌 {job.status}</span>
          </div>

          <h3>Job Description</h3>

          <p>{job.description}</p>

          <div className="d-flex gap-3 mt-4">

            <button
              className="btn btn-primary-custom"
              onClick={handleApply}
            >
              Apply Now
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={handleSaveJob}
            >
              Save Job
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default JobDetails;