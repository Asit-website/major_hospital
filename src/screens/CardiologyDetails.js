import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardiologyApi from "../api/cardilogiApi";
import { Navbar } from "../components/Navbar";
import appoint from "../images/appoint.png";
import call1 from "../images/call1.png";
import rupay from "../images/rupay.png";
import cert from "../images/cert.png";
import location from '../images/location.png';
import ApointmentPopup from "../popup/ApointmentPopup";
const CardiologyDetails = ({apointPop,setApointPop}) => {
  const { id } = useParams();

  const [item, setItem] = useState(cardiologyApi);
  const details = item.filter((it, e) => {
    return it.id === id;
  });

  

  return (
    <>
      <Navbar />
      <div className="details-back">
        <div className="details-sect">
          <h2>Cardiology Expert</h2>
        </div>
      </div>

      <div className="doctor-set relative">
        <div className="doctor-det w-full">
          {details.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <div className="img-mah">
                  <img src={val.images} alt="" />
                </div>

                <div className="card-details">
                  <div  onClick={()=> setApointPop(true)} className="appoint-desc cursor-pointer">
                    <img src={appoint} alt="appoint" />
                    <div  className="appo-para">
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
                    <hr className="sd" />
                  </div>
                  <div className="buttpn-group">
                    <button onClick={()=> setApointPop(true)} className="bookst">Book an appointment</button>
                    <button className="mes">Message</button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="expert-ret">
        <div className="expert-det">
          <div className="expert-first">
            <h2>Cardiology</h2>
            <p className="asoc">Associate Director Cardiology</p>
            <p className="asoc1">
              MBBS, MD, DM, FSCAI, FIC(USA), FPD (MICHIGAN USA), FPI (VIETNAM),
              FESC.
            </p>

            <div className="rupay flex items-center">
              <img src={rupay} alt="rupay" />
              <p>1599</p>
            </div>
          </div>
          <div className="expert-second">
            <h2>Certificates</h2>
            <div className="flex items-center">
              <div className="ghj"></div>
              <div className="certificate flex mt-6">
                <img src={cert} alt="cert" />
                <img className="ml-6" src={cert} alt="cert" />
                <img className="ml-6" src={cert} alt="cert" />
                <img className="ml-6" src={cert} alt="cert" />
              </div>
            </div>
          </div>
        </div>

        <div className="aviability-section">
          <h3>Availability</h3>

          <table className="doctor-table">
            <tr className="doctor_name">
              <td>
                <h4>Doctor name</h4>
              </td>
              <td>
                <h4>Sunday</h4>
              </td>
              <td>
                {" "}
                <h4>Monday</h4>
              </td>
              <td>
                <h4>Tuesday</h4>
              </td>
              <td>
                <h4>Wednesday</h4>
              </td>
              <td>
                <h4>Thursday</h4>
              </td>
              <td>
                <h4>Friday</h4>
              </td>
              <td>
                <h4>Saturday</h4>
              </td>
            </tr>
            {details.map((val, index) => {
              return (
                <tr key={index} className="doctor_name1">
                  <td className="ds1">
                    <p className="name-doc">{val.name}</p>
                  </td>
                  <td className="tds1"><hr /></td>
                  <td className="tds"><p className="name-doc1">09.00 Am - 5.00 Pm</p></td>
                  <td className="tds1"><hr /></td>
                  <td className="tds"><p className="name-doc1">09.00 Am - 5.00 Pm</p></td>
                  <td className="tds1"><hr /></td>
                  <td className="tds"><p className="name-doc1">09.00 Am - 5.00 Pm</p></td>
                  <td className="tds1"><hr /></td>
                </tr>
              );
            })}
          </table>
        </div>

      
      </div>
      <div className="about-rent">
      {
        details.map((val,index)=>{
            return(
                <div className="about-card" key={index}>
                 <h3>About Us</h3>
                 <p className="about-na">{val.name}</p>
               <div className="hr"></div>

               <div className="about-foot">
                  <div className="first-foot1">
                     <h2>INSTITUTE / DEPARTMENT</h2>
                     <div className="para-qualify">
                     <p>Major Department of Integrative Medicine</p>
                     </div>
                     <div className="location-ab">
                        <img src={location} alt="location" />
                        <p>Delhi</p>
                     </div>
                  </div>
                   <div className="abg"></div>
                  <div className="first-foot1">
                     <h2>QUALIFICATIONS</h2>
                     <div className="para-qualify">
                          <p>Master of Surgery (M.S)-</p>
                          <p>Prasoothi Tantra and Stree Roga</p>
                          <p>Bachelor of Ayurvedic</p>
                     </div>
                  </div>
                  <div className="abg"></div>
                  <div className="second-foot1">
                      <h2>SPECIALIZATIONS</h2>
                      <div className="para-qualify">
                          <p>Gynaecology</p>
                          <p>Life style disorders (Diabetes, BP, <br /> Cholesterol, Obesity)</p>
                          <p>Bachelor of Ayurvedic</p>
                      </div>
                  </div>
               </div>
            </div>  
            )
        })
      }
       </div>

       {
         apointPop && <ApointmentPopup setApointPop={setApointPop}/>
       }
    </>
  );
};

export default CardiologyDetails;
