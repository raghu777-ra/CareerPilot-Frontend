import { Link } from "react-router-dom";

function NotFound() {

  return (

    <section className="auth-section">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className="auth-card">

              <div className="auth-right text-center">

                <h1
                  style={{
                    fontSize: "120px",
                    fontWeight: "800",
                    color: "#2563EB"
                  }}
                >
                  404
                </h1>

                <h2 className="auth-title">
                  Page Not Found
                </h2>

                <p className="auth-subtitle">
                  The page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                  to="/"
                  className="auth-btn d-inline-block text-decoration-none"
                  style={{
                    width: "220px",
                    lineHeight: "60px"
                  }}
                >
                  Back to Home
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default NotFound;