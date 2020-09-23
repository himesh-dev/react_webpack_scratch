import React from "react";
import image from "./assets/react+webpack.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <img src={image} alt="image" />
    </div>
  );
};

export default App;
