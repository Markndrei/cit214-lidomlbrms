"use client";
import Link from "next/link";
import styles from "./page.module.css";
import TypingAnimation from "@/components/TypingAnimation";
import {
  getKindeServerSession,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  // const { isAuthenticated } = getKindeServerSession();

  // if (await isAuthenticated()) {
  //   return redirect("/dashboard");
  // }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.Rdesc}>
          Fall in love with a story, one recommendation at a time.
        </p>
        <p className={styles.Ldesc}>Find your perfect match:</p>
        <span className={styles.typed}>
          <TypingAnimation />
        </span>
        <Link href="/api/auth/login">
          <button className={styles.explore}>
            <div className={styles.button}>
              <div className={styles.circle}>
                <div className={`${styles.icon} ${styles.arrow}`}></div>
              </div>
              <span className={styles.buttonText}>SEARCH</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
