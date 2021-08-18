import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="card-items">
            <Card
              src="images/acropolis.jpeg"
              text="Visit the Acropolis"
              category="Culture"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
