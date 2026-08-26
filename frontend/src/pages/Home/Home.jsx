import "./Home.css";


import Hero from "../../components/sections/Hero/Hero";
import Features from "../../components/sections/Features/Features";
import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <>
        <main className="home"> 
          <img src={logo} alt="Logo de Aretacazos" className="home__logo-bg" /> 
        <Hero />
        <Features />
    </main>
    </>
  );
}

export default Home;