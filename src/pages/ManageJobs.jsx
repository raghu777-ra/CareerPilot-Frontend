import { useEffect, useState } from "react";
import {
  getJobs,
  toggleJob,
  deleteJob,
} from "../services/adminService";

function ManageJobs() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleJob(id);
      loadJobs();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this job?")) {
      return;
    }

    try {
      await deleteJob(id);
      loadJobs();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
    job.companyName.toLowerCase().includes(search.toLowerCase()) ||
    job.recruiterName.toLowerCase().includes(search.toLowerCase()) ||
    job.recruiterEmail.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Manage Jobs</h2>

        <input
          type="text"
          className="form-control w-25"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-responsive">

        <table className="table table-bordered table-hover align-middle">

          <thead className="table-dark">

            <tr>

              <th>ID</th>

              <th>Job</th>

              <th>Company</th>

              <th>Recruiter</th>

              <th>Email</th>

              <th>Location</th>

              <th>Status</th>

              <th>Active</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredJobs.map((job) => (

              <tr key={job.id}>

                <td>{job.id}</td>

                <td>{job.jobTitle}</td>

                <td>{job.companyName}</td>

                <td>{job.recruiterName}</td>

                <td>{job.recruiterEmail}</td>

                <td>{job.location}</td>

                <td>
                  <span
                    className={`badge ${
                      job.status === "OPEN"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      job.active
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {job.active ? "Active" : "Inactive"}
                  </span>
                </td>

                <td>

                  <button
                    className={`btn btn-sm me-2 ${
                      job.active
                        ? "btn-warning"
                        : "btn-success"
                    }`}
                    onClick={() => handleToggle(job.id)}
                  >
                    {job.active ? "Deactivate" : "Activate"}
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(job.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageJobs;