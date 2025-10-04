import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><b>Category:</b> {recipe.strCategory}</p>
      <p><b>Area:</b> {recipe.strArea}</p>
      <p><b>Instructions:</b> {recipe.strInstructions}</p>
      <a href={recipe.strSource} target="_blank" rel="noreferrer">Read More</a>
    </div>

  );
}
