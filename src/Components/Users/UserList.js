import React from 'react'
import styles from './UserList.module.css';
import Card from '../UI/Card';

const userList = () => {
  return (
    <Card className={styles.users}>
        <ul></ul>
    </Card>    

  )
}

export default userList