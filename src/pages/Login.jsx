import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "../style.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call login function from AuthContext
      await login(inputs);

      navigate("/");
    } catch (err) {
      // Set error state if login fails
      setError(err.response.data);
      console.error(err);
    }
  };

  return (
    <div className="register p-4">
      <div className="register-content row">
        <div className="col text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Welcome Back: <br />
            <span className="text-primary">Login to Your Blogging Account</span>
          </h1>

          <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Welcome back to our blogging website! Please login below to continue
            sharing your thoughts and ideas with our community. New to our
            website?{" "}
            <Link to="/register" className="text-primary">
              Register for an account
            </Link>{" "}
            to join us. We're excited to have you be a part of our community!
          </p>
        </div>

        {/* Right column with login form */}
        <div className="my-5 px-5 col-lg-6 col-md-6 col-mb-12">
          <div className="card p-4 text-center">
            <form>
              <div className="form-outline">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-outline py-4">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Login button */}
              <button
                onClick={handleSubmit}
                type="submit"
                name="submit"
                className="button btn btn-primary btn-block center mb-4">
                Login
              </button>

              {/* Display error message if login fails */}
              {error && <p className="text-danger">{error}</p>}

              {/* Link to register page */}
              <p>
                Don't have an account yet?{" "}
                <Link to="/register" className="text-primary">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
