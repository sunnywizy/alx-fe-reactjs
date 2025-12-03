import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === Number(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.log("Error:", err));
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-12 text-xl">Loading recipe...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline text-lg"
      >
        ← Back to Recipes
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.title}</h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
      />

      {/* Summary */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {recipe.summary}
      </p>

      {/* Ingredients Card */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Ingredients
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions Card */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Instructions
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
