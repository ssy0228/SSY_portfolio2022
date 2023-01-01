import React, { useState, useEffect } from "react";
import "../styles/Splash.scss";

const Splash = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!isLoading);
    }, 3000);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return (
      <h1 className="App">
        <div className="loading_container Splash">
          <div className="loading_ani">
            <div className="ani0">
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
              <span className="ball"></span>
            </div>
            <span className="ani1"></span>
            <span className="ani2"></span>
            <span className="ani3"></span>
            <span className="ani4"></span>
          </div>
        </div>
      </h1>
    );
  }
};

export default Splash;
