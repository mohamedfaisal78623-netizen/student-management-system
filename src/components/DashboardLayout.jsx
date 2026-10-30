import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Navbar />

      <div className="main-section">
        <Sidebar />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;