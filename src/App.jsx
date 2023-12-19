import Showcase from "./Showcase";
import React from "react";
import "./App.css";
function App() {
  //vanilla js area below
  const name = "Jazon";

  //the jsx area below
  //you only want to render primitive data types down here. Strings and numbers and such.
  return (
    <div className="container">
      <h1>My Ugly React App</h1>
      <h2>Ugliest Website Ever</h2>
      <h2>Random Number :{Math.round(Math.random() * 100)}</h2>
      <h2>Hi my name is : {name}</h2>
      <Showcase />
    </div>
  );
}

export default App;
