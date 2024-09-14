import { FC } from "react"
import s from './About.module.scss'
import { aboutPic } from "../../utils/img"

const AboutContent:FC = () => {
  return (
    <>
        <div className={s.about}>
          <div className={s.about__boxes}>
            <div className={s.about__left}>
              <div className={s.about__info}>
                <h2 className={s.about__title}>ABOUT US.</h2>
                <p className={s.about__desc}>
                Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.
                We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
                </p>
              </div>
              <div className={s.about__years}>
                <div className={s.about__years_box}>
                  <h2 className={s.about__years_title}>50k+</h2>
                  <p className={s.about__years_text}>Happy Customers</p>
                </div>
                <div className={s.about__years_box}>
                  <h2 className={s.about__years_title}>60+</h2>
                  <p className={s.about__years_text}>Top Partners</p>
                </div>
                <div className={s.about__years_box}>
                  <h2 className={s.about__years_title}>5+</h2>
                  <p className={s.about__years_text}>Years of Trust</p>
                </div>
              </div>
            </div>
            <div className={s.about__right}>
              <img src={aboutPic} alt="" className={s.about__img} />
            </div>
          </div>
        </div>
    </>
  )
}

export default AboutContent