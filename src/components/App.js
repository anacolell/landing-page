import Navbar from "./Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import Cards from "./Cards";
import Services from "./Services";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

import "../css/app.css";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Cards />
      <Services />
      <Destinations />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
