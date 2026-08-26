import "./MenuCard.css";

function MenuCard({
  name,
  description,
  price,
  image_url,
  product_variants = [],
}) {

  console.log("PRODUCTO:", {
    name,
    price,
    product_variants,
  });

  return (
    <article className="menu-card">

      <div className="menu-card__image">

        {image_url ? (
          <img
            src={image_url}
            alt={name}
          />
        ) : (
          <div className="menu-card__image-placeholder">
            Aretacazos
          </div>
        )}

      </div>

      <div className="menu-card__content">

        <div className="menu-card__info">

          <h3>{name}</h3>

          <p>{description}</p>

        </div>

        {product_variants.length > 0 ? (

          <div className="menu-card__variants">

            {product_variants.map((variant) => (

              <div
                key={variant.id}
                className="menu-card__variant"
              >

                <span className="menu-card__variant-name">
                  {variant.name}
                </span>

                <span className="menu-card__variant-price">
                  ${Number(variant.price).toLocaleString("es-CO")}
                </span>

              </div>

            ))}

          </div>

        ) : (

          <span className="menu-card__price">
            ${Number(price).toLocaleString("es-CO")}
          </span>

        )}

      </div>

    </article>
  );
}

export default MenuCard;