import React from 'react'
// import RequstFormDataList from '../contactForm/RequstFormDataList';
import UserList from '../users/UserList';


const  UserDataAgency=(props)=> {
  return (
    <div>
        <UserList users={props.onUsers}/>
        {/* <RequstFormDataList data={props.data}/> */}
    </div>
  )
}
export default UserDataAgency
