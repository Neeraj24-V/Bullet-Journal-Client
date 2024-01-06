import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Auth({ Component }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function isTokenExpired() {
    if (!token) {
      return true; // No token means token expired
    }

    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp < currentTime;
  }

  useEffect(() => {
    if (isTokenExpired()) {
      navigate("/login");
    }
  }, [token, navigate]);
  return <Component />;
}

export default Auth;
