import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
