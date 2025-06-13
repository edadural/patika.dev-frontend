import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
