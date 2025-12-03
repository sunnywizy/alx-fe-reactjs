import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === Number(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.log("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-xl">Loading recipe...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-xl mb-6 shadow-md"
      />

      {/* Summary */}
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
