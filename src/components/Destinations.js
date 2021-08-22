import React from "react";

export default function Destinations() {
  return (
    <div className="destinations-wrapper">
      <h1 className="section-title">Our destinations</h1>
      <div className="destination-cards-wrapper">
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
        <div
          className="panel"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1573314105564-45cee6ea07ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')`,
          }}
        >
          <h3>Peloponnese</h3>
          <div className="destination-overlay">
            <ul className="destinations-city-list">
              <li>Elafonisos</li>
              <li>Methana</li>
              <li>Monemvasia</li>
              <li>Nafplio</li>
              <li>Olympia</li>
              <li>Nemea</li>
            </ul>
          </div>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1603030580707-d5f787d8b1c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JldGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <h3>Crete</h3>
          <div className="destination-overlay">
            <ul className="destinations-city-list">
              <li>Heraklion</li>
              <li>Chania</li>
              <li>Rethymno</li>
              <li>Agios Nikolaos</li>
            </ul>
          </div>
        </div>

        <div
          className="panel"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1577543599916-551c9c4c1ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXRoZW5zfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <h3>Attica</h3>
          <div className="destination-overlay">
            <ul className="destinations-city-list">
              <li>Athens</li>
              <li>Piraeus</li>
              <li>Elefsina</li>
            </ul>
          </div>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1599666027402-24e8e19eb069?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGFkZXN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
          }}
        >
          <h3>Cyclades</h3>
          <div className="destination-overlay">
            <ul className="destinations-city-list">
              <li>Naxos</li>
              <li>Paros</li>
              <li>Irakleia</li>
              <li>Amorgos</li>
              <li>Tinos</li>
              <li>Milos</li>
              <li>Kea</li>
              <li>Ios</li>
              <li>Kythnos</li>
              <li>Santorini</li>
            </ul>
          </div>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1597131613084-90b333f221e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=317&q=80')`,
          }}
        >
          <h3>North Aegean</h3>
          <div className="destination-overlay">
            <ul className="destinations-city-list">
              <li>Samothrace</li>
              <li>Thasos</li>
              <li>Agios Efstratios</li>
              <li>Lesvos</li>
              <li>Limnos</li>
              <li>Samos</li>
              <li>Chios</li>
              <li>Ikaria</li>
              <li>Psara</li>
              <li>Fournoi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
