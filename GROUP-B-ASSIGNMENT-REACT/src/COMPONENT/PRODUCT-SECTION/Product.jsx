import React from "react";
import "./Product.css";
import PepsiVanillaCream from "../../assets/Pepsi-Vanilla-Cream.png";
import PepsiZeroVanillaCream from "../../assets/Pepsi-Zero-Sugar-Vanilla-Cream.png";
import PepsiZeroSugar from "../../assets/Pepsi-Zero-Sugar.png";
import Pepsi from "../../assets/Pepsi.png";
import DietPepsi from "../../assets/Diet-Pepsi.png";
import PepsiWildCherry from "../../assets/Pepsi-Wild-Cherry.png";
import PepsiZeroWildCherry from "../../assets/Pepsi-Zero-Sugar-Wild-Cherry.png";
import DietPepsiWildCherry from "../../assets/Diet-Pepsi-Wild-Cherry.png";
const products = [
  {
id: 1,
    name: "Pepsi Vanilla & Cream",
    tagline: "HOLIDAY DESSERT MEETS PEPSI TASTE",
    image: PepsiVanillaCream,
  },
  {
    id: 2,
    name: "Pepsi Zero Sugar Vanilla & Cream",
    tagline: "ALL THE HOLIDAY DESSERT, ZERO SUGAR",
    image: PepsiZeroVanillaCream,
  },
  {
    id: 3,
    name: "Pepsi Zero Sugar",
    tagline: "ZERO SUGAR, ALL THE PEPSI TASTE",
    image: PepsiZeroSugar,
  
  },
  {
    id: 4,
    name: "Pepsi",
    tagline: "MOMENTS WORTH SAVORING",
    image: Pepsi,
  },
  {
    id: 5,
    name: "Diet Pepsi",
    tagline: "ZERO CALORIES, FULL REFRESHMENT",
    image: DietPepsi,
  },
  {
    id: 6,
    name: "Pepsi Wild Cherry",
    tagline: "PEPSI TASTE WITH A WILD CHERRY TWIST",
    image: PepsiWildCherry,
  },
  {
    id: 7,
    name: "Pepsi Zero Sugar Wild Cherry",
    tagline: "BIG CHERRY FLAVOR WITH ZERO SUGAR",
    image: PepsiZeroWildCherry,
  },
  {
    id: 8,
    name: "Diet Pepsi Wild Cherry",
    tagline: "CRISP CHERRY FLAVOR, ZERO CALORIES",
    image: DietPepsiWildCherry,
  },
];

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="products-heading">
        

        <h2>
          OUR <span>PRODUCTS</span>
        </h2>

       
      </div>

  

<div className="products-slider">
  <button
    className="slider-btn prev-btn"
    onClick={() => {
      document.querySelector(".products-track").scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }}
    aria-label="Previous products"
  >
    &#10094;
  </button>

  <div className="products-track">
    {products.map((product) => (
      <article className="product-card" key={product.id}>
        <div
          className="product-image"
          style={{ backgroundColor: product.color || "#f5f5f5" }}
        >
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>

          <a
            href={product.link || "https://www.pepsi.com/products"}
            target="_blank"
            rel="noreferrer"
          >
            Find Out More <span>↗</span>
          </a>
        </div>
      </article>
    ))}
  </div>

  <button
    className="slider-btn next-btn"
    onClick={() => {
      document.querySelector(".products-track").scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }}
    aria-label="Next products"
  >
    &#10095;
  </button>
</div>

      <div className="products-footer">
        <a
          href="https://www.pepsi.com/products"
          target="_blank"
          rel="noreferrer"
          className="all-products-button"
        >
          Explore All Products <span>↗</span>
        </a>
      </div>
    </section>
  );
};

export default Products;