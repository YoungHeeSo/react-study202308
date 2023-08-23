import React from "react";
import Header from "./Components/Food/Layout/Header";
import Meals from "./Components/Food/Meals/Meals";

const App = () => {

  return (
    <>
    <Header />
    <div id='main'>
      <Meals />
    </div>
    </>
  );
};

export default App