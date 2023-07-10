import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import PAlert from "../../components/Alert";
import PImage from "../../components/Image";
import LForm from "./registerForm";
import { postData } from "../../utils/fetch";
import "./style.css";

function PageSignup() {
  const navigate = useNavigate();

  // States
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setAlert({ status: false });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await postData(`/api/alpha/v1/auth/signup`, form);

    // Dispatch
    if (res?.data?.data) {
      setIsLoading(false);
      navigate("/enter-otp");
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        message: res?.response?.data?.message ?? "Internal Server Error!",
        type: "danger",
      });
    }
  };

  return (
    <Container md={12} className="my-5 content p-5 col-6">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <PAlert type={alert.type} message={alert.message} />}
      </div>
      <section className="login d-flex">
        <div className="login-left w-50 h-100">
          <div className="row justify-content-center align-item-center h-90 ">
            <div className="col-12">
              <div className="header">
                <h1>Create Account</h1>
                <p>Please enter your details.</p>
              </div>
              <div className="loginForm">
                <LForm
                  form={form}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login-right w-50 h-100 ms-2">
          <div className="row align-item-center justify-content-center h-100">
            <PImage
              src={
                "https://ik.imagekit.io/6v306xm58/signup-image.jpg?updatedAt=1681785106082"
              }
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default PageSignup;
