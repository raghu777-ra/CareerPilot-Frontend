import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "CANDIDATE"
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");

    try {

      await register(formData);

      setMessage("Registration successful. Redirecting to login...");
      setMessageType("success");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {

      const backendMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Registration failed.";

      setMessage(backendMessage);
      setMessageType("danger");

      console.error(error);

    }

  };

  return (

    <section className="auth-section">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div className="auth-card">

              <div className="row g-0">

                <div className="col-lg-5">

                  <div className="auth-left">

                    <div className="auth-logo">
                      CareerPilot
                    </div>

                    <h2>
                      Start Your Career Journey
                    </h2>

                    <p>
                      Create your free account and connect with top companies across India.
                    </p>

                    <div className="auth-feature">
                      ✓ Free Registration
                    </div>

                    <div className="auth-feature">
                      ✓ Build Your Profile
                    </div>

                    <div className="auth-feature">
                      ✓ Apply to Thousands of Jobs
                    </div>

                  </div>

                </div>

                <div className="col-lg-7">

                  <div className="auth-right">

                    <h2 className="auth-title">
                      Create Account
                    </h2>

                    <p className="auth-subtitle">
                      Register to get started
                    </p>

                    {message && (
                      <div className={`alert alert-${messageType}`}>
                        {message}
                      </div>
                    )}

                    <form
                      className="auth-form"
                      onSubmit={handleSubmit}
                    >

                      <div className="form-group">

                        <label>Full Name</label>

                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />

                      </div>

                      <div className="form-group">

                        <label>Email</label>

                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />

                      </div>

                      <div className="form-group">

                        <label>Phone Number</label>

                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />

                      </div>

                      <div className="form-group">

                        <label>Register As</label>

                        <select
                          className="form-control"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                        >
                          <option value="CANDIDATE">Candidate</option>
                          <option value="RECRUITER">Recruiter</option>
                        </select>

                      </div>

                      <div className="form-group">

                        <label>Password</label>

                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />

                      </div>

                      <button
                        type="submit"
                        className="auth-btn"
                      >
                        Register
                      </button>

                    </form>

                    <div className="auth-footer">

                      Already have an account?

                      <Link to="/login">
                        {" "}Login
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Register;