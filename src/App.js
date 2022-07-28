import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Testimonials />
      <GetStarted />
    </div>
  );
}

export default App;
