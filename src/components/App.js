import Navbar from "./Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import Cards from "./Cards";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
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
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
