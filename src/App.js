
import React from 'react';
import './App.css';
import AppItem from './AppItem';
import Noname from './Noname';
import Hello from './Hello';

const App=() =>{

  // const $h2=React.createElement('h2', null, '반가워요!~');
  const $h2=<h2>방가방가</h2>;
  
  return (
    // <React.Fragment></React.Fragment>
      <>
        {$h2}
        <AppItem />
        <Hello />
        <Noname />
      </>
  );
}

export default App;

//닫는 태그가 없다면 < />으로 써
// <React.Fragment></React.Fragment> 대신 <></>로 써
