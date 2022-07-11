import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MealList from "./MealList";

const DietPlan = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5a4878f434a64d9c8c6c00dd2c89df80&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        // console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  useEffect(() => {
    startHandler();
  }, []);

  const startHandler = async () => {
    const check = localStorage.getItem("mealData");
    if (check) {
      setMealData(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=57fe449dd3ec49beb8f006880120c125&timeFrame=day&targetCalories=${2000}`
      );
      const data = await api.json();
      localStorage.setItem("mealData", JSON.stringify(data));
    }
  };
  return (
    <>
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </nav>
      <h1 className="recipe-heading">Diet Plan</h1>
      <form
        className="nutrition-detail-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="nutrition-detail-form-div">
          <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />
          <i className="fa-solid fa-magnifying-glass" onClick={getMealData}></i>
        </div>
      </form>
      {mealData && <MealList mealData={mealData} />}
    </>
  );
};

export default DietPlan;