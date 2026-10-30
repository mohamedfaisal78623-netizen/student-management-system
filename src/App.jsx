import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout><Home /></DashboardLayout>} />
        <Route path="/students" element={<DashboardLayout><Students /></DashboardLayout>} />
        <Route path="/students/:id" element={<DashboardLayout><StudentDetails /></DashboardLayout>} />
        <Route path="/about" element={<DashboardLayout><About /></DashboardLayout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;