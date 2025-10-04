import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchRecipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const search = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals || []));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Search Recipes</h2>
      <form onSubmit={search} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter recipe name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
