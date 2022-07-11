import React, { useState, useEffect } from "react";
import MealList from "./MealList";

const DietPlan = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
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

  const startHandler = async () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${2000}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        // console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    startHandler();
  }, []);

  return (
    <>
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
