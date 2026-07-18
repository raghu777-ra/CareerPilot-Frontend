import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getMyJobs,
  deleteJob,
} from "../services/recruiterService";

function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await getMyJobs();
      setJobs(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(id);

      setJobs(jobs.filter((job) => job.id !== id));

      alert("Job deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete job.");
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

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>My Posted Jobs</h2>

            <Link
              to="/post-job"
              className="btn btn-primary-custom"
            >
              Post New Job
            </Link>

          </div>

          {jobs.length === 0 ? (

            <p>No jobs posted yet.</p>

          ) : (

            <div className="table-responsive">

              <table className="dashboard-table">

                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {jobs.map((job) => (

                    <tr key={job.id}>

                      <td>{job.jobTitle}</td>

                      <td>{job.companyName}</td>

                      <td>{job.location}</td>

                      <td>{job.status}</td>

                      <td>

                        <div className="d-flex gap-2">

                          <Link
                            to={`/edit-job/${job.id}`}
                            className="btn btn-warning btn-sm"
                          >
                            Edit
                          </Link>

                          <Link
                            to={`/jobs/${job.id}/applications`}
                            className="btn btn-info btn-sm"
                          >
                            Applicants
                          </Link>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(job.id)}
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>
    </section>
  );
}

export default MyJobs;