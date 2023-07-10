import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import "./style.css";

export default function FormSignup({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Full Name"
        name="fullName"
        value={form.fullName}
        type="text"
        placeholder="Example: Joko Widodo"
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Example: nkri@gmail.com"
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Password"
        name="password"
        value={form.password}
        type="password"
        placeholder="Password"
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
          Sign Up
        </PButton>
      </div>

      <div className="mt-2 confirm">
        <Form.Check
          inline
          type={"checkbox"}
          // label={"I agree all statements in Terms of service"}
        />
        <span>
          I agree all statements in{" "}
          <NavLink to={"/#"} className={"text-decoration-none"}>
            Terms of service
          </NavLink>
        </span>
      </div>

      <div className="text-center mt-1">
        <span className="sign-in">
          Have an account?{" "}
          <NavLink to="/signin" className={"text-decoration-none"}>
            Sign In here
          </NavLink>
        </span>
      </div>
    </Form>
  );
}
