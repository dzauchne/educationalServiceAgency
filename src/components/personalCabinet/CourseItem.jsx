import React from 'react'
import Button from '../UI/Button';
import styles from './CourseItem.module.css';
// import CostDate from './CostDate';






const CourseItem=(props)=> {
  return (
    <div className={styles.lessonItemCategories}>
              <tr className={styles.courseItemsSameStudent} key={props.id}>
                  <td><Button>{props.number}</Button></td>
                 <td><Button>{props.subject}</Button></td>
                  <td><Button>{props.status}</Button></td>
                  <td><Button>{props.level}</Button></td>
                  <td><Button>{props.courseStart}</Button></td>
                  {/* <td> <Button>
                      <select name="pets" id="pet-select">
                          <option value="">Please choose a date</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="hamster">Hamster</option>
                          <option value="parrot">Parrot</option>
                          <option value="spider">Spider</option>
                          <option value="goldfish">Goldfish</option>
                      </select></Button></td> */}
                  <td><Button>{props.moneyAmount}</Button></td>
              </tr>
     </div>
  )
}
export default CourseItem;
