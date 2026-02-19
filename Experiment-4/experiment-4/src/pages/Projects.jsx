function Projects() {
  return (
    <div style={styles.container}>
      <h1>My Projects</h1>

      <div style={styles.card}>
        <h3>Portfolio Website</h3>
        <p>A personal portfolio built using React and React Router.</p>
      </div>

      <div style={styles.card}>
        <h3>Dashboard UI</h3>
        <p>A responsive dashboard with charts and analytics.</p>
      </div>

      <div style={styles.card}>
        <h3>Landing Page</h3>
        <p>A modern product landing page with clean UI.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
 card: {
  backgroundColor: "rgba(200,200,200,0.1)",
  padding: "20px",
  marginBottom: "15px",
  borderRadius: "8px"
}
};

export default Projects;
