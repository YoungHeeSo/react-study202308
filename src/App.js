import React, { useState } from 'react';
import AddUsers from './Components/Users/AddUsers';
import UserList from './Components/Users/UserList';

const App = () => {
  
  const [userList, setUserList]=useState([]);

  const addUserHandler=user=>{
    console.log(user);
    //기존 유저값 복사 후 id 추가
    setUserList(prve=>[...prve, {...user, id:Math.random().toString()}]);
  }

  return (
    <>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </>
  )
}

export default App