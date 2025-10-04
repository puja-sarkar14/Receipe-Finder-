import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const recipes = [
    { name: "Pasta", img: "/images/img1.jpeg" },
    { name: "Pizza", img: "/images/img5.jpeg" },
    { name: "Salad", img: "/images/img3.jpeg" },
    { name: "Soup", img: "/images/img4.jpeg" },
    { name: "Chicken", img: "/images/img6.webp" },
    { name: "Pulaav", img: "/images/img7.png" },
    { name: "Sweets", img: "/images/img8.webp" },
    { name: "Cake", img: "/images/img9.webp" },
    { name: "Rice", img: "/images/img10.png" },
    { name: "Chinese", img: "/images/img11.png" },
  ];

  return (
    <div className="home">
      <h1>🍲 Welcome to Recipe Finder</h1>
      <p>Discover delicious recipes and find your next favorite dish!</p>

      <div className="recipe-gallery">
        {recipes.map((recipe, index) => (
          <Link
            key={index}
            to={`/search?query=${recipe.name}`}
            className="recipe-card"
          >
            <img src={recipe.img} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
