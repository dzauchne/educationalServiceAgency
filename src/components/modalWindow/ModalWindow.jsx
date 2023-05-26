import React
//  { useContext}
  from 'react';
import styles from './ModalWindow.module.css';
// import AuthContext from "../../store/auth-context";
import Button from '../UI/Button';

const ModalWindow=(props)=> {

  return (
    <div className={styles.backdrop}>
           <div>ModalWindow</div>
            <div className={styles.modal}>
            <h1>Рады Вас Видеть Снова!</h1>
            <Button onClick={props.onCongratsClosing}>Выход</Button>
        </div>
    </div>
    );
};

export default ModalWindow;
