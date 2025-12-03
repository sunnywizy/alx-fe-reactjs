import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log("Error loading data:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage recipes={recipes} />}
        />
        <Route
          path="/add"
          element={<AddRecipeForm setRecipes={setRecipes} />}
        />
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
