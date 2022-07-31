import SearchIdeas from "./searchIdea";
import { Link } from "react-router-dom";

function Ideas() {


  return (
    <div className="container">
      <nav className="NutritionScreen-btn">
        <Link to="/" className="go-back-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </nav>

      <div className="recipe-upload-button-container">
        <Link to="/idea/uploadform" className="recipe-upload-button">
          Upload your Idea
        </Link>
      </div>

      <h1 className="title">Ideas</h1>
      <SearchIdeas />
    </div>
  );
}

export default Ideas;
