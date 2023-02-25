import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardiologyApi from "../api/cardilogiApi";
import broucher from '../images/broucher.png';
import phone from '../images/phone.png';
import twitbhai from '../images/twitbhai.png';
import phonebhai from '../images/phonebhai.png';
import locbhai from '../images/locbhai.png';
import linkbhai from '../images/linkbhai.png';
import insbhai from '../images/insbhai.png';
import fbbhai from '../images/fbbhai.png';
import emailbhai from '../images/emailbhai.png';
import kota from '../images/kota.png';
const CardiologyDetails = ({apointPop,setApointPop}) => {
  const { id } = useParams();

  const [item, setItem] = useState(cardiologyApi);
  const details = item.filter((it, e) => {
    return it.id === id;
  });

  const [tabIndex, setTabIndex] = useState(1);

  const tabAnother = (e) =>{
        e.preventDefault();
        setTabIndex(1);
        document.getElementById("abc").style.backgroundColor="#E74C3C";
        document.getElementById("def").style.backgroundColor="#D30806";
        document.getElementById("ghi").style.backgroundColor="#D30806";
        document.getElementById("jkl").style.backgroundColor="#D30806";
  }
  const tabAnother1 = (e) =>{
    e.preventDefault();
    setTabIndex(2);
        document.getElementById("abc").style.backgroundColor="#D30806";
        document.getElementById("def").style.backgroundColor="#E74C3C";
        document.getElementById("ghi").style.backgroundColor="#D30806";
        document.getElementById("jkl").style.backgroundColor="#D30806";
  }

  const tabAnother2 = (e) =>{
    e.preventDefault();
    setTabIndex(3);
    document.getElementById("abc").style.backgroundColor="#D30806";
    document.getElementById("def").style.backgroundColor="#D30806";
    document.getElementById("ghi").style.backgroundColor="#E74C3C";
    document.getElementById("jkl").style.backgroundColor="#D30806";
  }

  const tabAnother3 = (e) =>{
    e.preventDefault();
    setTabIndex(4);
    document.getElementById("abc").style.backgroundColor="#D30806";
    document.getElementById("def").style.backgroundColor="#D30806";
    document.getElementById("ghi").style.backgroundColor="#D30806";
    document.getElementById("jkl").style.backgroundColor="#E74C3C";
  }

  return (
    <>
    {
      details.map((val,index)=>{
        return(
          <div className="aruniti" key={index}>
          <div className="profile-doctor">
               <div className="profile-doctor1">
                   <h1>{val.name}</h1>
                   <p>{val.content}</p>
                   <div className="hod"></div>
                   <div className=" text-right">
                   <img src={val.images} alt="" />
                   </div>
                   <div className="group-detail-btn">
                       <button id="abc" onClick={tabAnother} className="qualiy">Qualifications</button>
                       <button id="def" onClick={tabAnother1} className="ml-3">Clinical Experience</button>
                       <button id="ghi" onClick={tabAnother2} className="ml-3">Research & Papers</button>
                       <button id="jkl" onClick={tabAnother3} className="ml-3">Awards & Achievements</button>
                   </div>
               </div>
               <div className="profile-doctor2">
                     <div className="broucher">
                         <img src={broucher} alt="broucher" />
                          <h3>Hospital Brochure</h3>
                     </div>
                     <div className="get-in-touch">
                         <h3>Get in touch with us</h3>
                         <p className="fhi">Consult our Experts to get best of the care. To book an appointment, please call:</p>
                         <div className=" flex justify-center mt-7">
                         <div className="contact-kar">
                             <img src={phone} alt="phone" />
                             <p>1800 8333 238</p>
                         </div>
                         </div>
                     </div>
               </div>
          </div>

          <div className="profil-information">
              <div className="profile-information1">
                      <h3>MBBS Degree</h3>
                      <ul>
                      <li>Completed MBBS Degree (1990-1995) with one year Rotating Internship (1995- 1996) from MKCG Medical College and Hospital, a 700 Bedded hospital in Berhampur, Orissa</li>
                      </ul>
                   <div className="ul">
                     <h3>Post MBBS Courses and Training</h3>
                      <ul>
                         <li>Comprehensive hands-on training in the Department of Pathology in All India Institute of Medical Sciences, New Delhi (2600 Bedded Apex Tertiary care institute) from 1997 to 1998</li>
                         <li>Intensive clinical training including OT (operation theatre) and ICU exposure in the Department of Anaesthesiology in All India Institute of Medical Sciences, New Delhi (2600 Bedded Apex Tertiary care institute) in 1998</li>
                         <li>Clinical and surgical training in the Department of Surgery in Lady Hardinge Medical College & Sucheta Kripalani Hospital, New Delhi (600 Bedded Apex Tertiary care institute) from 1998 to 1999</li>
                         <li>Comprehensive training leading to independent patient handling and participation in clinical trials in Department of Psychiatry in Vidyasagar Institute of Mental Health and Neurosciences, New Delhi (250 Bedded Tertiary care institute) from 1999 to 2001</li>
                         <li>Comprehensive Surgical and Clinical Training (DNB) in Ophthalmology in Venu Eye Institute arid Research Centre, New Delhi (200 Bedded Tertiary care institute with 5 secondary care satellite hospitals and 13 primary vision centers) from 2002 to 2005</li>
                         <li>Fellowship course in Low Vision Assessment and Prescription in Venu Eye Institute in 2005</li>
                         <li>Extensive training in Eye Bank procedures from 2003 to 2006 that involved sensitization of people to Eye Donation, collection of eyeballs from deceased donors, cold-chain transport to eye bank, harvesting, processing and grading of tissue</li>
                         <li>Comprehensive Surgical and Administrative work experience as Second in charge Ophthalmic surgeon in Dhankot Hospital, a secondary level satellite hospital of Venu Eye Institute and Research Centre in 2006</li>
                         <li>Experience in setting up Eye clinic and Daycare Operative unit as Consultant Ophthalmologist and Surgeon in Lifeline Healthcare Hospital, Gurgaon in 2006</li>
                      </ul>
                   </div>
              </div>
              <div>
              <div className="profile-information2">
                   <p>I had gall bladder problem & also borderline sugar issues. I consulted few doctors in Gwalior, had undergone various treatments but was not satisfied. A friend told me about Dr. Patro and I thought of second opinion. Hence, I came to Delhi to consult Dr. Patro at Major. Dr. Patro is very compassionate & he heard all my daily struggles. I am impressed with the way Major team handled my problem, help me in getting better & changing my approach towards my lifestyle. Major Hospital provides the Best Treatment For Diabetes In India. All staff at Major are very helpful & dedicated to their work. I never felt that I am a patient here, but always felt like friend, or like a member of family.</p>
                   <img className=" float-right kota" src={kota} alt="" />
              </div>
                 <div className="deepak1 mt-4">
                 <p className="deepak">Mr. Deepak Jain</p>
                 <p className="deepak">LIC Agent, Gwalior</p>
                 </div>
              </div>
          </div>

          <div className="doctor-contact">
               <div className="doctor-contact1">
                 <h2>Contact Details</h2>
                 <div className="doctor-number flex items-start justify-between">
                    <div className="numberji mt-4">
                     <div className="number flex items-center">
                         <img src={phonebhai} alt="" />
                         <p>1800 8333 238</p>
                     </div>
                     <div className="number flex items-center mt-2">
                         <img src={emailbhai} alt="" />
                         <p>info@localhost</p>
                     </div>
                     </div>
                     <div className="locat flex items-start">
                        <img src={locbhai} alt="" />
                        <p>Plot # 1Malibu TowneSector - 47, Gurugram</p>
                     </div>
                     <div className="social-p">
                       <h4>Social Profiles</h4>
                       <div className="img-flex mt-4 flex items-center justify-center">
                          <img src={fbbhai} alt="" />
                          <img className="ins" src={insbhai} alt="" />
                          <img className="ins" src={twitbhai} alt="" />
                          <img className="ins" src={linkbhai} alt="" />
                       </div>
                     </div>
                 </div>
               </div>
               <div className="doctor-contact3">
               <div className="doctor-contact2">
                  <p>Major has helped me in dealing with my diabetes & the kind of attention they have shown, I am amazed. Now I know how to deal with my diabetes & this has changed my life completely.</p>
               </div>

               <div className="deepak1 mt-4">
                 <p className="deepak">Bindu Gupta</p>
                 <p className="deepak">House Wife,, Gurugram</p>
                 </div>

               </div>
          </div>
      </div>
        )
      })
    }
  
    </>
  );
};

export default CardiologyDetails;
