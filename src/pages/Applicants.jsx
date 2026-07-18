import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApplicants } from "../services/recruiterService";

function Applicants() {

  const { id } = useParams();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplicants();
  }, []);

  const loadApplicants = async () => {
    try {
      const data = await getApplicants(id);
      setApplications(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load applicants.");
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

          <h2 className="mb-4">Applicants</h2>

          {applications.length === 0 ? (

            <p>No applications found.</p>

          ) : (

            <div className="table-responsive">

              <table className="dashboard-table">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Resume</th>
                    <th>Status</th>
                    <th>Applied Date</th>
                  </tr>
                </thead>

                <tbody>

                  {applications.map((application) => (

                    <tr key={application.id}>

                      <td>{application.candidate.fullName}</td>

                      <td>{application.candidate.email}</td>

                      <td>
                        {application.candidate.resume ? (
                          <a
                            href={`http://localhost:8080/uploads/resumes/${application.candidate.resume}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Resume
                          </a>
                        ) : (
                          "No Resume"
                        )}
                      </td>

                      <td>{application.status}</td>

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

export default Applicants;