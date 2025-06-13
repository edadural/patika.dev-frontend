import { AiFillGithub } from "react-icons/ai";

function Footer() {
  const footerStyle = {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    fontSize: "0.9em",
    borderRadius: "5px",
  };

  const linkStyle = {
    color: "white",
    fontSize: "2.5em",
  };

  return (
    <footer style={footerStyle}>
      <a
        href="https://github.com/edadural"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <AiFillGithub />
      </a>
      <p>Copyright &copy; 2025 - Eda DURAL</p>
    </footer>
  );
}

export default Footer;
