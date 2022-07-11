import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getImageUrl();
  }, []);

  const getImageUrl = async () => {
    const check = localStorage.getItem("imageUrl");
    if (check) {
      setImageUrl(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c89bdd4b9e564461bb6493c283f9b519&includeNutrition=false`
      );
      const data = await api.json();
      localStorage.setItem("imageUrl", JSON.stringify(data.image));
    }
  };

  return (
    <div className="meal-card">
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
    </div>
  );
}