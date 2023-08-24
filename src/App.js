import React from "react";
import Header from "./Components/Food/Layout/Header";
import Meals from "./Components/Food/Meals/Meals";
import Cart from "./Components/Food/Cart/Cart";

const App = () => {

  return (
    <>
    <Cart />
    <Header />
    <div id='main'>
      <Meals />
    </div>
    </>
  );
};

export default App