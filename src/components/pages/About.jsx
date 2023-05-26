import React from 'react'
import styles from './About.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const About=(props)=> {
  return (
    <section>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>About Page</h1>
          <p className={styles.agencyInfo}>
            Lorem ipsum dolor sit amet consectetur <Link to='/Conditions'>Conditions and Advantages of collaboration with us!</Link> adipisicing elit. Sed excepturi ipsa recusandae culpa porro   <Link to='/LawSubstrate'>Law Substarate of collaboration with us</Link> ullam sint, obcaecati officiis maiores architecto, vel reiciendis ducimus autem rem eum molestiae sapiente?   <Link to='/ClientsFeedbacks'>Feedbacks of our Clients and Tutors</Link>Qui, sapiente!
          </p>
        </div>
    </section>
  )
}
export default About;
