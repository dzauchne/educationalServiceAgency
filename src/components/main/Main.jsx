import React, { Fragment, useState, useEffect } from 'react';
import styles from './Main.module.css';
import StudentsWorking from '../../assets/StudentsWorking.jpg';
// import AcademicSupport from '../../assets/AcademicSupport.jpg';
import StudentBlock from './student-block/StudentBlock';
import TutorBlock from './tutor-block/TutorBlock.jsx';
import InfoForStudents from './info-students/InfoForStudents';
import InfoForTutors from './info-tutors/InfoForTutors';
// import Sliders from '../tutorSliders/Sliders';
import StudentDataForm from './stud-data-form/StudentDataForm';
import TutorCarousel from '../caroussel/TutorCarousel';
// import AllUserDataAgency from './AllUserDataAgency';
// import StudentDataList from './StudentDataList';
import TutorDataForm from './tutor-data-form/TutorDataForm';
// import TutorDataList from './tutor-data-list/TutorDataList';






const Main =(props)=> {
const [tutorInfo, setTutorInfo]= useState(false);
const [studentInfo, setStudentInfo]= useState(false);
const [showContactForm, setShowContctForm]=useState(false);
// const [requestFormData, setRequestFormData]=useState([]);
// const [postId, setPostId] = useState(null);
const [showTutorProfile, setShowTutorProfile]=useState(false)
// const [tutorFormData, setTutorFormData]=useState([]);


const tutorInfoHandler=()=>{
  setTutorInfo(true);
}
const hideTutorInfoHandler=()=>{
  setTutorInfo(false);
}
const showStudentInfoHandler=()=>{
  setStudentInfo(true);
}
const hideStudentInfoHandler=()=>{
  setStudentInfo(false);
}


const showTutorProfileHandler =()=>{
  setShowTutorProfile(true);
}
const hideTutorProfileHandler =()=>{
  setShowTutorProfile(false);
}


const showContactFormHandler =()=>{
  setShowContctForm(true);
}
const hideContactFormHandler =()=>{
  setShowContctForm(false);
}
//Формирование studentFormData и TutorFormData в консоли без получение его с бэк API;он просто на локальном сервере проворачивается

// const collectStudentRequestFormData=(inputUserSubject, inputUserLevel, inputUserPhone, inputUserEmail, id)=>{
//   setRequestFormData((prevRequestFormData)=>{
//       return [...prevRequestFormData, { id:Math.random().toString(), subject:inputUserSubject, level:inputUserLevel, phone:inputUserPhone, email:inputUserEmail}]
//     });
//   }
// console.log(requestFormData)

// const collectTutorFormData=(fullnameValue,emailValue, phoneValue, addressValue, aboutYourselfValue)=>{
//   setTutorFormData((prevTutorFormData)=>{
//      return [...prevTutorFormData, {id:Math.random().toString(),
//     // picture:placeForPicture,
//     //   subjects:subjects,
//     //   level:level,
//       fullName:fullnameValue, phone:phoneValue, email:emailValue, address:addressValue, aboutYourself:aboutYourselfValue}]
//   })
// }
// console.log(tutorFormData);


//НЕДОРАБОТАННЫЕ POST-запросы c studentFormData и TutorFormData, чтобы их кидать на Firebase

// const postStudentContactDataHandler=async (userObject)=>{
//   setIsLoading(true);
//   const response= await fetch("https://regiuserlist-default-rtdb.firebaseio.com/users.json",
//   {       method:"POST",
//           body:JSON.stringify(userObject),
//           headers:{"Content-Type":"appication/json"}
//   });
//   const data=await response.json();
//   console.log(data)
//   setIsLoading(false);
// };

// const postTutorCourseDetailsHandler=async(loginUserDataObj)=>{
//   setIsLoading(true);
//   const response=await fetch('https://regiuserlist-default-rtdb.firebaseio.com/loggedinUsers.json',
//   { method:"POST",
//     body:JSON.stringify(loginUserDataObj),
//     headers:{"Content-Type":"application/json"}
// });
// const data=await response.json();
// console.log(data);
// setIsLoading(false);
// }



  return (
   <>
    <div className={styles.main}>
        <h1>We provide you with competent tutoring and teaching staff and support you with any assistence.</h1>
        <p>We are a bridge between you and fulfilling your dream! </p>

          <div className={styles.forUsers}>

              <div className={styles.toBeaTutor}>
                     <TutorBlock onInfoBtnTutors={tutorInfoHandler}/>

                    { tutorInfo && <InfoForTutors onHideTutorInfo={hideTutorInfoHandler}
                    onShowTutorProfiles={showTutorProfileHandler}
                     onForceToLogin={props.onComebackToLogin} />}

                    { showTutorProfile && < TutorDataForm
                    // onCollectTutorData={collectTutorFormData}
                     onHideTutorProfile={hideTutorProfileHandler}/>}

                    {props.onShowTutorPortraits && < TutorCarousel onHideTutorPortraits={props.onHideTutorPortraits}/>}

                      {/* <TutorDataList tutorData={tutorFormData}/> */}
              </div>

                    {/* <AllUserDataAgency id={props.id}
                    // data={requestFormData}
                    users={props.users}
                    /> */}

              <div className={styles.toBeaStudent}>
                    <StudentBlock onInfoBtnStudents={showStudentInfoHandler}/>

                    { studentInfo && <InfoForStudents onHideStudentInfo={hideStudentInfoHandler} onShowContactForm={showContactFormHandler}/>}

                    { showContactForm && <StudentDataForm

                    // onCollectRequestFormData={collectRequestFormData}
                    onHideContactForm={hideContactFormHandler}/>}

                    {/* <StudentDataList data={requestFormData}/> */}

              </div>
                <div className={styles['main-image']}>
                <img src={StudentsWorking} alt='студенческая работа'/>
                {/* <img src={AcademicSupport} alt='академическая поддержка'/> */}
              </div>

         </div>
     </div>
    </>
  )
}

export default Main;
