import { Route, Routes } from "react-router-dom";

import DetailCourse from "../pages/detail-course";

export function CoursesRoute() {
  return (
    <Routes>
      <Route path="/detail-course" element={<DetailCourse />} />
    </Routes>
  );
}
