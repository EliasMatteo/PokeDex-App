import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LogIn() {
  const [credentials, setCredentials] = useState("login");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function signinUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "") {
      router.push({
        pathname: "/",
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
        <form className="login-credentials">
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
        </form>
        <button
          type="submit"
          value="Login"
          className="login-credentials-buttons"
        >
          Login
        </button>
        <Link href="/register" type="submit" className="login-credentials-link">
          Don't have an account? Register here.
        </Link>
      </div>
    </div>
  );
}
