import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Recipes = () => {
  const [recipe, setRecipe] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [recipeFinalData, setRecipeFinalData] = useState([
    {
      ingredients : [],
      measure : [],
      name : '',
      instruction :'',
      image : '',
    }
  ]);

  useEffect(() => {
    setRecipeData();
  }, [recipe]);

  const setRecipeData = () => {
    let ingredients = [];
    let measure = [];
    let name = "";
    let instructions = '';
    let image = '';

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

    measure = measure.filter(function(entry) { return entry.trim() != ''; });
    ingredients = ingredients.filter(function(entry) { return entry.trim() != ''; });

    setRecipeFinalData([{ ingredients, measure, name,instructions , image}]);

    console.log(recipeFinalData);
  };

  const clickHandler = async () => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    const response = await axios(url);
    setRecipe([response.data.meals[0]]);
  };

  const startHandler = async () => {
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    try {
      const response = await axios(url);
      setRecipe([response.data.meals[0]]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    startHandler();
  }, []);

  return (
    <div className="recipe">
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-hand-point-left"></i>
        </Link>
      </nav>

      <h1 className="recipe-heading">Recipes</h1>

      <form className="nutrition-detail-form">
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

      <div className="recipe-card">
        <h1 className="recipe-card-name">
          Recipe:{" "}
          <span className="recipe-card-name-span">
            {recipeFinalData.length >= 1
              ? recipeFinalData[0].name
              : "search..."}
          </span>
        </h1>
        <div className='recipe-image-container'>
              < img src={recipeFinalData[0].image} alt></img>
        </div>
    
        <hr />
        <br />
        <h2 className="recipe-card-ingredients">Ingredients & quantity</h2>

        <div class='recipe-ingredients-list'>

          <div>
             {recipeFinalData[0].ingredients.map((data) => {
             return <li><i class="fa-solid fa-champagne-glasses"></i> {data}</li>
          })}
          </div>
          <div>
             {recipeFinalData[0].measure.map((data) => {
            return <li>{data}</li>
          })}
          </div>
         

         
        </div>
        <div className='instructions-div'>
          <h1 className='instruction-div-heading'><i class="fa-solid fa-map"></i> Instructions</h1>
        <p className="recipe-instructions">
            {recipeFinalData.length >= 1
              ? recipeFinalData[0].instructions
              : "search..."}
        </p>
        </div>
      </div>

      
    </div>
  );
};

export default Recipes;
