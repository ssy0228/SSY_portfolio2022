import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
const App = lazy(() => import("./App"));
const Splash = lazy(() => import("./hooks/Splash"));
const someMethodMakeSlow = () => { 
  const startTime = performance.now();
  const duration = performance.now() - startTime;
  console.log(`someMethodMakeSlow took ${duration}ms`);
}


window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("lang", window.navigator.language);
  document.documentElement.setAttribute("i18next", localStorage.getItem('i18nextLng'));
  document.documentElement.setAttribute("data-theme", localStorage.getItem('Darkmode'));
  someMethodMakeSlow();
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
  <Suspense fallback={<Splash />}>
    <App />
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
