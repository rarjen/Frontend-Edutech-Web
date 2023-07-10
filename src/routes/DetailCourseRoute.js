import { Route, Routes } from "react-router-dom";

import DetailCourse from "../pages/detail-course/index";

export function DetailCourseRoute() {
  return (
    <Routes>
      <Route path="/detail-course/:courseId" element={<DetailCourse />} />
    </Routes>
  );
}
