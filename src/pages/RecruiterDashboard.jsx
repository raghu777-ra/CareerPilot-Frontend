import { Link } from "react-router-dom";

function RecruiterDashboard() {
  return (
    <section className="dashboard">
      <div className="container">

        <div className="dashboard-header">

          <div className="dashboard-title">
            <h1>Recruiter Dashboard</h1>
            <p>Manage jobs and track applicants from one place.</p>
          </div>

          <div className="d-flex gap-3">

            <Link
              to="/post-job"
              className="btn btn-primary-custom"
            >
              Post New Job
            </Link>

            <Link
              to="/my-jobs"
              className="btn btn-outline-primary"
            >
              My Jobs
            </Link>

          </div>

        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <div className="summary-card">
              <div className="summary-icon">💼</div>
              <h2>15</h2>
              <h5>Active Jobs</h5>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="summary-card">
              <div className="summary-icon">👥</div>
              <h2>84</h2>
              <h5>Applicants</h5>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="summary-card">
              <div className="summary-icon">⭐</div>
              <h2>18</h2>
              <h5>Shortlisted</h5>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="summary-card">
              <div className="summary-icon">📅</div>
              <h2>6</h2>
              <h5>Interviews</h5>
            </div>
          </div>

        </div>

        <div className="dashboard-card">

          <h3>Recent Job Posts</h3>

          <div className="table-responsive">

            <table className="dashboard-table">

              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Applications</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Java Full Stack Developer</td>
                  <td>Bengaluru</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>React Developer</td>
                  <td>Hyderabad</td>
                  <td>21</td>
                </tr>

                <tr>
                  <td>Spring Boot Developer</td>
                  <td>Pune</td>
                  <td>18</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}

export default RecruiterDashboard;