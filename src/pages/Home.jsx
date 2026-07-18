import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="hero-badge">
                🚀 AI Powered Job Portal
              </span>

              <h1>
                Find Your Dream Job With
                <span> CareerPilot</span>
              </h1>

              <p>
                Discover thousands of verified job opportunities,
                connect with leading companies, upload your resume,
                and manage your entire job search journey from one
                modern platform.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/jobs"
                  className="btn btn-primary-custom"
                >
                  Explore Jobs
                </Link>

                <Link
                  to="/register"
                  className="btn btn-outline-custom"
                >
                  Create Account
                </Link>

              </div>

            </div>

            <div className="col-lg-6">

              <div className="hero-image">

                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                  alt="CareerPilot"
                  className="img-fluid rounded-4 shadow-lg"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="container">

          <div className="row g-4">

            <div className="col-6 col-lg-3">

              <div className="stat-card">

                <h2>10K+</h2>

                <p>Active Jobs</p>

              </div>

            </div>

            <div className="col-6 col-lg-3">

              <div className="stat-card">

                <h2>500+</h2>

                <p>Companies</p>

              </div>

            </div>

            <div className="col-6 col-lg-3">

              <div className="stat-card">

                <h2>50K+</h2>

                <p>Candidates</p>

              </div>

            </div>

            <div className="col-6 col-lg-3">

              <div className="stat-card">

                <h2>95%</h2>

                <p>Hiring Success</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>Why Choose CareerPilot?</h2>

            <p>
              Everything you need to build a successful career.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-lg-4">

              <div className="feature-card">

                <div className="feature-icon">
                  🔍
                </div>

                <h4>Smart Job Search</h4>

                <p>
                  Quickly find jobs using powerful search filters,
                  skills, location, and experience level.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="feature-card">

                <div className="feature-icon">
                  📄
                </div>

                <h4>Easy Apply</h4>

                <p>
                  Upload your resume once and apply to multiple jobs
                  in just one click.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="feature-card">

                <div className="feature-icon">
                  📊
                </div>

                <h4>Track Applications</h4>

                <p>
                  Monitor your applications, interview progress,
                  and recruiter responses from one dashboard.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TOP COMPANIES ================= */}

      <section className="company-section">

        <div className="container">

          <div className="section-title">

            <h2>Top Hiring Companies</h2>

            <p>
              Trusted by leading organizations across India.
            </p>

          </div>

          <div className="row g-4">

            {[
              "Infosys",
              "TCS",
              "Wipro",
              "Accenture",
              "Capgemini",
              "Cognizant"
            ].map((company, index) => (

              <div
                className="col-6 col-md-4 col-lg-2"
                key={index}
              >

                <div className="company-logo">

                  <h5 className="mb-0">
                    {company}
                  </h5>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="container">

          <div className="cta-box">

            <h2>
              Ready To Start Your Career Journey?
            </h2>

            <p>
              Join thousands of job seekers and connect with India's
              leading companies through CareerPilot.
            </p>

            <Link
              to="/register"
              className="btn btn-primary-custom"
            >
              Get Started Today
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;