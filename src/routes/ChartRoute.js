import { Route, Routes } from "react-router-dom";

import Chart from "../pages/chart";

export function ChartRoute() {
  return (
    <Routes>
      <Route path="/" element={<Chart />} />
    </Routes>
  );
}
