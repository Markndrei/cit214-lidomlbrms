import React from "react";
import Link from "next/link";
import styles from "@/src/app/loginpage/page.module.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then((data) => {
        // Handle successful response data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div className={`${styles.formContainer} ${styles.signIn}`}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.black1}>Sign In</h1>
        <span className={styles.black2}>
          Use your email and password to sign in
        </span>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          required
        />
        <Link href="/forgot-password">Forgot Your Password?</Link>
        <button type="submit" className={styles.outside}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
