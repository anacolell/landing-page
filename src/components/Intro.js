import React from "react";

export default function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="intro-content-wrapper">
        <div className="intro-img-container">
          <img
            className="intro-img"
            src="https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZmluaXR5JTIwcG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="santorini landscape"
          />
        </div>
        <div className="intro-info">
          <h5 className="intro-info-title">
            <span class="intro-info-title-accent">L</span>orem ipsum dolor sit
            amet
          </h5>
          <p className="intro-text">
            Incidunt mollitia, alias natus impedit voluptas qui debitis
            laboriosam illo optio hic suscipit fugit deserunt, doloremque dolor
            quas vero. Cum magnam natus veniam amet, vero delectus placeat
            recusandae obcaecati repellendus doloribus deserunt, adipisci
            corrupti est reprehenderit quaerat temporibus.
          </p>
        </div>
      </div>
    </div>
  );
}
