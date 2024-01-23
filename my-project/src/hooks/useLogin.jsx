import { getUsername } from "../services/auth.service";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(setUsername(token));
    } else {
      window.location.href = "/login";
    }
    setUsername(getUsername(token));
  }, []);

  return username;
};
