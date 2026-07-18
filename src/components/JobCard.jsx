import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave
} from "react-icons/fa";

function JobCard({ job }) {
  return (
    <div className="card job-card shadow-sm border-0 h-100">

      <div className="card-body">

        <h4 className="fw-bold mb-3">
          {job.jobTitle}
        </h4>

        <p>
          <FaBuilding className="me-2 text-primary" />
          {job.companyName}
        </p>

        <p>
          <FaMapMarkerAlt className="me-2 text-primary" />
          {job.location}
        </p>

        <p>
          <FaBriefcase className="me-2 text-primary" />
          {job.employmentType}
        </p>

        <p>
          <FaMoneyBillWave className="me-2 text-primary" />
          ₹ {job.salary}
        </p>

        <p className="text-muted">
          Experience : {job.experience}
        </p>

      </div>

      <div className="card-footer bg-white border-0">

        <Link
          to={`/jobs/${job.id}`}
          className="btn btn-primary-custom w-100"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default JobCard;