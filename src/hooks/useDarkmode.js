import { useState, useEffect } from "react";



const Modechanger = () => {
  const [isDark, setDark] = useState(false);


  const handleDark = () => { 

    setDark(isDark)
  }




  return <div className={`ani ${isDark === true ? "" : "night"}`}></div>
}


export default Modechanger