/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../Store/AuthSlice";
import Google from "../assets/google.png";
import show from "../assets/hide-password.png";
import eye from "../assets/show-password.png";
import "../styles/register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: { username: "", email: "", password: "" },
      passwordVisible: false,
      flag: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.flag && prevState.flag !== this.state.flag) {
      setTimeout(() => {
        // this.props.navigate('/login');
      }, 2000);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputData: {
        ...prevState.inputData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputData } = this.state;
    if (!inputData.username || !inputData.email || !inputData.password) {
      alert("All fields are required...");
    } else {
      this.setState({ flag: true });
      this.props.register(inputData);
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  handleLoginRedirect = () => {
    // this.props.navigate('/login');
  };

  render() {
    const { inputData, passwordVisible, flag } = this.state;

    return (
      <div className="register">
        <div className="register-box">
          <div className="register-bg"></div>
          <div className="register-input text-white">
            {flag && (
              <div className="alert ui-define">
                Hello {inputData.username}, registered successfully.
              </div>
            )}
            <div className="auth-google">
              <h1 className="text-black">Register form</h1>
            </div>
            <div className="form-auth p-2">
              <form onSubmit={this.handleSubmit}>
                <div className="mt-3">
                  <label className="text-lg font-medium">Username</label>
                  <input
                    className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
                    placeholder="Enter your username"
                    type="text"
                    name="username"
                    value={inputData.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mt-4">
                  <label className="text-lg font-medium">Email</label>
                  <input
                    className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={inputData.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mt-4">
                  <label className="text-lg font-medium">Password</label>
                  <input
                    className="text-black/80 w-full border border-white rounded-xl p-2.5 mt-1"
                    placeholder="Enter your password"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={inputData.password}
                    onChange={this.phandleChange}
                  />
                  <i
                    className="eye-icon text-white"
                    onClick={this.togglePasswordVisibility}
                  >
                    <img
                      src={passwordVisible ? show : eye}
                      alt="Toggle visibility"
                    />
                  </i>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input type="checkbox" id="remember" />
                      <label
                        className="ml-2 text-base text-black"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="button"
                      className="text-base text-black fp"
                      onClick={this.handleLoginRedirect}
                    >
                      Forget password
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    type="submit"
                    className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-black text-lg sir"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="flex rounded-xl py-3 border border-white items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                  >
                    <img src={Google} alt="Google logo" className="h-6 w-6" />
                    Sign In with Google
                  </button>
                </div>
                <div className="registered">
                  Already registered?{" "}
                  <span
                    className="ml-2"
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.props.user && <Navigate to="/login" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { register };
export default connect(mapStateToProps, mapDispatchToProps)(Register);
