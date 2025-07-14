import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvaider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    console.log("logout");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start bg-dark">
        <Link className="navbar-brand h1 text-light" to="/">
          Stock Prediction
        </Link>

        <div className="d-flex justify-content-end align-items-center gap-3">
          {isLoggedIn ? (
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Button
                Text="Login"
                className="btn btn-outline-info"
                url="/login"
              />
              <Button
                Text="Register"
                className="btn btn-outline-danger"
                url="/register"
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
