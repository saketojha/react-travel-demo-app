import React, { useState } from "react";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [videoSrc, setVideoSrc] = useState("/videos/video-1.mp4");
  const videoToggler = () => {
    if (videoSrc === "/videos/video-1.mp4") {
      setVideoSrc("/videos/video-3.mov");
    } else {
      setVideoSrc("/videos/video-1.mp4");
    }
  };
  return (
    <div className="hero-container">
      <video src={videoSrc} autoPlay loop muted />
      <h1>ADVENTURE AWAITS!</h1>
      <p>Whar are you waiting for?</p>
      <div className="hero--btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
      <input type="checkbox" id="switch" onChange={videoToggler} />
      <label for="switch">Toggle</label>
    </div>
  );
}

export default HeroSection;
