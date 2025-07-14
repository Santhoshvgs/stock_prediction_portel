import axios from "axios";
import React, { useState } from "react";
import{useNavigate} from 'react-router-dom'
import { AuthContext } from "../AuthProvaider";
import { useContext } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [errors, seterrors] = useState('')
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userdata = {
      username,
      password,
    };
    console.log(userdata);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/Apiendpoints/v1/token/",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      console.log(response.data);
      console.log("login Sucesssessful");
      setUserName("");
      setPassword("");
      setLoading(false);
      navigate('/')
      setIsLoggedIn(true)

    } catch (error) {
      console.error("Invalid Credent");
      seterrors("Invalid Credentials")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Login Account</h3>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter user Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Set Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors && <div className="text-danger justify-content-center">{errors}</div>}
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto "
                  disabled>
                  Please Wait..
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
