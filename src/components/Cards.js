import React, { useState } from "react";
import Card from "./Card";
import CategoryListItem from "./CategoryListItem";

export default function Cards() {
  const [selected, setSelected] = useState("relax");

  const list = [
    { id: "relax", title: "Relax" },
    { id: "adventure", title: "Adventure" },
    { id: "culture", title: "Culture" },
    { id: "gastronomy", title: "Gastronomy" },
    { id: "all", title: "All" },
  ];

  return (
    <>
      <div className="cards">
        <h1 className="section-title">Our tours</h1>
        <ul className="card-categories">
          {list.map((item) => (
            <CategoryListItem
              title={item.title}
              active={selected === item.id}
              selected={selected}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="cards-items">
          {(selected === "culture" || selected === "all") && (
            <Card
              src="images/acropolis.jpeg"
              text="Visit the Acropolis"
              category="Culture"
              path="/"
            />
          )}
          {(selected === "culture" || selected === "all") && (
            <Card
              src="images/epidaurus.jpeg"
              text="Archeological 7-day-tour"
              category="Culture"
              path="/"
            />
          )}
          {(selected === "adventure" || selected === "all") && (
            <Card
              src="images/scuba2.jpg"
              text="Ship wreck diving"
              category="Adventure"
              path="/"
            />
          )}
          {(selected === "adventure" || selected === "all") && (
            <Card
              src="images/rafting.jpg"
              text="White water rafting in Lousios"
              category="Adventure"
              path="/"
            />
          )}
          {(selected === "gastronomy" || selected === "all") && (
            <Card
              src="images/wine.jpeg"
              text="Wine tasting in Aigio"
              category="Gastronomy"
              path="/"
            />
          )}
          {(selected === "gastronomy" || selected === "all") && (
            <Card
              src="images/greekfood.jpeg"
              text="Crete food tour"
              category="Gastronomy"
              path="/"
            />
          )}
          {(selected === "relax" || selected === "all") && (
            <Card
              src="images/beach.jpg"
              text="5-day beach trip to Kefalonia"
              category="Relax"
              path="/"
            />
          )}
          {(selected === "relax" || selected === "all") && (
            <Card
              src="images/zakynthos.jpeg"
              text="Luxury yacht trip"
              category="Relax"
              path="/"
            />
          )}
        </div>
      </div>
    </>
  );
}
