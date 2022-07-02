import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function IdeaCard({ idea }) {
  return (
    <div className="card">
      <div className="card-content">
        <FontAwesomeIcon
          className="bulb-icon"
          icon={faLightbulb}
        ></FontAwesomeIcon>
        <p className="card--desc">{idea}</p>
      </div>
    </div>
  );
}
