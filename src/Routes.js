import React from "react";
import Designer from "pages/Designer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Designer />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/designer" element={<Designer />} /> */}
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
