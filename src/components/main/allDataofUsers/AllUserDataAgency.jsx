import React from 'react'
import Card from '../../UI/Card';
import styles from './AllUserDataAgency.module.css';
// import { useState } from 'react';

const AllUserDataAgency=(props)=> {

  // const [allUSerDataCollected, setallUSerDataCollected]=useState([]);
    // const[persons, setPersons]=([]);

  // const regiDatasFromAxios=()=>{
  //   axios.get(`https://jsonplaceholder.typicode.com/userList`)
  //   .then(res => {
  //     const persons = res.data;
  //     setPersons(persons);
  //   })
  // }
  // console.log(persons);



return(
    <Card>
        <div className={styles.userData} >
        <table>
          <tr>
              <th>Номер договора</th>
              <th>Пользователь</th>
              <th>Предмет</th>
              <th>Статус</th>
              <th>Количество уроков</th>
              <th>Длительность курса</th>
          </tr>
        <tr>
          <td>данные</td>
          <td>
                {props.users.map((user)=>(
                <li>{user.id}-{user.name}-{user.surname}</li>))}
          </td>
          {/* <td>
                {props.data.map((data)=>(
                <li>{data.subject}</li>))}
          </td> */}
          <td>данные</td>
          <td>данные</td>
          <td>данные</td>
        </tr>

        </table>
                <ul>
                {props.users.map((user)=>(
                <li>{user.id}-{user.name}-{user.surname}-{user.age}лет-{user.email}</li>))}
               </ul>
               {/* <ul>
                {props.data.map((data)=>(
                <li>{data.id}-{data.subject}-{data.level}-+{data.phone}-{data.email}</li>))}
              </ul> */}

        </div>
    </Card>
  )
}
export default AllUserDataAgency;
