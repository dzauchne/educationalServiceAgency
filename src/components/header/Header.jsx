import React from 'react'
import styles from './Header.module.css';
import Button from '../UI/Button';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


const Header=(props)=> {

  return (
        <header className={styles.header}>
          <h1>LOGO</h1>
          <ul className={styles.navButtons}>
            <li><NavLink  activeClassName={styles.active} to='/About'>About</NavLink></li>
            {/* <li> <Button className={styles.personalCab} onClick={props.onShowPersCabForm}>Personal Cabinet</Button></li> */}
            <li><Button className={styles.tutorBtn} onClick={props.onShowTutorPortraits}>Our Tutors</Button></li>
            <li><Button className={styles.regiFormOpeningBtn} onClick={props.onOpenForm}>Registartion</Button></li>
            <li><Button className={styles.loginFormOpeningBtn} onClick={props.onShowLoginForm}>LOGIN</Button></li>
          </ul>

    </header>
  )
}

export default Header;
