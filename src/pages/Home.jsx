import React from "react";
import "./Home.css";

function Home() {
  const stats = [
    { title: "Total Students", count: 120, icon: "👨‍🎓" },
    { title: "Male Students", count: 65, icon: "👨" },
    { title: "Female Students", count: 55, icon: "👩" },
    { title: "Departments", count: 5, icon: "🏢" }
  ];

  const recentStudents = [
    { id: "101", name: "Arun Kumar", department: "AIDS", year: "2nd Year" },
    { id: "102", name: "Priya", department: "CSE", year: "1st Year" },
    { id: "103", name: "Rahul", department: "IT", year: "3rd Year" }
  ];

  return (
    <div className="home-dashboard">

      <h2>Dashboard Overview</h2>
      <p>Welcome to Student Management System!</p>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <span className="stat-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <h2>{item.count}</h2>
          </div>
        ))}
      </div>

      <div className="recent-section">
        <h2>Recent Students</h2>

        <table>
          <thead>
            <tr>
              <th>Register No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            {recentStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Home;