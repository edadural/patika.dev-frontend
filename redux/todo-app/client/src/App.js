import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>

      <Footer />
    </>
  );
}

export default App;
