import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import ResumePage from "@/pages/ResumePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}
