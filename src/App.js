import React, { useState } from 'react';
import MainHeader from './Components/SideEffect/MainHeader/MainHeader';
// import Home from './Components/SideEffect/Home/Home';
import Login from './Components/SideEffect/Login/Login'

const App = () => {
  
 

  return (
    <>
      <MainHeader />
      <main>
        {/* <Home /> */}
        <Login />
      </main>
    </>
  );
};

export default App