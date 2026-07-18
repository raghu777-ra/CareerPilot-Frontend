import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { auth } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg sticky-top">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          CareerPilot
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav me-auto ms-4">

            <li className="nav-item">
              <NavLink
                end
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>

            {(!auth.token || auth.role === "CANDIDATE") && (
              <li className="nav-item">
                <NavLink
                  to="/jobs"
                  className="nav-link"
                >
                  Jobs
                </NavLink>
              </li>
            )}

          </ul>

          {!auth.token ? (

            <div className="nav-buttons">

              <Link
                to="/login"
                className="login-btn text-decoration-none"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="register-btn text-decoration-none"
              >
                Register
              </Link>

            </div>

          ) : (

            <div className="nav-buttons">

              {auth.role === "ADMIN" && (
                <>
                  <NavLink to="/admin-dashboard" className="nav-link">
                    Dashboard
                  </NavLink>

                  <NavLink to="/admin/users" className="nav-link">
                    Users
                  </NavLink>

                  <NavLink to="/admin/jobs" className="nav-link">
                    Jobs
                  </NavLink>
                </>
              )}

              {auth.role === "RECRUITER" && (
                <>
                  <NavLink to="/recruiter-dashboard" className="nav-link">
                    Dashboard
                  </NavLink>

                  <NavLink to="/post-job" className="nav-link">
                    Post Job
                  </NavLink>

                  <NavLink to="/my-jobs" className="nav-link">
                    My Jobs
                  </NavLink>
                </>
              )}

              {auth.role === "CANDIDATE" && (
                <>
                  <NavLink to="/dashboard" className="nav-link">
                    Dashboard
                  </NavLink>

                  <NavLink to="/my-applications" className="nav-link">
                    Applications
                  </NavLink>
                </>
              )}

              <ProfileMenu />

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;