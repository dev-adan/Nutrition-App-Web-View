import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const UploadedIdeas = () => {
    const [recipe,setRecipe] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([])
   
  
    useEffect(() => {
  

      const localStorageData = JSON.parse(window.localStorage.getItem('ideas'));
      setRecipe(localStorageData)

    },[])
  
//     useEffect(() => {
//       let ingredientsList = [];
  
//      if(recipe !== undefined){
  
//       for(let i = 0; i< recipe.length;i++){
//         if(recipe[i].ingredients !== undefined){
//           ingredientsList.push(recipe[i].ingredients.split(','))
//         }
//       }
//      }
  
//   setRecipeIngredients(ingredientsList)
      
  
//     },[recipe])
  
  
      return (
        <div>
             <nav className="NutritionScreen-btn">
              <Link to="/" className="go-back-btn">
                <i className="fa-solid fa-hand-point-left"> Go Back</i>
              </Link>
            </nav>
    
            <h3>YOUR UPLOADED Ideas</h3>
    
            <div className='uploaded-recipees'>
    
              {recipe ? recipe.map( (r,i) => {
                return <div key={i} className='single-recipe'>
                  <h3 className='single-recipe-name'>Name: {r.name}</h3>
                  <hr/>
                  <p>Idea</p>
                  <h2>{r.idea}</h2>
                </div>
              }) : null}
    
    
            </div>
        </div>
      )
}

export default UploadedIdeas