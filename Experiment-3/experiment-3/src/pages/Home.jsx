function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am a web developer specializing in React applications.
        This website showcases my work and projects.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  }
};

export default Home;
