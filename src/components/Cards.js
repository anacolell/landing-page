import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <>
      <div className="cards">
        <h1 className="cards-page-title">Lorem ipsum</h1>
        <div className="cards-wrapper">
          <ul className="card-items">
            <Card
              src="images/acropolis.jpeg"
              text="Visit the Acropolis"
              category="Culture"
              path="/"
            />
            <Card
              src="images/scuba diving.jpeg"
              text="Ship wreck diving"
              category="Adventure"
              path="/"
            />
            <Card
              src="images/wine.jpeg"
              text="Wine tasting in Aigio"
              category="Gastronomy"
              path="/"
            />
            <Card
              src="images/greekfood.jpeg"
              text="Crete food tour"
              category="Gastronomy"
              path="/"
            />
            <Card
              src="images/beach.jpg"
              text="5-day beach trip to Kefalonia"
              category="Relax"
              path="/"
            />
            <h4>See more</h4>
          </ul>
        </div>
      </div>
    </>
  );
}
