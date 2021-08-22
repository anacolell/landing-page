import React from "react";

export default function Destination() {
  return (
    <div
      className="panel panel-active"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1570303349335-44d8488db678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8emFreW50aG9zfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
      }}
    >
      <h3>Ionian</h3>
      <div className="destination-overlay">
        <ul className="destinations-city-list">
          <li>Zakynthos</li>
          <li>Ithaca</li>
          <li>Corfu</li>
          <li>Kefalonia</li>
          <li>Lefkada</li>
          <li>Paxi</li>
          <li>Kythera</li>
          <li>Antipaxoi</li>
        </ul>
      </div>
    </div>
  );
}
