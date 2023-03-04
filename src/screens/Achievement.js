import React from 'react'
import nurse from '../images/nurse.png';
import doc from '../images/doc.png'
import doc1 from '../images/doc1.png'
import doc2 from '../images/doc2.png'
import women from '../images/women.png'
import women1 from '../images/women1.png'
import btn from '../images/btn.png'
import { NavLink } from 'react-router-dom';
const Achievement = () => {
  return (
     <>
        <div className="achieve-back">
              <div className="achive-sect">
                 <h2>Our Achievements</h2>
              </div>
        </div>

        <div className="iodology-section">
            <div className="second-iodo second-iodo1">
                <img src={nurse} alt="" />
            </div>
            <div className="first-iodo first-iodo1">
                <h2>Our Achievements</h2>
                {/* <h3>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry</h3> */}
                <p>We are a trusted Hospital,associated with CDAS which is a 50bedded Diabetic  specialized hospital providing revolutionary treatment.We have a team of expert doctors,nurses and certified staff to take care of the patient at all times.Our surgeons perform  specialiazed techniques  using the latest technologies which has lead to recognition and many successful outcomes.</p>
               <NavLink to="/contact"><button>Contact us</button></NavLink>
            </div>
        </div>

        <div className="img-section">
             <img src={doc} alt="" />
             <img src={doc1} alt="" />
             <img src={doc2} alt="" />
        </div>

        <div className="what-expert">
            <h2>what our Expert Says</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div className="women-section mt-9">
                 <div className="wo-img">
                     <img className='imhk' src={btn} alt="" />
                      <img src={women1} alt="women" />
                 </div>
                 <div className="wo-img">
                 <img className='imhk' src={btn} alt="" />
                      <img src={women} alt="women1" />
                 </div>
            </div>
        </div>
     </>
  )
}

export default Achievement