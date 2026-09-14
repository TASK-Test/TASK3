import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        textAlign: "center",
        marginBottom: "20px",
        paddingBottom: "20px",
        borderBottom: "solid 2px var(--accent-border)",
      }}
    >
      <h1>RoadmapTracker</h1>
      <p style={{ color: "#bebebe" }}>track your tasks professionally</p>
      <Link style={{ textDecoration: "none", color: "var(--text)" }} to="/tasks">
        Tasks
      </Link>
    </header>
  );
};

export default Header;
