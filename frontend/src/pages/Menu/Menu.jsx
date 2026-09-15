import { useEffect, useState } from "react";

import "./Menu.css";

import logo from "../../assets/images/logo.2.jpg";

import MenuNavigation from "../../components/sections/MenuNavigation/MenuNavigation";
import MenuCard from "../../components/common/MenuCard/MenuCard";

import { getMenu } from "../../services/api";

function Menu() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadMenu = async () => {

      try {

        const data = await getMenu();

        setCategories(data);

      } catch (error) {

        console.error("Error cargando el menú:", error);

      } finally {

        setLoading(false);

      }

    };

    loadMenu();

  }, []);

  return (
    <main className="menu">

      <section className="menu__hero">

        <img
          src={logo}
          alt="Logo de Aretacazos"
          className="menu__logo"
        />

      </section>

      <MenuNavigation categories={categories} />

      

      {loading ? (

        <p>Cargando menú...</p>

      ) : (

        <section className="menu__content">

          {categories.map((category) => (

            <section
              key={category.id}
              id={category.name.toLowerCase().replace(/\s+/g, "-")}
              className="menu__category"
            >

              <div className="menu__products">

                {category.products.map((product) => (

                  <MenuCard
                    key={product.id}
                    {...product}
                  />

                ))}

              </div>

            </section>

          ))}

        </section>

      )}

    </main>
  );
}

export default Menu;