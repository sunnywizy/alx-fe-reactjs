const AddRecipeForm = ({ setRecipes }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").filter((i) => i.trim()).length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(), // temporary unique ID
      title,
      summary: steps.slice(0, 100) + "...", // short summary for HomePage
      ingredients: ingredients.split("\n"),
      steps,
      image: "https://via.placeholder.com/150", // placeholder image
    };

    // Add to shared state
    setRecipes((prev) => [...prev, newRecipe]);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded-md"
          />
          {errors.title && (
            <p className="text-red-500 mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border p-2 rounded-md h-28"
            placeholder="One ingredient per line"
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border p-2 rounded-md h-32"
          />
          {errors.steps && (
            <p className="text-red-500 mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
