import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <div className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)} kcal</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}g</li>
          <li>Fat: {nutrients.fat.toFixed(0)}g</li>
          <li>Protein: {nutrients.protein.toFixed(0)}g</li>
        </ul>
      </div>

      <div className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </main>
  );
}