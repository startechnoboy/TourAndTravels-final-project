/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Store/AuthSlice";
import Google from "../assets/google.png";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Both fields are required...");
    } else {
      console.log("Logged in");
      dispatch(login({ email, password }));
      navigate("/");
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <div className="login-bg"></div>
        <div className="login-input">
          <div className="auth-google">
            <h1>Login Form</h1>
          </div>
          <div className="form-auth">
            <form className="container" onSubmit={handleSubmit}>
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4 p">
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full border border-black rounded-xl p-3 mt-1 bg-transparent"
                  placeholder="Enter your password"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <i
                  className="eye-icon-login text-white"
                  onClick={togglePasswordVisibility}
                >
                  <img src={passwordVisible ? show : eye} alt="" />
                </i>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" />
                    <label className="ml-2 text-base r" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <button className="text-base text-black fp">
                    Forget password
                  </button>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg si"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="flex rounded-xl py-3 border border-black items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                >
                  <img src={Google} alt="Google logo" className="h-6 w-6" />
                  Sign In with Google
                </button>
              </div>
              <div className="registered">
                Not yet registered?{" "}
                <span
                  className="ml-2"
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/register">Register Here</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
