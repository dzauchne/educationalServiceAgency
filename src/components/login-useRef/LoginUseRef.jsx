import React, {useRef, useState} from "react";

import styles from "./LoginUseRef.module.css";
import Button from "../UI/Button";
// import Input from "../UI/Input";
import ErrorModal from "../UI/ErrorModal";



const LoginUseRef = (props) => {
  const emailInputRef= useRef();
  const passwordInputRef=useRef();
  const[error, setError]=useState();




//     useEffect(() => {
//     const timer = setTimeout(() => {
//       console.log("Effect function");
//       setFormIsValid(emailIsValid && passwordIsValid);
//     }, 2000);
// console.log(emailIsValid, passwordIsValid)
//     return () => {
//       console.log("Очистка");
//       clearTimeout(timer);
//     };
//   }, [emailIsValid, passwordIsValid]);


const submitHandler = (event) => {
    event.preventDefault();
       const inputUserEmail=emailInputRef.current.value;
       const inputUserPassword=passwordInputRef.current.value;

          if(inputUserEmail.trim().length===0 || inputUserPassword.trim().length===0){
          setError({title:'Некорректный ввод!',
                    message:'Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!',})
          return;
          }
          if(!inputUserEmail.trim().length>=30 || inputUserPassword.trim().length<10){
            setError({title:'Некорректный ввод!',
                      message:'Количество символов в строке email не должно превышать 30, в строке пароля- не менее 10!',})
            return;
            }
          if(!inputUserEmail.includes('@')){
            setError({title:'Некорректный ввод!',
                      message:"Ваш Email должен содержать знак @!",})
            return;
          }


    props.onEnableUserLogin(inputUserEmail,inputUserPassword);
    console.log(inputUserEmail,inputUserPassword)
    emailInputRef.current.value='';
    passwordInputRef.current.value='';

  };

const errorHandler=()=>{
  setError(false);

}

  return (
    <>
    {error &&  <ErrorModal onCloseErrorModal={errorHandler} title={error.title} message={error.message}/>}
   <div className={styles.backdrop}>
    <div className={styles.login}>
      <form className="form"
       onSubmit={submitHandler}>
          <div className={styles.closingCross} onClick={props.onHideForm}>
                    <div >X</div>
                </div>
          <input
          ref={emailInputRef}
          id="email"
          label="Email"
          type="email"
//           isValid={emailIsValid}
//           onBlur={validateEmailHandler}
  />
        <input
          ref={passwordInputRef}
          id="password"
          label="Пароль"
          type="password"
//           isValid={passwordIsValid}
//           onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit"   onSubmit={submitHandler} className={styles.btn} onClick={props.onLoggedIn}   >Вход</Button>
        </div>
      </form>
    </div>
   </div>
   </>
  );
};

export default LoginUseRef;
