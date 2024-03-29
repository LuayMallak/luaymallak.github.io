import React from "react";
import background from "../images/video2.mp4";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function BackgroundVideo() {
  const videoSource = background;

  return (
    <div className="container">
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src={videoSource} type="video/mp4" />
      </video>

      <div className="content">
        <div className="subContent">
          <div className="info">
            <h1>Hi, I am Luay Mallak</h1>
            <p className="test">
              Front-end junior Web Developer, live in Leipzig, Germany
            </p>
            <AnchorLink href="#about-me">Check my Portfolio</AnchorLink>
          </div>
          <div className="image-container">
            {/* <img src={image} alt="profile" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
