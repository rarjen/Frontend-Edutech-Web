import { Route, Routes } from "react-router-dom";

import Otp from "../pages/otp";

export function OTPRoute() {
  return (
    <Routes>
      <Route path="/" element={<Otp />} />
    </Routes>
  );
}
