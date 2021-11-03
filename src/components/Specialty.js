import react from "react";
import patternDivide from "../images/patterns/pattern-divide.svg";
import salmon from "../images/homepage/salmon-mobile.jpg";
import { useGlobalContext } from "../context";
import { getUniqueValues } from "../ultils/helpers";
// in the foodMenu, get items which has specialty property
export const Specialty = () => {
  const { featured_products,all_products } = useGlobalContext();
  const categories = getUniqueValues(all_products,'category');
  console.log(`my categories`,categories)
  return (
    <section className="specialty">
      <header className="specialty-text">
        <div className="line">
          <img src={patternDivide} alt="divide line" />
        </div>
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </header>
      <div className="specialty-dishes-container">
        {/* single dishe */}
        {featured_products.map((product) => {
          const { id, image, name, description } = product;
          return (
            <article key={id} className="dish">
              <div className="dish-image">
                <img src={image} alt="salmon dishes" />
              </div>
              <div className="dish-info">
                <h3 className="title">{name}</h3>
                <p className="description">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Specialty;
