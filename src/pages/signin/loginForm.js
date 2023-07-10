import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PButton from "../../components/Button";
import PIButton from "../../components/ButtonWithIcon";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import "./style.css";

export default function FormSignin({
  form,
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
        placeholder="Enter email"
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
      <div className="my-3 text-center">
        <NavLink to="/forgot-password" className={"text-decoration-none"}>
          Forgot Password
        </NavLink>
      </div>
      <div className="mt-2">
        <PButton
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          variant="dark"
          className="button-signIn"
        >
          Sign In
        </PButton>
      </div>

      <div className="mt-2">
        <PIButton
          icon={faGoogle}
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          variant="outline-secondary"
          className="button-signIn"
        >
          Sign In With Google
        </PIButton>
      </div>

      <div className="text-center my-1">
        <span>
          Don't have an account?{" "}
          <NavLink to="/signup" className={"text-decoration-none"}>
            Sign up for free
          </NavLink>
        </span>
      </div>
    </Form>
  );
}
