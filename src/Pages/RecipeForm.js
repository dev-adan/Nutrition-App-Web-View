import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const RecipeForm = () => {
  let navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    photo: null,
  });

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setData([recipe, ...data]);

    setRecipe({ name: "", ingredients: "", instructions: "", photo: null });

    e.preventDefault();
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 6000);

    setTimeout(() => {
      navigate("../recipe/uploadedrecipes", { replace: true });
    }, 5000);
  };

  useEffect(() => {
    if (data.length <= 0) {
      return;
    } else {
      localStorage.setItem("recipes", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const localStorageData = JSON.parse(window.localStorage.getItem("recipes"));

    if (localStorageData) {
      setData(localStorageData);
    }
  }, []);

  const handleUpload = (e) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setRecipe({ ...recipe, photo: reader.result });
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  if (loader) {
    return (
      <div className="loader-center">
        <BallTriangle
          height="150"
          width="190"
          ariaLabel="loading"
          color="#0000FF"
        />
        <p className="loader-uploading">Uploading...</p>
      </div>
    );
  } else {
    return (
      <div className="recipeform-form-container">
        <nav className="NutritionScreen-btn">
          <Link to="/recipes" className="go-back-btn">
            <i className="fa-solid fa-hand-point-left"> Go Back</i>
          </Link>

          {data.length >= 1 ? (
            <div className="recipe-upload-button-container">
              <Link
                to="/recipe/uploadedrecipes"
                className="recipe-upload-button"
              >
                View Upload Recipees
              </Link>
            </div>
          ) : null}
        </nav>

        <h1>ENTER YOUR RECIPE </h1>

        <form onSubmit={submitHandler} className="recipeform-form">
          <p className="recipeform-form-p">
            Fill your recipe instructions in this form
          </p>

          <label htmlFor="name">Enter Recipe Name</label>
          <input
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            placeholder="Enter name of a recipe"
            type="text"
            id="name"
            name="name"
          ></input>
          <hr />
          <label htmlFor="ingredients">
            Enter Ingredients & qty (add comma after qty){" "}
          </label>
          <textarea
            onChange={(e) =>
              setRecipe({ ...recipe, ingredients: e.target.value })
            }
            placeholder="sugar 1tbps, oil 2 spoons,"
            id="ingredients"
            name="ingredients"
            className="recipe-form-textarea"
          ></textarea>
          <hr />
          <label htmlFor="instructions">Enter Instructions</label>
          <textarea
            onChange={(e) =>
              setRecipe({ ...recipe, instructions: e.target.value })
            }
            placeholder="Enter your recipee here"
            id="instructions"
            name="instructions"
            className="recipe-form-textarea"
          ></textarea>

          <hr />
          <label htmlFor="image">Upload your Image</label>
          {/* <input onChange={(e) => setRecipe({...recipe,photo :URL.createObjectURL(e.target.files[0])})} className='recipeform-fileupload' type='file' id='image' name='image'/> */}
          <input
            onChange={handleUpload}
            className="recipeform-fileupload"
            type="file"
            id="image"
            name="image"
          />
          <img className="recipeform-form-image" src={recipe.photo} alt="" />

          <button
            disabled={
              !recipe.name ||
              !recipe.instructions ||
              !recipe.ingredients ||
              !recipe.photo
            }
            className="recipeform-submitbtn"
            type="submit"
          >
            <i className="fa-solid fa-cloud-arrow-up"></i> Upload Data
          </button>
        </form>
      </div>
    );
  }
};

export default RecipeForm;
