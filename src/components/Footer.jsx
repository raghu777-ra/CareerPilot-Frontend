import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="container">

          <div className="row gy-5">

            <div className="col-lg-4">

              <h3 className="footer-brand">
                Career<span>Pilot</span>
              </h3>

              <p className="footer-desc">
                CareerPilot is an AI-powered job portal that helps
                students and professionals discover opportunities,
                build careers, and connect with top companies.
              </p>

            </div>

            <div className="col-lg-2">

              <h5 className="footer-title">
                Quick Links
              </h5>

              <ul className="footer-links list-unstyled">

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>

              </ul>

            </div>

            <div className="col-lg-3">

              <h5 className="footer-title">
                Resources
              </h5>

              <ul className="footer-links list-unstyled">

                <li>
                  <a href="#">Career Guide</a>
                </li>

                <li>
                  <a href="#">Resume Builder</a>
                </li>

                <li>
                  <a href="#">Interview Tips</a>
                </li>

                <li>
                  <a href="#">Help Center</a>
                </li>

              </ul>

            </div>

            <div className="col-lg-3">

              <h5 className="footer-title">
                Contact
              </h5>

              <p className="footer-contact">
                📧 support@careerpilot.com
              </p>

              <p className="footer-contact">
                📞 +91 98765 43210
              </p>

              <div className="footer-social">

                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#">
                  <i className="bi bi-github"></i>
                </a>

                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <p className="footer-copy">
                © 2026 CareerPilot. All Rights Reserved.
              </p>

            </div>

            <div className="col-md-6">

              <div className="footer-bottom-links">

                <a href="#">Privacy</a>

                <a href="#">Terms</a>

                <a href="#">Support</a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;