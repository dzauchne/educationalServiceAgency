import React, {
  useState,
  useEffect,
  useReducer,
  // useContext,
  useRef,
} from "react";

import styles from "./LoginOnContext.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";




// 3.
const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length < 15 || action.value.trim().length !=='',
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length < 15 || prevState.value.trim().length !=='',
    };
  }
  return {
    value: "",
    isValid: false,
  };
};






const LoginOnContext = (props) => {
const [formIsValid, setFormIsValid] = useState(false);



// 1.комбинирование состояний определения значения инпута, его валидации через состояния фокуса
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });






// 2.
  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "INPUT_BLUR" });
    // Событие blur вызывается когда элемент теряет фокус
  };





// 4.
const { isValid: emailIsValid } = emailState;
const { isValid: passwordIsValid } = passwordState;
const {value: emailValue}=emailState;
const { value: passwordValue} = passwordState;

// const ctx = useContext(AuthContext);

const emailInputRef = useRef();
const passwordInputRef = useRef();





// 5.

const loginUserDataObj={
  email:emailState.value,
  password:passwordState.value,
}

// ДЛЯ ВАЛИДАЦИИ НАДО ВРЕМЯ, А ВСУНУТЬ ФУНК В ФУНКЦ ВОЗМОЖНО ЛИШЬ В UseEffect
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Время ввода данных пошло!..");
    console.log(emailIsValid, passwordIsValid);
      //setFormIsValid(emailIsValid && passwordIsValid);
       // console.log(emailState, passwordState);
    setFormIsValid(loginUserDataObj);
 console.log(loginUserDataObj);
  },2000);

   return () => {
  console.log("Очистка");
    clearTimeout(timer);
 };
}, [emailIsValid, passwordIsValid]);




// 6.
  const submitHandler = (event) => {
    event.preventDefault();
        if (formIsValid) {
              console.log(emailState.value,passwordState.value)
          // props.onLogin(emailValue, passwordValue);
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        } else {
          passwordInputRef.current.focus();
        }
        console.log(formIsValid)
        props.onPostLoggedinUserData(loginUserDataObj);
 }








  return (

   <div className={styles.backdrop}>
    <div className={styles.login}>

      <form className="form" onSubmit={submitHandler}>
            <div className={styles.closingCross} onClick={props.onLogout}>
                    <button>X</button>
            </div>
        <Input
          ref={emailInputRef}
          id="email"
          label="Email"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}/>

        <Input
          ref={passwordInputRef}
          id="password"
          label="Пароль"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} onClick={props.onLoginCongrats} >Вход</Button>
        </div>
        <></>
      </form>
    </div>
   </div>
  );
};

export default LoginOnContext;

