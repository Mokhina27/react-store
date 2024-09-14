import React, { FC } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { clockIcon, contactPic, emailIcon, fbIcon, instIcon, locationIcon, telephoneIcon, xIcon } from '../utils/img'
import CustomBtn from '../components/UI/CustomBtn'

const Contact:FC = () => {

  const infoBox = [
    {
      id: 1,
      text: '14 GreenRoad St.',
      icon: locationIcon
    },
    {
      id: 2,
      text: '+971123456789',
      icon: telephoneIcon
    },
    {
      id: 3,
      text: 'avira@getinfo.com',
      icon: emailIcon
    },
    {
      id: 4,
      text: 'Mon-Fri: 9:00 AM - 8:00 PM Sat: 9:30 AM - 6:30 PM',
      icon: clockIcon
    }
  ]

  return (
    <>
      <Navbar/>
      <div className="contact">
        <div className="contact__left">
          <div className="contact__left-info">
            <h1 className="contact__left-title">CONTACT US</h1>
            <p className="contact__left-text">Feel free to contact us any time. We will get back to you as soon as we can.</p>
          </div>
          <form className="contact__form">
            <input 
              type="" 
              className="contact__form-name"
              placeholder='Name'
            />
            <input 
              type="" 
              className="contact__form-name"
              placeholder='Email'
            />
            <input 
              type="" 
              className="contact__form-message"
              placeholder='Message'
            />
            <CustomBtn
              text='Send'
            />
          </form>
        </div>
        <div className="contact__right">
          <div className="contact__right-boxes">
            { infoBox.map((info) => (
                <div className="contact__right-box" key={info.id}>
                <img className="contact__right-box-icon" src={info.icon} alt="" />
                <p className="contact__right-box-text">{info.text}</p>
              </div>
            ))}
            <div className="contact__right-socials">
              <a href="">
                <img src={instIcon} alt="" className="contact__right-icon" />
              </a>
              <a href="">
                <img src={fbIcon} alt="" className="contact__right-icon" />
              </a>
              <a href="">
                <img src={xIcon} alt="" className="contact__right-icon" />
              </a>
            </div>
          </div>
          <img src={contactPic} alt="" className="contact__right-pic" />
        </div>
      </div>
    </>
  )
}

export default Contact