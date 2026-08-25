import "./Hero.css";
import logo from "../../../assets/images/logo.png";


function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__content">

          <span className="hero__eyebrow">
            EL RINCÓN MEXICANO
          </span>

          <h1 className="hero__title">
            Sabores que unen culturas
          </h1>

          <p className="hero__description">
            Vive una experiencia llena de sabor, tradición
            y auténtica esencia mexicana.
          </p>

          <div className="hero__actions">
            <a href="#menu" className="hero__button hero__button--primary">
              Ver menú
            </a>

            <a href="#registro" className="hero__button hero__button--secondary">
              Registrarme
            </a>
          </div>

        </div>

        
    

      </div>
    </section>
  );
}

export default Hero;