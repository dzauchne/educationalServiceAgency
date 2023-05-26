import Carousel from 'react-bootstrap/Carousel';
import styles from './TutorCarousel.module.css'

const TutorCarousel= (props)=> {
  return (
    <div className={styles.photogallery}>
         <div className={styles.backdrop}>
           <div className={styles.sliderSection}>
             <div className={styles.heading} onClick={props.onHideTutorPortraits}>
               <h1 className={styles.title}> Pictures of our Tutors</h1>
               <div className={styles.closingCross} onClick={props.onHideTutorSlides}>X</div>
              {/* <div circle></div> */}
             </div>
            <div className={styles.sliders}>
            <Carousel>
              <Carousel.Item>
                <img className={["d-block w-100"]}
                  src="https://www.merchantmaverick.com/wp-content/uploads/2020/04/Online_tutor_teacher_using_laptop_at_their_desk.jpg"
                  alt="First slide"/>
                <Carousel.Caption>
                  <h2 className={styles.slideNumber}>First slide label</h2>
                  <p className={styles.description}>Учитель математики Вероника Георгиевна: помощь с прохождением материала с 5 по 12 классы.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img className={["d-block w-100"]}
                  src="https://i0.wp.com/tutorblog.cambly.com/wp-content/uploads/2021/11/shutterstock_1818524411.jpg"
                  alt="Second slide" />
                <Carousel.Caption>
                  <h2 className={styles.slideNumber}>Second slide label</h2>
                   <p className={styles.description}>
Психолог Галина Ивановна: запуск речи, коррекция эмоциональной интеллигенции , коррекция школьных травм.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.elearningindustry.com/wp-content/uploads/2015/09/8-tips-choosing-best-online-tutoring-company-usa.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2 className={styles.slideNumber}>Third slide label</h2>
                  <p className={styles.description}>
                    Учитель английского ОЛьга Борисовна: подготовка к международным экзаменам, корпоративный англи йский.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
             </Carousel>
           </div>
      </div>
   </div>
</div>
  );
}

export default TutorCarousel;
