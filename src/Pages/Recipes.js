import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import grocery from "../grocery.png";
const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [recipeFinalData, setRecipeFinalData] = useState([
    {
      ingredients: [],
      measure: [],
      name: "",
      instruction: "",
      image: "",
    },
  ]);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setRecipeData();
  }, [recipe]);

  const setRecipeData = () => {
    let ingredients = [];
    let measure = [];
    let name = "";
    let instructions = "";
    let image = "";

    if (recipe.length >= 1) {
      for (let i = 1; i <= 20; i++) {
        name = recipe[0].strMeal;
        ingredients.push(recipe[0][`${"strIngredient"}${i}`]);
      }
    }
    if (recipe.length >= 1) {
      instructions = recipe[0].strInstructions;
      image = recipe[0].strMealThumb;
      for (let i = 1; i <= 20; i++) {
        measure.push(recipe[0][`${"strMeasure"}${i}`]);
      }
    }

    ingredients = ingredients.filter((e) => e);
    measure = measure.filter((e) => e);

    measure = measure.filter(function (entry) {
      return entry.trim() != "";
    });
    ingredients = ingredients.filter(function (entry) {
      return entry.trim() != "";
    });

    setRecipeFinalData([{ ingredients, measure, name, instructions, image }]);

    console.log(recipeFinalData);
  };

  const clickHandler = async () => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    setLoader(true);

    try {
      const response = await axios(url);
      setRecipe([response.data.meals[0]]);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const startHandler = async () => {
    setLoader(true);
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    try {
      const response = await axios(url);
      setRecipe([response.data.meals[0]]);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    startHandler();
  }, []);

  return (
    <div className="recipe">
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </nav>

      <div className="recipe-upload-button-container">
        <Link to="/recipe/form" className="recipe-upload-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
          </svg>
        </Link>
      </div>
      <br />

      <h1 className="recipe-heading">Recipes</h1>
      <form
        className="nutrition-detail-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="nutrition-detail-form-div">
          <input
            type="text"
            placeholder="search item here"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={clickHandler}
          ></i>
        </div>
      </form>

      {!loader ? (
        <div className="recipe-card">
          <h1 className="recipe-card-name">
            Recipe:{" "}
            <span className="recipe-card-name-span">
              {recipeFinalData.length >= 1
                ? recipeFinalData[0].name
                : "search..."}
            </span>
          </h1>
          <div className="recipe-image-container">
            <img src={recipeFinalData[0].image} alt></img>
          </div>

          <hr />
          <br />
          <h2 className="recipe-card-ingredients">Ingredients & quantity</h2>

          <div class="recipe-ingredients-list">
            <div>
              {recipeFinalData[0].ingredients.map((data) => {
                return (
                  <li>
                    <img src={grocery} className="grocery" /> {data}
                  </li>
                );
              })}
            </div>
            <div>
              {recipeFinalData[0].measure.map((data) => {
                return <li>{data.substring(0, 17)} </li>;
              })}
            </div>
          </div>
          <div className="instructions-div">
            <h1 className="instruction-div-heading">
              <i class="fa-solid fa-map"></i> Instructions
            </h1>
            <p className="recipe-instructions">
              {recipeFinalData.length >= 1
                ? recipeFinalData[0].instructions
                : "search..."}
            </p>
          </div>
        </div>
      ) : (
        <div className="loader-center" style={{ marginTop: "4rem" }}>
          <Bars
            height="150"
            width="190"
            ariaLabel="loading"
            color="#fa7d19 
          "
          />
        </div>
      )}
    </div>
  );
};

export default Recipes;
