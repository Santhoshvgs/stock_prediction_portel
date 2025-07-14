import React from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AuthProvaider from "./AuthProvaider";

const App = () => {
  return (
    <>
      <AuthProvaider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvaider>
      {/* <Main /> */}
    </>
  );
};

export default App;
