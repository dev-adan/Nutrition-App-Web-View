import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="userSelectionScreen">
      <nav className="userSelectionScreen-username">
        <i className="fa-solid fa-user"></i>
        <span>Logged In</span>
      </nav>
      <main className="userSelectionScreen-navigations">
        <Link
          className="userSelectionScreen-navigations-navigation-links"
          to="/dietplan"
        >
          <i class="fa-solid fa-dumbbell"></i> DietPlan
        </Link>
        <Link
          className="userSelectionScreen-navigations-navigation-links"
          to="/ideas"
        >
          <i class="fa-solid fa-lightbulb"></i> Ideas
        </Link>
        <Link
          className="userSelectionScreen-navigations-navigation-links"
          to="/nutrition-details"
        >
          <i class="fa-solid fa-chart-simple"></i> Nutrition Details
        </Link>
        <Link
          className="userSelectionScreen-navigations-navigation-links"
          to="/recipes"
        >
          <i class="fa-solid fa-book"></i> Recipes
        </Link>
        <Link
          className="userSelectionScreen-navigations-navigation-links"
          to="/video"
        >
          <i class="fa-solid fa-play"></i> Videos
        </Link>
      </main>
    </div>
  );
};

export default HomeScreen;
