import React, {useState} from 'react';
import styles from './RegiForm.module.css';
import Button from '../UI/Button';
// import axios from 'axios';
import ErrorModal from '../UI/ErrorModal';
// import axios from 'axios';
// import { Fragment } from 'react';
// import ReactDOM from 'react-dom';



 const RegiForm=(props)=>{

const[inputName, setInputName]=useState('');
const[inputSurname, setInputSurname]=useState('');
const[inputEmail, setInputEmail]=useState('');
const[inputPassword, setInputPassword]=useState('');
const[error, setError]=useState();


const nameChangeHandler=(event)=>{
    setInputName(event.target.value);
  }
  // const inputNameValidHandler=()=>{
  //   setInputNameValid(true)
  // }
const surnameChangeHandler=(event)=>{
  setInputSurname(event.target.value);
}

const emailChangeHandler=(event)=>{
  setInputEmail(event.target.value);
}
const passwordChangeHandler=(event)=>{
  setInputPassword(event.target.value);
}



// console.log(userObject.name, userObject.surname, userObject.email)


const submitUserDataHandler=(event)=>{
  event.preventDefault();

  const userObject={
  name:inputName,
  surname:inputSurname,
  email:inputEmail,
  password:inputPassword,
}

if(userObject.name.trim().length===0 || userObject.surname.trim().length ==='' || userObject.email.trim().length===0 || userObject.password ===''){
setError({title:'Некорректный ввод!',
          message:'Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!',})
return;
}
if(!userObject.name.trim().length>=30 || !userObject.surname.trim().length>=30 || !userObject.email.trim().length>30){
  setError({title:'Некорректный ввод!',
            message:'Эти поля не могут содержать более 30 символов, иначе Ваша регистрация не произойдёт!',})
  return;
  }
if(+userObject.password.trim().length > 15){
    setError({title:'Некорректный ввод!',
              message:'Пароль должен быть меньше 15 симвлов и состоять из чисел!',})
    return;
}
if(!userObject.email.includes('@')){
  setError({title:'Некорректный ввод!',
            message:"Ваш Email должен содержать знак @!",})
  return;
}
// props.onCreateUser(userObject)
props.onFetchRegiUserData(userObject)

setInputName('');
setInputSurname('');
setInputEmail('');
setInputPassword('');

console.log(userObject)
}

const errorHandler=()=>{
  setError(false);
}
// const nameColor =inputNameValid===true ? "green" :"red";


  return (
    <>
       {error &&  <ErrorModal onCloseErrorModal={errorHandler} title={error.title} message={error.message}/>}
      <div className={styles.backdrop}>
            <form
             className={styles.form} onSubmit={submitUserDataHandler} >
                <div className={styles.closingCross} onClick={props.onHideForm}>
                    <div >X</div>
                </div>
                <div>
                  <div className={styles.inputs}>
                     <label htmlFor='name'>Имя*</label>
                     <input id='name' type='text'
                      onChange={nameChangeHandler}
                      // ref={nameInputRef}
                      value={inputName}
                      // onValidateNameInput={inputNameValidHandler}
                      // style={{borderColor:nameColor}}
                      />
                  </div>
                  <div className={styles.inputs}>
                    <label htmlFor='surname'>Фамилия*</label>
                    <input id='surname' type='text'
                    onChange={surnameChangeHandler}
                    value={inputSurname}
                    />
                  </div>
                  <div className={styles.inputs}>
                    <label htmlFor='email'>Email*</label>
                    <input id='email' type='text'
                    onChange={emailChangeHandler}
                    value={inputEmail}
                    />
                  </div>
                  <div className={styles.inputs}>
                    <label htmlFor='password'>Password*</label>
                    <input id='password' type='number'
                    onChange={passwordChangeHandler}
                    value={inputPassword}
                    />
                  </div>
                  <Button className={styles.closeBtn} type='submit' onSubmit={submitUserDataHandler} >REGISTRATION</Button>

              </div>
        </form>
      </div>
  </>
   );
};

export default RegiForm;
