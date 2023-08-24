import React, { useState } from "react";
import Header from "./Components/Food/Layout/Header";
import Meals from "./Components/Food/Meals/Meals";
import Cart from "./Components/Food/Cart/Cart";

const App = () => {
  
  //장바구니 모달을 열고 닫는 상태변수
  const {cartIsShow, setCartIsShown}=useState(false);

  //모달을 열어주는 핸들러
  const showCartHandler=()=>setCartIsShown(true);
  
  //모달을 닫아주는 핸들러
  const hideCartHandler=()=>setCartIsShown(false);
  

  return (
    <>
    {cartIsShow && <Cart onClose={hideCartHandler}/>}
    {/* <Cart /> */}
    <Header onShowCart={showCartHandler}/>
    <div id='main'>
      <Meals />
    </div>
    </>
  );
};

export default App