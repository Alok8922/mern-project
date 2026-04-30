import Navbar from "../components/Navbar";

function StudentDashboard() {
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Student Dashboard</h2>

      <div style={{ padding: "20px" }}>
        <h3>Available Jobs</h3>

        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Software Developer</h4>
          <p>Company: ABC Tech</p>
          <p>Salary: 5 LPA</p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
