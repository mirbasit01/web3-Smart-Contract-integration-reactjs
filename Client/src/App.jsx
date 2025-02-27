import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="screen-size">
        <Navbar />
        <Home />
      </div>
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
