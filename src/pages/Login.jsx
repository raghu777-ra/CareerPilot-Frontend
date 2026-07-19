import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {

      const response = await login(formData);

      setMessage("Login successful!");
      setMessageType("success");

      loginUser(response);

      setTimeout(() => {

        if (response.role === "ADMIN") {

          navigate("/admin-dashboard");

        } else if (response.role === "RECRUITER") {

          navigate("/recruiter-dashboard");

        } else {

          navigate("/dashboard");

        }

      }, 800);

    } catch (error) {

      const backendMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Invalid email or password.";

      setMessage(backendMessage);
      setMessageType("danger");

      console.error(error);

    } finally {

      setLoading(false);

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
                      Welcome Back!
                    </h2>

                    <p>
                      Login to continue your job search and manage your applications.
                    </p>

                    <div className="auth-feature">
                      ✓ Search Jobs
                    </div>

                    <div className="auth-feature">
                      ✓ Apply Instantly
                    </div>

                    <div className="auth-feature">
                      ✓ Track Applications
                    </div>

                  </div>

                </div>

                <div className="col-lg-7">

                  <div className="auth-right">

                    <h2 className="auth-title">
                      Login
                    </h2>

                    <p className="auth-subtitle">
                      Sign in to your account
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
                        className="auth-btn"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </button>

                    </form>

                    <div className="auth-footer">

                      Don't have an account?

                      <Link to="/register">
                        {" "}Register
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

export default Login;