import React, {Fragment} from 'react';
import Button from '../../UI/Button';
import styles from './TutorBlock.module.css';

const TutorBlock=(props)=> {

  return (
    <React.Fragment>
      <section className={styles.tutors} onClick={props.onInfoBtnTutors}>
          <h1>TUTORS</h1>
          <Button >Info for Tutors</Button>
      </section>
    </React.Fragment>
  );
}
export default TutorBlock;
