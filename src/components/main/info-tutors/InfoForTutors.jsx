import React from 'react'
import styles from './InfoForTutors.module.css';
import Button from '../../UI/Button';



const InfoForTutors=(props)=> {


  return (
  <div className={styles.backdrop}>
    <form className={styles.beingSomeTutors}>
         <div styles={styles.closeSection}>
            <div onClick={props.onHideTutorInfo}>X</div>
          </div>
        <h1> to Tutors</h1>
        <h2>To be a student you have to abyde by some entrance criteria</h2>
        <p>to be registered and logged in</p>
            <p>to download some documents proving your qualification</p>
            <p>to download your profile</p>

          <div className={styles.catalogueBtn}>

          <Button  onClick ={props.onShowTutorProfiles}  >Go to tutor's profiles</Button>

          </div>

    </form>
  </div>
  )
}
export default InfoForTutors;
