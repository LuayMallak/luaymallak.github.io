import React from "react";
import background from "../images/video2.mp4";
import image from "../images/example.png";

export default function BackgroundVideo() {
  const videoSource = background;

  return (
    <div className="container">
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src={videoSource} type="video/mp4" />
      </video>

      <div className="content">
        <div className="subContent">
          <h1>Hi, I am Luay Mallak</h1>
          <p>Front-end junior Web Developer, live in Leipzig, Germany</p>
          <a href="#about-me">Check my Portfolio</a>
          <img src={image} alt="profile" />
        </div>
      </div>
    </div>
  );
}
