import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//fe8ac4afa3f34082a7278ad27d4a7466

let apiIdSearch =
  "https://api.spoonacular.com/food/ingredients/search?query=banana&number=1&apiKey=8185abcc1a004a5591ac618dd8fa9f5f";
let apiNutritionSearch =
  "https://api.spoonacular.com/food/ingredients/9266/information?amount=1&apiKey=8185abcc1a004a5591ac618dd8fa9f5f";

const NutiritionDetails = () => {
  const [keyword, setKeyword] = useState("");
  const [nutritionId, setNutritionId] = useState(null);
  const [nutritionFetched, setNutritionFetched] = useState([]);
  const [nutritionData, setNutritionData] = useState({
    calories: "",
    protein: "",
    carbs: "",
    sugar: "",
    fiber: "",
    fat: "",
  });

  useEffect(() => {
    fetchNutrition();
  }, [nutritionId]);

  useEffect(() => {
    setFetchedData();
  }, [nutritionFetched]);

  const setFetchedData = () => {
    if (nutritionFetched.length > 1) {
      setNutritionData({
        calories: nutritionFetched.filter((data) => data.name === "Calories")[0]
          .amount,
        protein: nutritionFetched.filter((data) => data.name === "Protein")[0]
          .amount,
        carbs: nutritionFetched.filter(
          (data) => data.name === "Net Carbohydrates"
        )[0].amount,
        sugar: nutritionFetched.filter((data) => data.name === "Sugar")[0]
          .amount,
        fiber: nutritionFetched.filter((data) => data.name === "Fiber")[0]
          .amount,
        fat: nutritionFetched.filter((data) => data.name === "Fat")[0].amount,
      });
    }
  };

  const fetchId = async () => {
    // const getIdUrl = `https://api.spoonacular.com/food/ingredients/search?query=${keyword}&number=1&apiKey=8185abcc1a004a5591ac618dd8fa9f5f`;
    // const getIdUrl = `https://api.spoonacular.com/food/ingredients/search?query=${keyword}&number=1&apiKey=fe8ac4afa3f34082a7278ad27d4a7466`;
    const getIdUrl = `https://api.spoonacular.com/food/ingredients/search?query=${keyword}&number=1&apiKey=b4ad5a804b5443f089c82913bee892e6`;
    try {
      const response = await axios(getIdUrl);
      setNutritionId(response.data.results[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNutrition = async () => {
    // const getNutritionUrl = `https://api.spoonacular.com/food/ingredients/${nutritionId}/information?amount=1&apiKey=8185abcc1a004a5591ac618dd8fa9f5f`;
    // const getNutritionUrl = `https://api.spoonacular.com/food/ingredients/${nutritionId}/information?amount=1&apiKey=fe8ac4afa3f34082a7278ad27d4a7466`;
    const getNutritionUrl = `https://api.spoonacular.com/food/ingredients/${nutritionId}/information?amount=1&apiKey=b4ad5a804b5443f089c82913bee892e6&unit=serving`;
    // const getNutritionUrl = `https://api.spoonacular.com/food/ingredients/${nutritionId}/information?apiKey=b4ad5a804b5443f089c82913bee892e6`;

    try {
      const response = await axios(getNutritionUrl);
      setNutritionFetched(response.data.nutrition.nutrients);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nutrition-details-page">
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </nav>

      <h1 className="nutrition-details-heading">
        Nutrition Details{" "}
        <span className="nutrition-details-heading-span">(Per serving)</span>
      </h1>

      <form
        className="nutrition-detail-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="nutrition-detail-form-div">
          <input
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="search item here"
          />
          <i className="fa-solid fa-magnifying-glass" onClick={fetchId}></i>
        </div>
      </form>

      <div className="nutrition-details-page-nutrition-information">
        <ul>
          {/* <li><i className="fa-solid fa-arrow-right"></i> Carbs: {nutritionData.calories} kcal</li> */}
          <li>
            <i className="fa-solid fa-battery-three-quarters"></i>{" "}
            {nutritionData.calories
              ? `Calories ${nutritionData.calories} kcal`
              : "calories"}
          </li>
          <li>
            <i className="fa-solid fa-dna"></i>{" "}
            {nutritionData.protein
              ? `Protein ${nutritionData.protein} gram`
              : "proteins"}
          </li>
          <li>
            <i className="fa-solid fa-fire"></i>{" "}
            {nutritionData.carbs
              ? `Carbs ${nutritionData.carbs} gram`
              : "carbs"}
          </li>
          <li>
            <i className="fa-solid fa-cubes-stacked"></i>{" "}
            {nutritionData.sugar
              ? `Sugar ${nutritionData.sugar} gram`
              : "sugar"}
          </li>
          <li>
            <i className="fa-solid fa-cannabis"></i>{" "}
            {nutritionData.fiber
              ? `Fiber ${nutritionData.fiber} gram`
              : "fiber"}
          </li>
          <li>
            <i className="fa-solid fa-bottle-droplet"></i>{" "}
            {nutritionData.fat ? `Fat ${nutritionData.fat} gram` : "fat"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NutiritionDetails;
