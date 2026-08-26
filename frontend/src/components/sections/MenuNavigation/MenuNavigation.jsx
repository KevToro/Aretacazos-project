import { useRef, useState, useEffect } from "react";
import "./MenuNavigation.css";

function MenuNavigation({ categories }) {
  const navigationRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {

    const element = navigationRef.current;

    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 0);

    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 1
    );
  };

  useEffect(() => {

    updateScrollButtons();

    const element = navigationRef.current;

    if (!element) return;

    element.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      element.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };

  }, [categories]);


  const scrollNavigation = (direction) => {

    const element = navigationRef.current;

    if (!element) return;

    const amount = 300;

    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });

  };


  return (
    <nav className="menu-navigation">

      {canScrollLeft && (
        <button
          className="menu-navigation__arrow menu-navigation__arrow--left"
          onClick={() => scrollNavigation("left")}
          aria-label="Categorías anteriores"
        >
          ‹
        </button>
      )}


      <div
        className="menu-navigation__scroll"
        ref={navigationRef}
      >

        {categories.map((category) => {

          const categoryId = category.name
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <a
              key={category.id}
              href={`#${categoryId}`}
            >
              {category.name}
            </a>
          );

        })}

      </div>


      {canScrollRight && (
        <button
          className="menu-navigation__arrow menu-navigation__arrow--right"
          onClick={() => scrollNavigation("right")}
          aria-label="Siguientes categorías"
        >
          ›
        </button>
      )}

    </nav>
  );
}

export default MenuNavigation;