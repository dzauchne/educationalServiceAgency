import React from 'react';
import styles from './CourseCard.module.css';


const courseDetails=[{
    id:1,
    number:1,
    subject:'English',
    level:'intermediate',
    status:'active',
    courseStartingPoint:'25 September 2023',
    sumPerLesson:35,
},
{ id:2,
    number:1,
    subject:'English',
    level:'intermediate',
    status:'active',
    courseStartingPoint:'25 September 2023',
    sumPerLesson:35,},
    {
        id:3,
        number:1,
        subject:'English',
        level:'intermediate',
        status:'active',
        courseStartingPoint:'25 September 2023',
        sumPerLesson:5,
    }]
const CourseCard=(props)=>{

    return (
    <div className={styles.profileCard}>
        <div>CourseCard</div>
        <ul>
            {props.onSomeUserData.map((userDataItem) =>
                (<li key={userDataItem.id}>
                    email={userDataItem.email}
                    {/* subject={course.subject}
                    level={course.level}
                    status={course.status}
                    courseStart={course.courseStartingPoint}
                    // date={course.dateOfConducting}
                moneyAmount={course.sumPerLesson}*/}
                </li>)
                )}
        </ul>
     </div>
    )
}
export default CourseCard;
