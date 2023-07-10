import { /*Navigate,*/ Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Login from "../pages/signin";
import Register from "../pages/signup";
import { LibraryRoute } from "./LibraryRoute";
import { OTPRoute } from "./EnterOtpRoute";
import { MyLearningRoute } from "./MyLearingRoute";
// import { WishlistRoute } from "./WishlistRoute";
// import { ChartRoute } from "./ChartRoute";
import { DetailCourseRoute } from "./DetailCourseRoute";

// import PNavbar from "../components/Navbar";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <GuestOnlyRoute>
            <Register />
          </GuestOnlyRoute>
        }
      />
      <Route path="/library/*" element={<LibraryRoute />} />
      <Route
        path="/enter-otp"
        element={
          <GuestOnlyRoute>
            <OTPRoute />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/my-learning/*"
        element={
          <GuardRoute>
            <MyLearningRoute />
          </GuardRoute>
        }
      />

      <Route path="/course/*" element={<DetailCourseRoute />} />
    </Routes>
  );
}
