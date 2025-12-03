import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>

      {/* Responsive Grid */}
      <div className="
        grid gap-8 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        xl:grid-cols-4
      ">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="
              bg-white shadow-md rounded-xl overflow-hidden 
              transition transform hover:scale-105 hover:shadow-xl
            "
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
