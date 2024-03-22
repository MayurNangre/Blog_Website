import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.scss";

const Register = () => {
  // State to manage form inputs
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to handle registration errors
  const [err, setError] = useState(null);

  // React Router navigation hook
  const navigate = useNavigate();

  // Event handler for input changes
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to register user using axios
      await axios.post("/auth/register", inputs);

      navigate("/login");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="register p-4">
      <div className="register-content row">
        <div className="col text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Join our Blogging Community: <br />
            <span className="text-primary">Register Now</span>
          </h1>
          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Welcome to our blogging website! Register below to join our
            community of writers and readers, create and publish your own blog
            posts, and engage with other members. We look forward to seeing what
            you have to share!
          </p>
        </div>

        <div className="my-5 col-lg-6 col-md-6 col-mb-12">
          <div className="card p-4 text-center">
            <form>
              <div className="form-outline">
                <input
                  required
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline py-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email Id"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-outline py-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="button btn btn-primary btn-block center mb-4">
                Register
              </button>

              {err && <p style={{ color: "red" }}>{err}</p>}

              <p>
                Already have an account? <a href="login">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
