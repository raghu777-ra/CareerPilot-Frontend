import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../services/candidateService";

function CandidateDashboard() {

      const [profileScore, setProfileScore] = useState(0);

    useEffect(() => {
      loadProfile();
    }, []);

    const loadProfile = async () => {

      try {

        const profile = await getProfile();

        const fields = [
          profile.fullName,
          profile.email,
          profile.phone,
          profile.location,
          profile.skills,
          profile.education,
          profile.experience,
          profile.resume
        ];

        const completed = fields.filter(
          field => field && field.toString().trim() !== ""
        ).length;

        setProfileScore(Math.round((completed / fields.length) * 100));

      } catch (error) {
        console.error(error);
      }

    };

  return (

    <section className="dashboard">

      <div className="container">

        <div className="dashboard-header">

          <div className="dashboard-title">

            <h1>Candidate Dashboard</h1>

            <p>
              Welcome back! Here's an overview of your career activity.
            </p>

          </div>

          <Link
            to="/jobs"
            className="btn btn-primary-custom"
          >
            Browse Jobs
          </Link>

        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">

            <div className="summary-card">

              <div className="summary-icon">
                📄
              </div>

              <h2>12</h2>

              <h5>Applications</h5>

            </div>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="summary-card">

              <div className="summary-icon">
                ❤️
              </div>

              <h2>8</h2>

              <h5>Saved Jobs</h5>

            </div>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="summary-card">

              <div className="summary-icon">
                📅
              </div>

              <h2>3</h2>

              <h5>Interviews</h5>

            </div>

          </div>

          <div className="col-md-6 col-lg-3">

            <div className="summary-card">

              <div className="summary-icon">
                ⭐
              </div>

              <h2>{profileScore}%</h2>

              <h5>Profile Score</h5>

            </div>

          </div>

        </div>

        <div className="dashboard-card">

          <h3>Recent Applications</h3>

          <div className="table-responsive">

            <table className="dashboard-table">

              <thead>

                <tr>

                  <th>Job Title</th>

                  <th>Company</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Java Full Stack Developer</td>

                  <td>Infosys</td>

                  <td>
                    <span className="status status-active">
                      Shortlisted
                    </span>
                  </td>

                </tr>

                <tr>

                  <td>React Developer</td>

                  <td>TCS</td>

                  <td>
                    <span className="status status-pending">
                      Under Review
                    </span>
                  </td>

                </tr>

                <tr>

                  <td>Spring Boot Developer</td>

                  <td>Wipro</td>

                  <td>
                    <span className="status status-rejected">
                      Rejected
                    </span>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CandidateDashboard;