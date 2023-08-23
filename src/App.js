import React, { useEffect, useState } from 'react';
import MainHeader from './Components/SideEffect/MainHeader/MainHeader';
import Home from './Components/SideEffect/Home/Home';
import Login from './Components/SideEffect/Login/Login'

//컨텍스트 불러오기
import AuthContext from './store/auth-context';

const App = () => {
  
  //login 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  //화면이 리렌더링 될 때 localStorage를 확인해서
  //현재 로그인 플래그가 존재하는지 검사
  
  //기존에 로그인한 사람인지 확인하는 코드는
  //리렌더링할때마다 돌아가게 만들면 안됨
  // 로그인 후 새로고침해도 렌더링되지 않아 무한루프에 빠지지 않게 해줌
  //★서버통신에서 가장 중요함!
  useEffect(()=>{
    console.log('useEffect 실행 - 최초 단 한번만 실행');
    console.log('로그인 검사 수행!');

    const storedLoginFlag = localStorage.getItem('login-flag');  
    if(storedLoginFlag==='1'){
      setIsLoggedIn(true);
    }
  }, []);

  //서버로 로그인을 요청하는 함수
  const loginHandler=(email, password)=>{
    //로그인의 증거로 브라우저에 로그인 값 1로 표현해서 저장
    //애플리케이션-> 저장용량-> 로컬 스토리지 확인
    localStorage.setItem('login-flag', '1');    
    setIsLoggedIn(true);  
  };

  //로그아웃을 요청하는 함수
  const logoutHandler=()=>{
    localStorage.removeItem('login-flag', '1');
    setIsLoggedIn(false);  
  }
 
  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
    }}>
      <MainHeader 
        // isAuthenticated={isLoggedIn} 
        onLogout={logoutHandler}/>

      <main>
        {isLoggedIn && <Home />} 
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
      </main>

    </AuthContext.Provider>
  );
};

export default App