import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LogIn() {
  const [credentials, setCredentials] = useState("login");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordconfirmation, setPasswordCom] = useState("");
  const router = useRouter();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        passwordconfirmation,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "Sign Up Sucessful") {
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    }
  }

  return (
    <div className="login">
      <div className="login-title">
        <div className="login-title-text-cont">
          <h3 className="login-title-text">Welcome to</h3>
          <h2 className="login-title-text">myPokedex</h2>
        </div>
        <Image src="/pokeball.png" alt="pokeball" width="200" height="200" />
      </div>

      <div className="login-credentials">
        <form className="login-credentials" onSubmit={registerUser}>
          <input
            id="username"
            value={username}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
            className="login-credentials-fields"
          />
          <input
            id="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-credentials-fields"
          />
          <input
            id="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-credentials-fields"
          />

          <input
            id="passwordconfirmation"
            value={passwordconfirmation}
            type="password"
            onChange={(e) => setPasswordCom(e.target.value)}
            placeholder="Password Confirmation"
            required
            className="login-credentials-fields"
          />

          <input
            type="submit"
            value="Register"
            className="login-credentials-buttons"
          />
        </form>
        <Link href="/login" type="submit" className="login-credentials-link">
          Have an account? Login here.
        </Link>
      </div>
      <div className="login-bottom-text">
        <div>All images and data gathered is</div>
        <div>used for educational purposes.</div>
      </div>
    </div>
  );
}
