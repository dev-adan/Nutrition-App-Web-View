import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

const UploadedRecipes = () => {

  const [recipe,setRecipe] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([])
 

  useEffect(() => {

    const localStorageData = JSON.parse(window.localStorage.getItem('recipes'));
    setRecipe(localStorageData)
  },[])

  useEffect(() => {
    let ingredientsList = [];

   if(recipe !== undefined){

    for(let i = 0; i< recipe.length;i++){
      if(recipe[i].ingredients !== undefined){
        ingredientsList.push(recipe[i].ingredients.split(','))
      }
    }
   }

setRecipeIngredients(ingredientsList)
    

  },[recipe])


    return (
      <div>
           <nav className="NutritionScreen-btn">
            <Link to="/" className="go-back-btn">
              <i className="fa-solid fa-hand-point-left"> Go Back</i>
            </Link>
          </nav>
  
          <h3>YOUR UPLOADED RECIPEES</h3>
  
          <div className='uploaded-recipees'>
  
            {recipe.map( (r,i) => {
              return <div key={i} className='single-recipe'>
                <h3 className='single-recipe-name'>Recipe Name: {r.name}</h3>
                <div className='single-recipe-image-container'>
                  <img key={Date.now()} src={r.photo} alt='image'  className='single-recipe-image'/>
                </div>
                
                <hr/>
                <br/>
                <p>Ingredients</p>
                <h4>{r.ingredients}</h4>
                {/* <hr/> */}
                <p >Instructions</p>
                <h4 className='single-recipe-instructions'>{r.instructions}</h4>
              
              </div>
            })}
  
  
          </div>
      </div>
    )
}

export default UploadedRecipes