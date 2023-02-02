import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import cardiologyApi from '../api/cardilogiApi';
import { Navbar } from '../components/Navbar'
import appoint from '../images/appoint.png';
import call1 from '../images/call1.png';
import rupay from '../images/rupay.png';
import cert from '../images/cert.png';
const CardiologyDetails = () => {
    const { id } = useParams();
   
    const [item,setItem] = useState(cardiologyApi);

    const details = item.filter((it,e)=>{
       return it.id === id 
    });

    
  return (
    <>
      <Navbar/>
      <div className="details-back">
          <div className="details-sect">
              <h2>Cardiology Expert</h2>
          </div>
     
      </div>
    

 <div className="doctor-set relative">
      <div className="doctor-det w-full">
      {
         details.map((val,index)=>{
            return(
                <React.Fragment key={index}>
                <div className="img-mah">
                <img src={val.images} alt="" />
            </div>

            <div className="card-details">
                <div className="appoint-desc">
                     <img src={appoint} alt="appoint" />
                     <div className="appo-para">
                         <h3>Book an Appointment</h3>
                         <p>We’re here for you.</p>
                     </div>
                </div>

                <div className="call-det">
                     <img src={call1} alt="call1" />
                     <p>Call us at +91 8800401411</p>
                </div>

                <div className="or">
                  <hr />
                    <div className="or1">
                       <p>OR</p>
                    </div>
                    <hr className='sd' />
                </div>
               <div className="buttpn-group">
                <button className='bookst'>Book an appointment</button>
                <button className='mes'>Message</button>
                </div>
            </div>
                </React.Fragment>
            )
         })
      }
            
      </div>
      </div>
      <div className="expert-det">
              <div className="expert-first">
                  <h2>Cardiology</h2>
                  <p className='asoc'>Associate Director Cardiology</p>
                  <p className='asoc1'>MBBS, MD, DM, FSCAI, FIC(USA), FPD (MICHIGAN USA), FPI (VIETNAM), FESC.</p>

                  <div className="rupay flex items-center">
                     <img src={rupay} alt="rupay" />
                     <p>1599</p>
                  </div>
              </div>
              <div className="expert-second">
                  <h2>Certificates</h2>
                  <div className="flex items-center">
                  <div className='ghj'></div>
                  <div className="certificate flex mt-6">
                      <img src={cert} alt="cert" />
                      <img className='ml-6' src={cert} alt="cert" />
                      <img className='ml-6' src={cert} alt="cert" />
                      <img className='ml-6' src={cert} alt="cert" />
                  </div>
                  </div>
              </div>
         </div>
    </>
  )
}

export default CardiologyDetails