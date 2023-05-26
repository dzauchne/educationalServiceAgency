import React, {useState, useEffect, useCallback} from 'react'
import styles from './PersonalCabFormStudent.module.css'
import CourseItem from './CourseItem';
import CourseCard from './CourseCard';

const dataOfCourses=[
    {id:1,
    number:1,
    subject:'English',
    level:'intermediate',
    status:'active',
    courseStartingPoint:'25 September 2023',
    // dateOfConducting:'25 September 2023',
    sumPerLesson:35,
  },

  {id:2,
    number:2,
    subject:'GErman',
    level:'basic',
    status:'passive',
    courseStartingPoint:'2 August 2023',
    // dateOfConducting:'2 August 2023',
    sumPerLesson:25,
  },
  {id:3,
    number:3,
    subject:'Spanish',
    level:'upper-intermediate',
    status:'active',
    courseStartingPoint:'5 Oktober 2023',
    // dateOfConducting:'5 Oktober 2023',
    sumPerLesson:25,
  }]

const PersonalCabForm=(props)=> {
const [requestDetails, setRequestDetails]=useState(false);

const [userList, setUserList]=useState([]);
const[isLoading, setIsLoading]=useState(false);
const [error, setError]=useState(null);

  const requestDetailsHandler=()=>{
    setRequestDetails(true);
  }



  const getUserListDataHandler=useCallback (async()=>{
    setIsLoading(true);
    setError(null);

      try{
        const response= await fetch("https://regiuserlist-default-rtdb.firebaseio.com/users.json");
          if (!response.ok){
            throw new Error ("Что-то пошло не так!..")
          }
        const data=await response.json();
        setUserList(data)
        console.log(data);

        const loadedUser=[];
          for(const key in data){
              loadedUser.push({
              id:key,
              name:data[key].name,
              surname:data[key].surname,
              email:data[key].email,
              password:data[key].password,

            });
          }
        setUserList(loadedUser);
      }

      catch(err){
        setError(err.message)
      }
  setIsLoading(false);
  },
  []);
  useEffect(()=>{
    const timer = setTimeout(() => {
    getUserListDataHandler()
    }, [30000])

    return () => {
      console.log("Очистка");
        clearTimeout(timer);
     };
   },[getUserListDataHandler]
  )


  return (

    <section>
    <div className={styles.backdrop}>
        <form className={styles.tableWrapper}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Personal Cabinet</h1>
                <div styles={styles.closeSection}  onClick={props.onHidePersCabForm}>X</div>
            </div>


            <div className={styles.personalCabInfo}>
                <div className={styles.coursesInfo}>
                <table>
                    <tr className={styles.mainRequestInfo}>
                        <th>НОМЕР ЗАЯВКИ</th>
                        <th>ПРЕДМЕТ</th>
                        <th>УРОВЕНЬ</th>
                        <th>СТАТУС</th>
                        <th>СТАРТ ЗАНЯТИЙ</th>
                        {/* <th>ДАТА ПРОВЕДЕНИЯ ЗАНЯТИЯ</th> */}
                        <th>СТАВКА ЗА УРОК</th>
                    </tr>
                        {dataOfCourses.map((course) =>

                    <tr  onClick={requestDetailsHandler}>  <CourseItem
                          key={course.id}
                          number={course.number}
                          subject={course.subject}
                          level={course.level}
                          status={course.status}
                          courseStart={course.courseStartingPoint}
                          // date={course.dateOfConducting}
                          moneyAmount={course.sumPerLesson}/>
                    </tr>
                   )}
                </table>
              </div>
    </div>
     {requestDetails && <CourseCard onSomeUserData={props.users}/>}
        </form>
     </div>
  </section>
  )
  }

export default PersonalCabForm;
