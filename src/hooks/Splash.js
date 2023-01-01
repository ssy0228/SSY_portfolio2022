import React, { useState, useEffect, useRef } from "react";
import "../styles/Splash.scss";


const Splash = () => {
  const [isLoading, setLoading] = useState(true);
  const splash = useRef();

  useEffect(() => {
    if (navigator.maxTouchPoints === 0) {
      const timer = setTimeout(() => {
        setLoading(!isLoading);
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  const renderBalls = (idx) => {
    const Balls = [];
    for (let idx = 0; idx < 26; idx++) {
      Balls.push(<span key={idx+1} className="ball"></span>)
    }
    return <>{Balls}</>
  };

  if (isLoading) {
    return (
      <h1 className="App" ref={splash}>
        <div className="loading_container Splash">
          <div className="loading_ani">
            <div className="ani0">
              {renderBalls()}
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
