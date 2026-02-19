function CardComponent({ title, description }) {
  return (
    <div style={{
      background: "#f4f4f4",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "15px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CardComponent;
