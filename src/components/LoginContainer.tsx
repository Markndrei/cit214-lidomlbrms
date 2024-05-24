import { useState } from "react";
import styles from "@/src/app/loginpage/page.module.css";
import React from "react";
import Signup from "./Signup";
import Login from "./Login";

const LoginContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.body}>
      <div
        className={`${styles.container} ${isActive ? styles.active : ""}`}
        id="container"
      >
        <Signup />
        <Login />
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <h1 className={styles.white1}>Welcome to LiDom</h1>
              <p>
                Encode your personal details to use all of the site features
              </p>
              <button
                className={`${styles.hidden} ${isActive ? "" : styles.visible}`}
                id="login"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1 className={styles.white1}>New Here?</h1>
              <p>Register Account to use all of the site features</p>
              <button
                className={`${styles.hidden} ${isActive ? "" : styles.visible}`}
                id="register"
                onClick={handleRegisterClick}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
