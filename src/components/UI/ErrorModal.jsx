import styles from './ErrorModal.module.css';
import Button from './Button';
import React from 'react';
// import ReactDOM  from 'react-dom';

// const Backdrop=(props)=>{
// return (
//     <div className={styles.backdrop} onClick={props.onCloseErrorModal}></div>
// )
// }


 const ErrorModal=(props)=>{

  return (
    <div className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onCloseErrorModal}>Закрыть</Button>
        </footer>
    </div>
  )
 }



// const ErrorModal = (props) => {
//   return(
//       <React.Fragment>
//        {ReactDOM.createPortal(<Backdrop onClick={props.onCloseErrorModal}/>, document.getElementById('backdrop'))}
//        {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onClick={props.onCloseErrorModal}/>, document.getElementById('modal'))}
//       </React.Fragment>
//   )
// };

export default ErrorModal;
