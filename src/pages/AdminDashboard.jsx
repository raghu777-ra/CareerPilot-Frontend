import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard } from "../services/adminService";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState({
        totalCandidates: 0,
        totalRecruiters: 0,
        totalJobs: 0,
        totalApplications: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const data = await getDashboard();
            setDashboard(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container py-5">

            <h2 className="mb-4">
                Admin Dashboard
            </h2>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h6>Candidates</h6>
                            <h2>{dashboard.totalCandidates}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h6>Recruiters</h6>
                            <h2>{dashboard.totalRecruiters}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h6>Jobs</h6>
                            <h2>{dashboard.totalJobs}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <h6>Applications</h6>
                            <h2>{dashboard.totalApplications}</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row mt-5">

                <div className="col-md-6">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h4>Manage Users</h4>

                            <p>
                                View candidates and recruiters, activate or deactivate accounts.
                            </p>

                            <Link
                                to="/admin/users"
                                className="btn btn-primary"
                            >
                                Manage Users
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h4>Manage Jobs</h4>

                            <p>
                                View all jobs, activate, deactivate or delete jobs.
                            </p>

                            <Link
                                to="/admin/jobs"
                                className="btn btn-success"
                            >
                                Manage Jobs
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );

}

export default AdminDashboard;