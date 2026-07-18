import { useEffect, useState } from "react";
import { getMyApplications } from "../services/applicationService";

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const data = await getMyApplications();
      setApplications(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load applications.");
    } finally {
      setLoading(false);
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

          <h2 className="mb-4">My Applications</h2>

          {applications.length === 0 ? (
            <p>You haven't applied for any jobs yet.</p>
          ) : (
            <div className="table-responsive">

              <table className="dashboard-table">

                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Applied Date</th>
                  </tr>
                </thead>

                <tbody>

                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.job.jobTitle}</td>
                      <td>{application.job.companyName}</td>
                      <td>{application.job.location}</td>
                      <td>
                        <span className="status status-pending">
                          {application.status}
                        </span>
                      </td>
                      <td>
                        {new Date(application.appliedDate).toLocaleDateString()}
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

export default MyApplications;