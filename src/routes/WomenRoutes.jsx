import { Route, Routes } from "react-router-dom";

function WomenRoutes() {
  return (
    <Routes>
        <Route path="/" element={<WomenRoutes />} />
      </Routes>
  );
}

export default WomenRoutes;