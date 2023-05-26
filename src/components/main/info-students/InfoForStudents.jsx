import React from 'react'
import styles from './InfoForStudents.module.css';
import Button from '../../UI/Button';

const InfoForStudents=(props)=> {

  return (
    <>
      <div className={styles.backdrop}>
      <form onClick ={props.onShowContactForm} className={styles.beingSomeStudents}>
          <div styles={styles.closeSection}>
            <div onClick={props.onHideStudentInfo}>X</div>
          </div>

          <h1>to Students</h1>
          <h2>To be a tutor you have to abyde by some entrance criteria</h2>
          <h3>- to be registered and logged in</h3>
          <h3>- to fill in a form with the information to subjects and science fields you are interested in, putting your contact number you are reached under</h3>
          <h3>- submit this form pressing the button "Contact me!" and wait for our call!</h3>
            <Button >Go to request form</Button>
        </form>
      </div>
    </>
  )
}
export default InfoForStudents;
