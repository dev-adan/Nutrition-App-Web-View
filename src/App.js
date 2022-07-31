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
import UploadIdea from "./Pages/UploadIdea";
import UploadedIdeas from "./Pages/UploadedIdeas";
import Error from "./Pages/Error";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dietplan" element={<DietPlan />} />
        {/* <Route path="/dietplan2" element={<DietPlan />} /> */}
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/nutrition-details" element={<NutiritionDetails />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/recipe/form" element={<RecipeForm />} />
        <Route path="/recipe/uploadedrecipes" element={<UploadedRecipes />} />
        <Route path="/idea/uploadform" element={<UploadIdea />} />
        <Route path="/idea/uploadedideas" element={<UploadedIdeas />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
