import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function LogIn() {
  const [credentials, setCredentials] = useState("login");
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = await loginUser({
      username,
      password,
      email,
    });
    setCredentials(credentials);
  };
  return (
    <div className="login">
      <div className="login-title">
        <div className="login-title-text-cont">
          <h3 className="login-title-text">Welcome to</h3>
          <h2 className="login-title-text">myPokedex</h2>
        </div>
        <Image src="/pokeball.png" alt="pokeball" width="200" height="200" />
      </div>
      {credentials === "login" && (
        <div className="login-credentials">
          <form className="login-credentials" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="login-credentials-fields"
            />
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="login-credentials-fields"
            />
          </form>
          <button type="button" className="login-credentials-buttons">
            Login
          </button>
          <button
            type="submit"
            onClick={() => {
              setCredentials("signup");
            }}
            className="login-credentials-link"
          >
            Don't have an account? Register here.
          </button>
        </div>
      )}
      {credentials === "signup" && (
        <div className="login-credentials">
          <form className="login-credentials" onSubmit={handleSubmit}>
            <input
              id="username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              required
              className="login-credentials-fields"
            />
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="login-credentials-fields"
            />
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="login-credentials-fields"
            />
          </form>
          <button type="button" className="login-credentials-buttons">
            Register
          </button>
          <button
            type="submit"
            onClick={() => {
              setCredentials("login");
            }}
            className="login-credentials-link"
          >
            Have an account? Login here.
          </button>
        </div>
      )}
      <div className="login-bottom-text">
        <div>All images and data gathered is</div>
        <div>used for educational purposes.</div>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
