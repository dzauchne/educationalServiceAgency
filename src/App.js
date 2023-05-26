import styles from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import React, {useState, useEffect, useCallback} from 'react';
import RegiForm from './components/form/RegiForm';
import UserList from './components/users/UserList';
// import Login from './components/login/Login';
// import LoginUseRef from './components/login-useRef/LoginUseRef';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import About from './components/pages/About';
import Conditions from './components/pages/Conditions';
import LawSubstrate from './components/pages/LawSubstrate';
import ClientsFeedbacks from './components/pages/ClientsFeedbacks';
import PersonalCabFormStudent from './components/personalCabinet/PersonalCabFormStudent';
import Button from './components/UI/Button';
// import LoggedUsersList from './components/loggedUsers/LoggedUsersList';
import ModalWindow from './components/modalWindow/ModalWindow';
import LoginOnContext from './components/loginOnContext/LoginOnContext';
// import Login from './components/login/Login';


const App =(props)=> {

  const [appearForm, setAppearForm]=useState(false);
  const [appearPErsonalCabForm, setAppearPersonalCabForm]=useState(false);
  const [loginForm, setLoginForm]=useState(false);
  const [isLoggedCongrats, setIsLoggedCongrats]=useState(false);

  // const [loggedInUserList, setLoggedInUserList]=useState([]);
  const [showTutorPortraits, setShowTutorPortraits]=useState(false);

  const [userList, setUserList]=useState([]);
  const[isLoading, setIsLoading]=useState(false);
  const [error, setError]=useState(null);


  const showFormHandler=()=>{
        setAppearForm(true);
    }
    const hideFormHandler=()=>{
      setAppearForm(false);
    }

  const showPersonalCabFormHandler=()=>{
      setAppearPersonalCabForm(true);
  }
  const hidePersonalCabFormHandler=()=>{
    setAppearPersonalCabForm(false);
  }

  const loggedInHandler=()=>{
  setIsLoggedCongrats(true);
}

const  loggedOutHandler=()=>{
  setIsLoggedCongrats(false);

}
// побочный эффект как получить код залогиненного пользователя с помощью локального сервера /хранилица
useEffect(()=>{
   const storedLoginInfo=localStorage.getItem('loginForm');
if(storedLoginInfo==='1'){
  setLoginForm(true);
}},[])


 const showLoginFormHandler=(email, password)=>{
      localStorage.setItem('loginForm','1');
      setLoginForm(true);
  }
  const hideLoginFormHandler=()=>{
    localStorage.removeItem('loginForm','1');
    setLoginForm(false);
  }

  const showTutorPortraitsHandler=()=>{
    setShowTutorPortraits(true);
    }
  const hideTutorPortraitsHandler=()=>{
    setShowTutorPortraits(false);
  }

//Формирование userList в консоли без получение его с бэк API;он просто на локальном сервере проворачивается

// const enableUserLoginHandler=(inputUserEmail, inputUserPassword)=>{
// setLoggedInUserList((prevloggedInUserList)=>{
//     return [...prevloggedInUserList, { email:inputUserEmail, password:inputUserPassword,id:Math.random().toString()}]
//   });
// }
// console.log(loggedInUserList);

// const createUserHandler=(userObject)=>{
// setUserList((prevUserList)=>{
//     return [...prevUserList, { userObject}]
// });
// }
// console.log(userList);




const postUserRegiDataHandler=async (userObject)=>{
  setIsLoading(true);
  const response= await fetch("https://regiuserlist-default-rtdb.firebaseio.com/users.json",
  {       method:"POST",
          body:JSON.stringify(userObject),
          headers:{"Content-Type":"appication/json"}
  });
  const data=await response.json();
  console.log(data)
  setIsLoading(false);
};

const postUserLoginDataHandler=async(loginUserDataObj)=>{
  setIsLoading(true);
  const response=await fetch('https://regiuserlist-default-rtdb.firebaseio.com/loggedinUsers.json',
  { method:"POST",
    body:JSON.stringify(loginUserDataObj),
    headers:{"Content-Type":"application/json"}
});
const data=await response.json();
console.log(data);
setIsLoading(false);
}




// const getUserListDataHandler=useCallback (async()=>{
//   setIsLoading(true);
//   setError(null);

//     try{
//       const response= await fetch("https://regiuserlist-default-rtdb.firebaseio.com/users.json");
//         if (!response.ok){
//           throw new Error ("Что-то пошло не так!..")
//         }
//       const data=await response.json();
//       setUserList(data)
//       console.log(data);

//       const loadedUser=[];
//         for(const key in data){
//             loadedUser.push({
//             id:key,
//             name:data[key].name,
//             surname:data[key].surname,
//             email:data[key].email,
//             password:data[key].password,

//           });
//         }
//       setUserList(loadedUser);
//     }

//     catch(err){
//       setError(err.message)
//     }
// setIsLoading(false);
// },
// []);


// useEffect(()=>{
//     getUserListDataHandler()}, [getUserListDataHandler]
// )

//здесь проблема , т.к. если эту же функцию поместить в массив зависимостей, она образует вечный цикл, поэтому нужен useCallback
//timer добавила для себя , чтобы введённые данные пользователей не мнгновенно вызывались по get
// useEffect(()=>{
//   const timer = setTimeout(() => {
//   getUserListDataHandler()
//   }, [30000])

//   return () => {
//     console.log("Очистка");
//       clearTimeout(timer);
//    };
//  },[getUserListDataHandler]
// )






  return (
    <div className={styles.app}>

        <header className={styles.header}>
          <Header onOpenForm={showFormHandler}
           onShowLoginForm={showLoginFormHandler} onShowTutorPortraits={showTutorPortraitsHandler}
          />
        </header>

        <Route path='/About' to>
              <About/>
            </Route>

            <Route path='/Conditions'>
              <Conditions/>
            </Route>
            <Route path='/LawSubstrate'>
              <LawSubstrate/>
            </Route>
            <Route path='/ClientsFeedbacks'>
              <ClientsFeedbacks/>
            </Route>
        <main className={styles.main}>
            <div className={styles.leftNavigation}>
                  <ul>
                    <li><Button className={styles.personalCab} onClick={showPersonalCabFormHandler}>Student's Personal Cabinet </Button></li>
                    <li>  <Button  type='get'
                    // onClick={getUserListDataHandler}
                     >UserData For Administrators</Button></li>
                  </ul>
            </div>

            <div className={styles.rightMainContent}>
                  <Main  users={userList} onShowTutorPortraits={showTutorPortraits} onHideTutorPortraits={hideTutorPortraitsHandler} />
                  {appearPErsonalCabForm && <PersonalCabFormStudent onHidePersCabForm={hidePersonalCabFormHandler}  users={userList} />}

                  {appearForm && <RegiForm
                  //  onCreateUser={createUserHandler}
                   onFetchRegiUserData={postUserRegiDataHandler} onHideForm={hideFormHandler}
                  />}
                  {/* {loginForm && <Login onLogout={hideLoginFormHandler}
                  onLogin={enableUserLoginHandler}
                  onLoginCongrats={loggedInHandler}/>} */}


                  {loginForm && <LoginOnContext onLogout={hideLoginFormHandler} onPostLoggedinUserData={postUserLoginDataHandler}
                      // onLogin={enableUserLoginHandler}
                    onLoginCongrats={loggedInHandler}/>}



                  {/* {loginForm && <LoginUseRef onEnableUserLogin={enableUserLoginHandler} onHideForm={hideLoginFormHandler} onLoggedIn={loggedInHandler}/>} */}


                  {isLoggedCongrats && <ModalWindow onCongratsClosing={loggedOutHandler} />}

                   {/* <div className={styles.loggedInUsersList}>
                    <LoggedUsersList onloggedInUsers={loggedInUserList} />
                  </div> */}
                   <div className={styles.userList}>
                      {isLoading && <p>Происходит загрузка данных пользователей...</p>}
                      {!isLoading && userList.length!==0 && <UserList users={userList} />}
                      {!isLoading && userList.length===0 && !error && <p>Новых зарегистрированных пользователей не найдено!..</p>}
                      {!isLoading && error && <p>{error}</p>}
                  </div>
              </div>
        </main>
     </div>
  );
}

export default App;
