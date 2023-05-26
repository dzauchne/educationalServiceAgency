import React, {useState, useReducer, useEffect, useRef} from 'react';
import { Fragment } from 'react';
import Button from '../../UI/Button';
import styles from './TutorDataForm.module.css';



const fullnameReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length>= 8,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length>=8,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};


const emailReducer = (prevState, action) => {
  if (action.type === "EMAIL_INPUT") {
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


const phoneReducer = (prevState, action) => {
  if (action.type === "NUMBER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 0
      ||  action.value.replace(/\D/g,''),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 0,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};


const addressReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 0||action.value.trim().length < 45,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 0 || prevState.value.trim().length < 45,
     }
   }else{
    return {
    value: "",
    isValid: false,
  };
   };
}


const aboutYourselfReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 0||action.value.trim().length < 450,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 0||prevState.value.trim().length < 450,
  }
  }else{
      return {
        value: "",
        isValid: false,
    };
  }
}

const TutorDataForm=(props)=> {

const [formIsValid, setFormIsValid] = useState(false);
const [subject, setSubject]=useState('');
const [level, setLevel]=useState('');


// 1.комбинирование состояний определения значения инпута, его валидации через состояния фокуса

  const [fullnameState, dispatchFullnameState] = useReducer(fullnameReducer, {
    value: "",
    isValid: undefined,
  });
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [phoneState, dispatchPhoneState] = useReducer(phoneReducer, {
    value: "",
    isValid: undefined,
  });
  const [addressState, dispatchAddressState] = useReducer(addressReducer, {
    value: "",
    isValid: undefined,
  });

  const [aboutYourselfState, dispatchAboutYourselfState] = useReducer(aboutYourselfReducer, {
    value: "",
    isValid: undefined,
  });

  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const fullnameInputRef = useRef();
  const addressInputRef=useRef();
  const aboutYourselfInputRef=useRef();


// 2.
  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "EMAIL_INPUT", value: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };


  const phoneChangeHandler = (event) => {
    dispatchPhoneState({ type: "NUMBER_INPUT", value: event.target.value });
  };
  const validatePhoneHandler = () => {
    dispatchPhoneState({ type: "INPUT_BLUR" });
  };


  const fullnameChangeHandler = (event) => {
    dispatchFullnameState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateFullnameHandler = () => {
    dispatchFullnameState({ type: "INPUT_BLUR" });
  };

  const addressChangeHandler = (event) => {
    dispatchAddressState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateAddressHandler = () => {
    dispatchAddressState({ type: "INPUT_BLUR" });
  };

  const aboutYourselfChangeHandler = (event) => {
    dispatchAboutYourselfState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateAboutYourselfHandler = () => {
    dispatchAboutYourselfState({ type: "INPUT_BLUR" });
  };

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };


  const levelChangeHandler = (event) => {
    setLevel(event.target.value);
  };


// 4.
const{value:fullnameValue}=fullnameState;
const {value: emailValue}=emailState;
const{value:phoneValue}=phoneState;
const{value:addressValue}=addressState;
const{value:aboutYourselfValue}=aboutYourselfState;

const {isValid: fullnameIsValid}=fullnameState;
const { isValid: emailIsValid } = emailState;
const {isValid: phoneIsValid } = phoneState;
const{isValid:addressIsValid}=addressState;
const{isValid:aboutYourselfIsValid}=aboutYourselfState;



// const ctx = useContext(AuthContext);


const tutorProfileDataObj={
  fullname:fullnameState.value,
  subject:subject,
  level:level,
  email:emailState.value,
  phone:phoneState.value,
  address:addressState.value,
  aboutYourself:aboutYourselfState.value,
}



// 5.

// ДЛЯ ВАЛИДАЦИИ НАДО ВРЕМЯ, А ВСУНУТЬ ФУНК В ФУНКЦ ВОЗМОЖНО ЛИШЬ В UseEffect
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Время ввода данных пошло!..");
    console.log(fullnameIsValid, emailIsValid, phoneIsValid, addressIsValid, aboutYourselfIsValid);
          setFormIsValid(tutorProfileDataObj);
          console.log(tutorProfileDataObj);
    },2000);

   return () => {
  console.log("Очистка");
    clearTimeout(timer);
 };
}, [fullnameIsValid, emailIsValid, phoneIsValid, addressIsValid, aboutYourselfIsValid]);







// 6.
  const submitTutorDataHandler = (event) => {
    event.preventDefault();
// const subjectValue=e.target.value;
        if (formIsValid) {
        //   console.log(fullnameValue,emailValue, phoneValue, addressValue, aboutYourselfValue);
        //  props.onCollectTutorData (fullnameValue,emailValue, phoneValue, addressValue, aboutYourselfValue);
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        }else if (!phoneIsValid) {
          phoneInputRef.current.focus();
        }else if (!fullnameIsValid) {
          fullnameInputRef.current.focus();
        }else if (!addressIsValid) {
          addressInputRef.current.focus();
        }else if (!aboutYourselfIsValid) {
          aboutYourselfInputRef.current.focus();
          console.log(tutorProfileDataObj);
        }
     console.log(formIsValid)
 }




  return (
    <React.Fragment>
    {/* {error &&  <ErrorModal onCloseErrorModal={errorHandler} title={error.title} message={error.message}/>} */}
   <div className={styles.backdrop}>
     <form className={styles.form} onSubmit={submitTutorDataHandler}  >
                <div styles={styles.closeSection} onClick={props.onHideTutorProfile}>
                <div>X</div>
                </div>

                <label htmlFor='picture'>Фото</label>
                <input id='picture'
                type='picture'
                placeHolder='Место загрузки фото'/>



                <label htmlFor='fullName'>ФИО*</label>
                <input id='fullName'
                placeHolder='Введите свои ФИО данные '
                type='text'
                ref={fullnameInputRef}
                value={fullnameValue}
                isValid={fullnameIsValid}
                onChange={fullnameChangeHandler}
                onBlur={validateFullnameHandler}/>

                 <label htmlFor='subjects'>Предметы/Услуги*</label>
                 <select className={styles.subjectOptions} name="subjects" id="subject" type="option" onChange={subjectChangeHandler}>
                    <option value="">Please choose your subject</option>
                    <option value="russian">Русский</option>
                    <option value="english">Английский</option>
                    <option value="psychology">Психология</option>
                    <option value="IT">Программирование</option>
                    <option value="maths">Математика</option>
                </select>

                <label htmlFor='level'>Уровень*</label>
                <select className={styles.level} name="subjects" id="subject" type="option"  onChange={levelChangeHandler}>
                    <option value="">Please choose your level</option>
                    <option value="elementary">начальная школа/базовый</option>
                    <option value="junior high school">средняя школа/B1-B2</option>
                    <option value="high school">Старшая школа/C1-C2</option>
                    <option value="international exams">Международыне экзамены</option>
                    <option value="preparation for interviews">ИНтервью в зарубежних компаниях</option>
                </select>

                <label htmlFor='telephone'>Phone Number*</label>
                <input id='phone'
                type='number'
                placeHolder='Введите номер телефона с кодом страны +...'
                useRef={phoneInputRef}
                onChange={phoneChangeHandler}
                onBlur={validatePhoneHandler}
                value={phoneValue}
                isValid={phoneIsValid}/>

                <label htmlFor='email'>Email*</label>
                <input id='email'
                type='email'
                placeHolder='Введите свой имейл-адрес'
                useRef={emailInputRef}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                value={emailValue}
                isValid={emailIsValid}/>

                <label htmlFor='address'>Адрес</label>
                <input id='address'
                 type='text'
                 placeHolder='Введите свой адрес'
                 useRef={addressInputRef}
                 onChange={addressChangeHandler}
                 onBlur={validateAddressHandler}
                 value={addressValue}
                 isValid={addressIsValid}
                />

                <label htmlFor='aboutYourself'>О себе</label>
                <input className={styles.aboutYourself}
                id='aboutYourself'
                type='text'
                placeHolder='Расскажите о себе'
                useRef={aboutYourselfInputRef}
                onChange={aboutYourselfChangeHandler}
                onBlur={validateAboutYourselfHandler}
                value={aboutYourselfValue}
                isValid={aboutYourselfIsValid}
                />

         <Button className={styles.closeBtn} type='submit' >Submit!</Button>

     </form>
 </div>
</React.Fragment>  )
}
export default TutorDataForm;
