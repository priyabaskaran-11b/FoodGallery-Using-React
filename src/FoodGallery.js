import "./App.css";

import pizza from "./images/pizza.jpeg";
import burger from "./images/burger.jpeg";
import biryani from "./images/biryani.jpeg";
import dosa from "./images/dosa.jpeg";
import cake from "./images/cake.jpeg";
import icecream from "./images/icecream.jpeg";
import sandwich from "./images/sandwich.jpeg";
import fries from "./images/fries.jpeg";

function FoodGallery() {
  const foods = [
    { name: "Pizza", image: pizza },
    { name: "Burger", image: burger },
    { name: "Biryani", image: biryani },
    { name: "Dosa", image: dosa },
    { name: "Cake", image: cake },
    { name: "Ice Cream", image: icecream },
    { name: "Sandwich", image: sandwich },
    { name: "French Fries", image: fries },
  ];

  return (
    <div>
      <h1 className="title">Food Gallery</h1>

      <div className="gallery-container">
        <div className="food-grid">
          {foods.map((food, index) => (
            <div className="food-card" key={index}>
              <img src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodGallery;