import React, { useContext} from 'react';
import MainHeader from './Components/SideEffect/MainHeader/MainHeader';
import Home from './Components/SideEffect/Home/Home';
import Login from './Components/SideEffect/Login/Login'
import AuthContext from './store/auth-context';

// //컨텍스트 불러오기
// import {AuthContextProvider} from './store/auth-context';

const App = () => {

  const {isLoggedIn}=useContext(AuthContext);

  return (
    <>
      <MainHeader />

      <main>
        {isLoggedIn && <Home />} 
        {!isLoggedIn && <Login />}
      </main>
    </>
  );
};

export default App