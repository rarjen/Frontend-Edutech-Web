import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import PAlert from "../../components/Alert";
import Swal from "sweetalert2";
import Form from "./form";

const EnterOTP = () => {
  const navigate = useNavigate();

  // States
  const [form, setForm] = useState({
    email: "",
    otpCode: "",
  });

  const [timer, setTimer] = useState(120); // Timer mundur dalam detik

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setAlert({ status: false });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const res = await postData(`/api/alpha/v1/auth/verify`, form);

    if (res?.data?.data) {
      setIsLoading(false);
      navigate("/signin");
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        message: res?.response?.data?.message ?? "Internal Server Error!",
        type: "danger",
      });
    }
  };

  const handleRefreshToken = () => {
    Swal.fire({
      title: "Refresh OTP",
      text: "Apakah Anda ingin memperbarui otp? Ini akan mengirim ulang OTP ke email Anda.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Refresh",
      cancelButtonText: "Batal",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Permintaan refresh token
        postData("/api/alpha/v1/auth/refresh-otp", form.email)
          .then((response) => {
            console.log(response);
            setTimer(120); // Reset timer ke 2 menit
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error", "Gagal memperbarui token.", "error");
          });
      }
    });
  };

  useEffect(() => {
    // Timer mundur
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Hentikan timer saat mencapai 0
    if (timer === 0) {
      clearInterval(countdown);
    }

    // Bersihkan timer saat komponen unmount
    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  return (
    <Container>
      {alert.status && <PAlert type={alert.type} message={alert.message} />}
      <div className="otp-container">
        <h1>Enter OTP</h1>
        <p>
          OTP akan expired dalam: {Math.floor(timer / 60)}:
          {timer % 60 < 10 ? "0" : ""}
          {timer % 60}
        </p>
        <Form
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleRefreshToken={handleRefreshToken}
          isLoading={isLoading}
        />
      </div>
    </Container>
  );
};

export default EnterOTP;
