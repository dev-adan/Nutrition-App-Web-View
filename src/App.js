import "./App.css";
import { ReactDOM } from "react";
import { Routes, Route, Link } from "react-router-dom";

import HomeScreen from "./Pages/HomeScreen";
import DietPlan from "./Pages/DietPlan";
import Ideas from "./Pages/Ideas";
import NutiritionDetails from "./Pages/NutiritionDetails";
import Recipes from "./Pages/Recipes";
import Video from "./Pages/Video";
import RecipeForm from "./Pages/RecipeForm";
import UploadedRecipes from "./Pages/UploadedRecipes";

function App() {
  return (
    <div>
      {/* <nav className='userSelectionScreen-username'>
    <i class="fa-solid fa-user"></i><span>username</span> */}

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dietplan" element={<DietPlan />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/nutrition-details" element={<NutiritionDetails />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/recipe/form" element={<RecipeForm />} />
        <Route path="/recipe/uploadedrecipes" element={<UploadedRecipes />} />
      </Routes>

      {/* </nav>

    <main className='userSelectionScreen-navigations'>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/dietplan'>DietPlan</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/ideas'>Ideas</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/nutrition-details'>Nutrition Details</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/recipes'>Recipes</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/video'>Videos</Link>
    </main> */}
    </div>
  );
}

export default App;
