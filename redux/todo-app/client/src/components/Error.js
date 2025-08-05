function Error({ message }) {
  return (
    <div
      style={{ color: "red", fontSize: 16, padding: 15, fontWeight: "bold" }}
    >
      Error: {message}
    </div>
  );
}

export default Error;
