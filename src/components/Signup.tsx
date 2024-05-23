import React from "react";
import styles from "@/src/app/loginpage/page.module.css";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json;
    console.log(data);
  };

  return (
    <div className={`${styles.formContainer} ${styles.signUp}`}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.black1}>Create Account</h1>
        <span className={styles.black2}>Use your email to register</span>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.outside}>
          Register Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
