import React from 'react'
import info from '../../../images/info.png'
import info1 from '../../../images/info1.png'
import info2 from '../../../images/info2.png'
import info3 from '../../../images/info3.png'
import info4 from '../../../images/info4.png'
import info5 from '../../../images/info5.png'
import vector from '../../../images/vector.png'
import vector1 from '../../../images/vector1.png'
import { NavLink } from 'react-router-dom'
import ApointmentPopup from '../../../popup/ApointmentPopup'
const PatientNav = ({apointPop,setApointPop}) => {
  return (
   <>
      <div className="nav-patient">
           <NavLink to="/visitor" className="w-full"> <div onClick={()=> setApointPop(true)} className={`${window.location.pathname==='/visitor' ? 'nav-box' : 'nav-box1'} nav-box nav-box2 w-full `}>
                 <img src={`${window.location.pathname==='/visitor' ? vector : vector1}`} alt="vector" />
                 <p>Book An Appointment</p>
             </div></NavLink>
            <NavLink className="w-full anyh" to="/visitor1"> <div  className={`${window.location.pathname==='/visitor1' ? 'nav-box' : 'nav-box1'} nav-box2   nav-box w-full`}>
                 <img src={`${window.location.pathname==='/visitor1' ? info3 : info}`} alt="vector" />
                 <p>Visitors Information</p>
             </div></NavLink>
             <NavLink className="w-full anyh" to="/visitor2"> <div  className={`${window.location.pathname==='/visitor2' ? 'nav-box' : 'nav-box1'} nav-box2  nav-box w-full`}>
             <img src={`${window.location.pathname==='/visitor2' ? info4 : info1}`} alt="vector" />
                 <p>International Patients</p>
             </div></NavLink>
             <NavLink className="w-full anyh" to="/payment"> <div  className={`${window.location.pathname==='/payment' ? 'nav-box' : 'nav-box1'} nav-box2   nav-box w-full`}>
             <img src={`${window.location.pathname==='/payment' ? info5 : info2}`} alt="vector" />
                 <p>Payment Information</p>
             </div></NavLink>
         </div>

         {
            apointPop && <ApointmentPopup setApointPop={setApointPop}/>
         }
   </>
  )
}

export default PatientNav