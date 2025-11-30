import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Feeding Hope
          </a>
        </div>
      </nav>

      <Hero />
      <div className="container">
        <About />
        <WhatWeDo />
        <Support />
      </div>

      <Footer />
    </>
  );
}

export default App;
