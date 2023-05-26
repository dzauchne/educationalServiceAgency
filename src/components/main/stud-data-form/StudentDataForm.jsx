import React, {useState, useReducer, useEffect, useRef} from 'react'
import { Fragment } from 'react';
import Button from '../../UI/Button';
import styles from './StudentDataForm.module.css';
import ErrorModal from '../../UI/ErrorModal';

//  3.
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







const StudentDataForm=(props)=> {
  const [inputUserSubject, setInputUserSubject]=useState('');
  const [inputUserLevel, setInputUserLevel]=useState('');
  const [inputUserPhone, setInputUserPhone]=useState('');
  const [formIsValid, setFormIsValid] = useState(false);


  // 1.комбинирование состояний определения значения инпута, его валидации через состояния фокуса
    const [emailState, dispatchEmailState] = useReducer(emailReducer, {
      value: "",
      isValid: undefined,
    });




  // 2.
const subjectChangeHandler=(event)=>{
  setInputUserSubject(event.target.value);
      }
const levelChangeHandler=(event)=>{
  setInputUserLevel(event.target.value);
    }

const phoneChangeHandler=(event)=>{
    setInputUserPhone(event.target.value);
  }

const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", value: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };
const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };



// 4.
const { isValid: emailIsValid } = emailState;
const {value: emailValue}=emailState;

// const ctx = useContext(AuthContext);

const emailInputRef = useRef();





// 5.
// ДЛЯ ВАЛИДАЦИИ НАДО ВРЕМЯ, А ВСУНУТЬ ФУНК В ФУНКЦ ВОЗМОЖНО ЛИШЬ В UseEffect
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Время ввода данных пошло!..");
    console.log(emailValue, emailIsValid);
          setFormIsValid(emailIsValid);
  },2000);

   return () => {
  console.log("Очистка");
    clearTimeout(timer);
 };
}, [emailIsValid]);




// 6.
  const submitStudentDataHandler = (event) => {
    event.preventDefault();
       if(inputUserSubject.trim().length===0 || inputUserLevel.trim().length===0 || inputUserPhone.trim().length===0){
        // setError({title:'Некорректный ввод!',
        // message:'Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!',})
        return;
        }
        if(+inputUserPhone<10){
        // setError({title:'Некорректный ввод!',
        // message:'Возраст должен быть больше ноля!',})
        return;
        }
       setInputUserSubject('');
       setInputUserLevel('');
       setInputUserPhone('');
      //  setInputUserEmail('');

      //  action.value('');
      //  prevState.value('');
      //  emailValue('');
        if (formIsValid) {
              console.log(emailValue)
          props.onCollectRequestFormData(inputUserSubject, inputUserLevel, inputUserPhone, emailValue);
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        }
        console.log(formIsValid)
 }

//





//     const submitUserDataHandler=(event)=>{
//         event.preventDefault();

//         // if(inputUserSubject.trim().length===0 || inputUserLevel.trim().length===0 || inputUserPhone.trim().length===0){
//         // // setError({title:'Некорректный ввод!',
//         // // message:'Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!',})
//         // return;
//         // }

//         // if(+inputUserPhone<10){
//         //     // setError({title:'Некорректный ввод!',
//         //     // message:'Возраст должен быть больше ноля!',})
//         //     return;
//         // }
//       setInputUserSubject('');
//         setInputUserLevel('');
//         setInputUserPhone('');
//       props.onCollectRequestFormData(inputUserSubject, inputUserLevel, inputUserPhone, inputUserEmail)

//  }




  return (
    <React.Fragment>
    {/* {error &&  <ErrorModal onCloseErrorModal={errorHandler} title={error.title} message={error.message}/>} */}
   <div className={styles.backdrop}>
     <form className={styles.form} onSubmit={submitStudentDataHandler} >
                <div styles={styles.closeSection} onClick={props.onHideContactForm}>
                <div>X</div>
                </div>
                <label htmlFor='subject'>Subject*</label>
                <input id='subject' type='text'  onChange={subjectChangeHandler} value={inputUserSubject}/>

                <label htmlFor='level'>Level*</label>
                <input id='level' type='text' onChange={levelChangeHandler} value={inputUserLevel}/>

                <label htmlFor='telephone'>Phone Number*</label>
                <input id='telephone' type='number'  onChange={phoneChangeHandler} value={inputUserPhone}/>

                <label htmlFor='email'>Email*</label>
                <input id='email'
                type='text'
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                ref={emailInputRef}
                value={emailValue}/>

         <Button className={styles.closeBtn} type='submit'>Contact me!</Button>

     </form>
 </div>
</React.Fragment>  )
}
export default StudentDataForm;
