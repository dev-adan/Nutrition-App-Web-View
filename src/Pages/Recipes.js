import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Recipes = () => {
  const [recipe,setRecipe]  = useState([]);
  const [keyword,setKeyword] = useState('');

  const [recipeFinalData,setRecipeFinalData] = useState({
    ingredients : '',
    measure : '',
    name : '',
  });


  useEffect(() => {

    setRecipeData();

  },[recipe])

  const setRecipeData = () => {

    let ingredients = [];
    let measure = [];
    let name = '';

    if(recipe.length >= 1){
      
    for(let i = 1;i <= 20;i++){
      name = recipe[0].strMeal
      ingredients.push(recipe[0][`${'strIngredient'}${i}`])
    }
     }
     if(recipe.length >= 1){
      for(let i = 1;i <= 20;i++){
        measure.push(recipe[0][`${'strMeasure'}${i}`])
      }
       }
  
       ingredients = ingredients.filter(e => e);
       measure = measure.filter(e => e);


       setRecipeFinalData({ingredients, measure,name})
  }

  


  const clickHandler = async () => {

    let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    const response = await axios(url);
    setRecipe([response.data.meals[0]]);
  }


  const startHandler = async () => {
   
    let url ='https://www.themealdb.com/api/json/v1/1/random.php'
    try{
      const response = await axios(url);
      setRecipe([response.data.meals[0]]);
    }catch(error){
      console.log(error)
    }
    
  }

  useEffect(() => {

    startHandler();

  },[])

  return (
    <div className='recipe'>
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-hand-point-left"></i>
        </Link>
      </nav>

      <h1 className="recipe-heading">
       Recipes
      </h1>

      <form className="nutrition-detail-form">
        <div className="nutrition-detail-form-div">
          <input
            type="text"
            placeholder="search item here"
             onChange={(e) => setKeyword(e.target.value)}/>
          <i className="fa-solid fa-magnifying-glass" onClick={clickHandler}></i>
        </div>
      </form>
    </div>
  )
}

export default Recipes