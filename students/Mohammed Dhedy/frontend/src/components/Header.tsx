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
    </header>
  );
};

export default Header;
