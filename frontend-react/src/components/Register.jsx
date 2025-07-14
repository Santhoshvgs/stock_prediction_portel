import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ fix
  const [success,setSucess] =useState(false);
  const [loading,setLoading] = useState(false);

  const handleRegistation = async (e) => {
    e.preventDefault();
    setLoading(true)

    const userdata = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/Apiendpoints/v1/register/",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      console.log("Registration Successful");
      setErrors({}); // clear errors
      setUserName("");
      setEmail("");
      setPassword("");
      setErrors({})
      setSucess(true)
      setLoading(false)
    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data); // ✅ handle backend validation errors

      } else {
        console.error("Unexpected error", err);
      }
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Create an Account</h3>
          <form onSubmit={handleRegistation}>
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Enter user Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.username && <div className="text-danger mb-2">{errors.username}</div>}

            <input
              type="email"
              className="form-control mb-1"
              placeholder="Enter mail id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="text-danger mb-2">{errors.email}</div>}

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="text-danger mb-3">{errors.password}</div>}

            {success && <div className="alert alert-success">Regesterd Successfully</div>}
            {loading? (<button type="submit" className="btn btn-info d-block mx-auto " disabled>
              Please Wait..
            </button>) :(
            <button type="submit" className="btn btn-info d-block mx-auto">
              Register
            </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
