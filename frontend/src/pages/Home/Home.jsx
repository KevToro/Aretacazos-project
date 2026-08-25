import "./Home.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/sections/Hero/Hero";
import Features from "../../components/sections/Features/Features";
import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <>
    
        <Navbar />
        <main className="home"> 
          <img src={logo} alt="Logo de Aretacazos" className="home__logo-bg" /> 
        <Hero />
        <Features />
    </main>
    </>
  );
}

export default Home;