import { Route, Routes } from "react-router-dom";

import Courses from "../pages/mylearing";
import Chart from "../pages/chart";
import WishList from "../pages/wishlist";

export function MyLearningRoute() {
  return (
    <Routes>
      <Route path="/all-courses" element={<Courses />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/my-wishlist" element={<WishList />} />
    </Routes>
  );
}
