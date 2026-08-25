import "./Features.css";

import FeatureCard from "../../common/FeatureCard/FeatureCard";

function Features() {
  return (
    <section className="features">

      <div className="features__container">

        <div className="features__header">

          <span className="features__eyebrow">
            EL RINCÓN MEXICANO
          </span>

          <h2 className="features__title">
            Una experiencia que comienza con el sabor
          </h2>

          <p className="features__description">
            En Aretacazos mezclamos sabores, tradición y cultura
            para crear una experiencia mexicana en Cali.
          </p>

        </div>

        <div className="features__grid">

          <FeatureCard
            icon="🌮"
            title="Sabor"
            description="Recetas llenas de sabor que te transportan directamente a México."
          />

          <FeatureCard
            icon="🔥"
            title="Tradición"
            description="Respetamos la esencia de la cocina mexicana y sus sabores."
          />

          <FeatureCard
            icon="🇲🇽"
            title="Cultura"
            description="Un espacio donde México y Cali se encuentran en cada plato."
          />

        </div>

      </div>

    </section>
  );
}

export default Features;