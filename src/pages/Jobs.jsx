import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../services/jobService";

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadJobs();

    }, []);

    const loadJobs = async () => {

        try {

            const data = await getAllJobs();
            setJobs(data);

        } catch (error) {

            console.error("Error fetching jobs:", error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <div className="loading-state">
                Loading jobs...
            </div>
        );

    }

    return (

        <section className="jobs-page">

            <div className="container">

                <div className="jobs-header">

                    <h1>Find Your Next Opportunity</h1>

                    <p>
                        Browse the latest openings from top companies
                        across India.
                    </p>

                </div>

                {jobs.length === 0 ? (

                    <div className="empty-state">

                        <h3>No Jobs Available</h3>

                        <p>
                            Please check back later.
                        </p>

                    </div>

                ) : (

                    <div className="row">

                        {jobs.map((job) => (

                            <div
                                className="col-lg-6"
                                key={job.id}
                            >

                                <div className="job-card">

                                    <div className="job-top">

                                        <div>

                                            <h3 className="job-title">
                                                {job.jobTitle}
                                            </h3>

                                            <div className="company-name">
                                                {job.companyName}
                                            </div>

                                        </div>

                                    </div>

                                    <div className="job-meta">

                                        <span>
                                            📍 {job.location}
                                        </span>

                                        <span>
                                            💼 {job.employmentType}
                                        </span>

                                        <span>
                                            💰 {job.salary}
                                        </span>

                                        <span>
                                            ⭐ {job.experience}
                                        </span>

                                    </div>

                                    <p className="job-description">

                                        {job.description.length > 140
                                            ? job.description.substring(0, 140) + "..."
                                            : job.description}

                                    </p>

                                    <div className="job-footer">

                                        <span className="job-date">

                                            Status :
                                            {" "}
                                            {job.status}

                                        </span>

                                        <Link
                                            to={`/jobs/${job.id}`}
                                            className="btn btn-primary-custom"
                                        >
                                            View Details
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}

export default Jobs;