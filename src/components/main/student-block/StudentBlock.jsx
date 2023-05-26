import React  from 'react';
import Button from '../../UI/Button';
import styles from './StudentBlock.module.css';





const StudentBlock=(props)=> {
  return (
    <React.Fragment>
      <section className={styles.students} onClick={props.onInfoBtnTutors}>
        <h1>STUDENTS</h1>
        <Button onClick={props.onInfoBtnStudents}>info for Students</Button>
      </section>
    </React.Fragment>
  )
}
export default StudentBlock;
