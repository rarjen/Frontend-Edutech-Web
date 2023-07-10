import React from "react";
import { Form } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import PButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import "./style.css";

export default function FormOTP({
  form,
  handleRefreshToken,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Example: nkri@gmail.com"
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="OTP"
        name="otpCode"
        value={form.otpCode}
        type="text"
        placeholder="Enter OTP"
        onChange={handleChange}
      />

      <div className="mt-4">
        <PButton
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          variant="dark"
          className="button-signIn"
        >
          Verify
        </PButton>
      </div>

      <div className="mt-2">
        <PButton
          loading={isLoading}
          disabled={isLoading}
          action={handleRefreshToken}
          variant={"outline-dark"}
          className={"button-refresh"}
        >
          Refresh OTP
        </PButton>
      </div>
    </Form>
  );
}
