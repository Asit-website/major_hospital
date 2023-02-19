import React from 'react';
import call from '../images/call.png';
import navigation from '../images/navigation-logo.png'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twit from '../images/twit.png'
import youtube from '../images/youtube.png'
import ApointmentPopup from '../popup/ApointmentPopup';
const Footer = ({apointPop,setApointPop}) => {
  return (
    <>
      <div className="footer">
      <footer className='foot'>
         <div className='first-foot'>
            <h3>General Info</h3>
            <div className="foot-para ">
                <p>About</p>
                <p>Departments</p>
                <p>Doctors</p>
                <p>Location</p>
            </div>
           
            <div className="social mt-6">
            <h4>Follow us</h4>
            <div className="social-link">
                <img  src={fb} alt="" />
                <img className='ml-4' src={twit} alt="" />
                <img className='ml-4' src={insta} alt="" />
                <img className='ml-4' src={youtube} alt="" />
            </div>
            </div>
         </div>
         <div className='second-foot'>
         <h3>Departments</h3>
            <div className="foot-para ">
                <p>Ophthalmology</p>
                <p>Gastroenterology</p>
                <p>Internal Medicine</p>
                <p>Physiotherapy</p>
                <p>Cold Laser Therapy</p>
                <p>Nutrition Services</p>
                <p>Dental</p>
            </div>
         </div>
         <div className='third-foot'>
         <h3>Site Information & Policies</h3>
            <div className="foot-para ">
                <p>Cookie Policy</p>
                <p>Website Privacy</p>
                <p>Patient Privacy Notice</p>
                <p>Send Us Feedback</p>
                <p>FAQ</p>
            </div>
         </div>
         <div className='fourth-foot'>
         <h3>Reach us</h3>
            <div className="select-foot">
                 <select name="" id="">
                     <option value="">Major Hospitls</option>
                 </select>
            </div>
            <div className="hours mt-5">
                <div className="hours1">
                     <img src={call} alt="call" />
                </div>
                <div className="hours-text">
                    <p>24 hours service  <br /> <span>+91 8800401411</span></p>
                </div>
            </div>

            <div className="appoint-req">
                <button onClick={()=> setApointPop(true)}>Request an Appointment</button>
            </div>
         </div>
      </footer>

      <div className="logo-foot">
          <img src={navigation} alt="navigation" />
      </div>
      </div>  

      {
        apointPop && <ApointmentPopup setApointPop={setApointPop}/>
      }
    </>
  )
}

export default Footer