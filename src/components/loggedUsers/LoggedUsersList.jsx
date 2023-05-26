import React from 'react';
import Card from '../UI/Card';
import styles from './LoggedUsersList.module.css';

const LoggedUsersList=(props)=> {
  return (
    <Card className={styles.inloggedUsers}>
        <ul>
        {props.onloggedInUsers.map((loggedInUser)=>(
        <li key= {loggedInUser.id}>
              {loggedInUser.id} -{loggedInUser.email}-{loggedInUser.password}
          </li>
        ))}
        </ul>
    </Card>
  )
}
export default LoggedUsersList;
