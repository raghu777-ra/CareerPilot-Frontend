import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getSavedJobs,
  removeSavedJob,
} from "../services/savedJobService";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSavedJobs();
  }, []);

  const loadSavedJobs = async () => {
    try {
      const data = await getSavedJobs();
      setSavedJobs(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load saved jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (jobId) => {
    try {
      await removeSavedJob(jobId);
      setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
      alert("Job removed successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to remove job.");
    }
  };

  if (loading) {
    return (
      <div className="loading-state">
        Loading...
      </div>
    );
  }

  return (
    <section className="dashboard">
      <div className="container">

        <div className="dashboard-card">

          <h2 className="mb-4">Saved Jobs</h2>

          {savedJobs.length === 0 ? (
            <p>No saved jobs found.</p>
          ) : (
            <div className="row">

              {savedJobs.map((job) => (
                <div className="col-md-6 mb-4" key={job.id}>

                  <div className="job-card">

                    <h4>{job.jobTitle}</h4>

                    <p>
                      <strong>{job.companyName}</strong>
                    </p>

                    <p>📍 {job.location}</p>

                    <p>💰 ₹ {job.salary}</p>

                    <div className="d-flex gap-2 mt-3">

                      <Link
                        to={`/jobs/${job.id}`}
                        className="btn btn-primary-custom"
                      >
                        View
                      </Link>

                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(job.id)}
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default SavedJobs;