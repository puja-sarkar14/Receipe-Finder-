import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import RecipeDetails from "./Components/ReceipeDetails";
import SearchRecipes from "./Components/SearchReceipe";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#0077ff" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/search" style={{ color: "white" }}>Search Recipes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRecipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}
