import { useRef, useState, useEffect } from "react";


const Mode_ChangerBtn = () => {
  const [isActive, setActive] = useState(false);
  const handleActive = () => { 
    setActive(!isActive);
  }

  const goTop = () => { 
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    })
    handleActive();
  }

  const box = useRef();
  useEffect(() => {
    console.log(window.innerHeight);
    const handleBottom = (e) => { 
      if ( window.innerHeight > 500 ) {
        window.scrollY >= 0 && window.scrollY <= Math.abs(window.innerHeight * 3.5) ? (box.current.style.bottom = '4vh') : (box.current.style.bottom = '20vh');
      } 

      if (window.innerWidth <= 480) {
        window.scrollY >= 0 && window.scrollY <= Math.abs(window.innerHeight * 4.5) ? (box.current.style.bottom = '4vh') : (box.current.style.bottom = '10vh');
      }
    }
    const handleView = (e) => {
      if (navigator.maxTouchPoints >= 1) {
        window.innerHeight <= 500 ? (box.current.style.display = "none") : (box.current.style.display = "flex");
      }
    }

    window.addEventListener('scroll', handleBottom);
    window.addEventListener('resize', handleView);
  });

  const storedDarkmode = localStorage.getItem('Darkmode');
  const [Darkmode, setDarkmode] = useState(storedDarkmode);
  
  const handleDark = () => {
    setDarkmode(!Darkmode);
    document.documentElement.setAttribute('data-theme', !Darkmode ? 'light' : 'dark');
    localStorage.setItem('Darkmode', !Darkmode ? 'light' : 'dark');
    setActive(!isActive);
  }

  // useEffect(() => {
  //   if (document.documentElement.getAttribute('data-theme' === 'dark')) {
  //     console.log("Darkmode? true");
  //   } else {
  //     console.log("Darkmode? false");
  //   }
  // }, [Darkmode]);

  return(
    <div className={`color_change ${isActive === true ? "active" : ""}`} ref={box}>
      <button type="button" className={`gearBtn ${isActive === true ? "active": ""}`} onMouseDown={handleActive} onTouchStart={handleActive} onTouchEnd={handleActive}>
        <span className="emoji"><img src={process.env.PUBLIC_URL + `/assets/svgs/gear-svgrepo-com.svg`} alt="gear"/></span>
      </button>
      <ul className="btns_wrap">
        <li>
          <button type="button" className="mode_change" onClick={handleDark} onTouchStart={handleDark}>
            <span className="blind">mode changer</span>
          </button>
        </li>
        <li>
          <button type="button" className="top" onClick={goTop} onTouchStart={goTop}>
            <span className="emoji">▲</span>
            <span className="font en">top</span>
          </button>
        </li>
      </ul>
  </div>
  )
};

export default Mode_ChangerBtn;









