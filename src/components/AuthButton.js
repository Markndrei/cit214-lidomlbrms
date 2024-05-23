// components/AuthButton.js
"use client";
import { useState } from "react";
import supabase from "@/src/utils/supabase/supabaseClient";

const AuthButton = () => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
  };

  return (
    <button onClick={handleSignOut} disabled={loading}>
      Sign Out
    </button>
  );
};

export default AuthButton;
