import React, { useState } from "react";
import analytic from '../../images/analytic.png';
import paste from '../../images/paste.png';
import ApointmentPopup from "../../popup/ApointmentPopup";
import stereo from '../../images/stereo.png';
import cardiologyApi from "../../api/cardilogiApi";
import { Link } from "react-router-dom";
const Cornary = ({apointPop,setApointPop}) => {
  const [tabIndex, setTabIndex] = useState(1);
  const [item,setItem] = useState(cardiologyApi);
  const [visible,setVisible] = useState(4);

  const showMoreDoctore = () =>{
      setVisible((prevValue)=> prevValue + 4);
  }

  const tabAnother = (e) => {
    e.preventDefault();
    setTabIndex(1);
    document.getElementById("one").style.background="none"
    document.getElementById("two").style.background="#F2F2F2"
    document.getElementById("three").style.background="#F2F2F2"
    document.getElementById("four").style.background="#F2F2F2"
  };

  const tabAnother1 = (e) => {
    e.preventDefault();
    setTabIndex(2);
    document.getElementById("one").style.background="#F2F2F2"
    document.getElementById("two").style.background="none"
    document.getElementById("three").style.background="#F2F2F2"
    document.getElementById("four").style.background="#F2F2F2"
  };

  const tabAnother2 = (e) => {
    e.preventDefault();
    setTabIndex(3);
    document.getElementById("one").style.background="#F2F2F2"
    document.getElementById("two").style.background="#F2F2F2"
    document.getElementById("three").style.background="none"
    document.getElementById("four").style.background="#F2F2F2"
  };

  const tabAnother3 = (e) => {
    e.preventDefault();
    setTabIndex(4);
    document.getElementById("one").style.background="#F2F2F2"
    document.getElementById("two").style.background="#F2F2F2"
    document.getElementById("three").style.background="#F2F2F2"
    document.getElementById("four").style.background="none"
  };
  return (
    <>
      <div className="cornary-back">
        <div className="cornary-sect">
          <h2>Coronary Artery Disease</h2>
        </div>
      </div>
      <div className="coronary-artery">
        <h3 className="text-center">What is Coronary Artery Disease?</h3>
        <div className="artery-para">
          <p>
            Coronary arteries are the major blood vessels that carry blood,
            oxygen, and nutrients to the heart. Coronary artery disease develops
            when your coronary artery gets damaged or afflicted. The building up
            of plaques causes the arteries to become narrow, thereby decreasing
            the flow of blood to the heart. Gradually, the decrease in the flow
            of blood may result in angina or chest pain, shortness of breath,
            and other symptoms. If there is a complete blockage, it may result
            in a heart attack.
          </p>
          <p className="mt-2">
            Coronary artery disease gets developed over decades, and, therefore,
            can go unnoticed until the last phase of heart attack. Timely
            medication and preventive actions contribute a great deal. You could
            start by committing to a healthy lifestyle.
          </p>
        </div>

        <div className="symtoms mt-5">
          <div className="symtoms-navbar">
            <div id="one" onClick={tabAnother} className="head-symtom">
              <h2>Symptoms</h2>
            </div>
            <div id="two" onClick={tabAnother1} className="head-symtom">
              <h2>Causes</h2>
            </div>
            <div id="three" onClick={tabAnother2} className="head-symtom">
              <h2>Risks</h2>
            </div>
            <div id="four" onClick={tabAnother3} className="head-symtom">
              <h2>Preventions</h2>
            </div>
          </div>
          {tabIndex === 1 && (
            <>
              <div className="symtops-topic">
                <h2>Symptoms</h2>
                <p>
                  The most significant symptom of coronary artery disease is
                  chest pain, or angina. It is usually mistaken for heartburn or
                  ingestion. Angina can be characterized with pressure, ache,
                  burning sensation, numbness, squeezing in the chest.
                  Sometimes, it can also be experienced in the arms, left
                  shoulder, jaw, neck or back.Other symptoms might be –Faster
                  heartbeat.Dizziness or weakness.Shortness of
                  breath.Nausea.Palpitations – Irregular heartbeats or skipped
                  heartbeats.Excessive sweating.
                </p>
              </div>
            </>
          )}

          {tabIndex === 2 && (
            <>
              <div className="symtops-topic">
                <h2>Causes</h2>
                <p>
                  The most significant symptom of coronary artery disease is
                  chest pain, or angina. It is usually mistaken for heartburn or
                  ingestion. Angina can be characterized with pressure, ache,
                  burning sensation, numbness, squeezing in the chest.
                  Sometimes, it can also be experienced in the arms, left
                  shoulder, jaw, neck or back.Other symptoms might be –Faster
                  heartbeat.Dizziness or weakness.Shortness of
                  breath.Nausea.Palpitations – Irregular heartbeats or skipped
                  heartbeats.Excessive sweating.
                </p>
              </div>
            </>
          )}

          {tabIndex === 3 && (
            <>
              <div className="symtops-topic">
                <h2>Risks</h2>
                <p>
                  The most significant symptom of coronary artery disease is
                  chest pain, or angina. It is usually mistaken for heartburn or
                  ingestion. Angina can be characterized with pressure, ache,
                  burning sensation, numbness, squeezing in the chest.
                  Sometimes, it can also be experienced in the arms, left
                  shoulder, jaw, neck or back.Other symptoms might be –Faster
                  heartbeat.Dizziness or weakness.Shortness of
                  breath.Nausea.Palpitations – Irregular heartbeats or skipped
                  heartbeats.Excessive sweating.
                </p>
              </div>
            </>
          )}

          {tabIndex === 4 && (
            <>
              <div className="symtops-topic">
                <h2>Preventions</h2>
                <p>
                  The most significant symptom of coronary artery disease is
                  chest pain, or angina. It is usually mistaken for heartburn or
                  ingestion. Angina can be characterized with pressure, ache,
                  burning sensation, numbness, squeezing in the chest.
                  Sometimes, it can also be experienced in the arms, left
                  shoulder, jaw, neck or back.Other symptoms might be –Faster
                  heartbeat.Dizziness or weakness.Shortness of
                  breath.Nausea.Palpitations – Irregular heartbeats or skipped
                  heartbeats.Excessive sweating.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="diagonsid">
           <img src={analytic} alt="analytuc" />
           <h3 className="text-center mt-3">How is it diagnosed?</h3>
           <p  className="text-center mt-3">At Major, your doctor might use any of these methods for diagnosis of the complexity of your problem –</p>

             <div className="electromagnetic flex items-center justify-center mt-8">
                 <ul className="">
                    <li>Electrocardiogram (ECG)</li>
                    <li className="mt-3">Cardiogram</li>
                    
                 </ul>
                 <ul className="">
                    <li>Stress Test</li>
                    <li className="mt-3">Angiogram</li>
                    
                 </ul>
                 <ul className="">
                    <li>CT Scan</li>
                    <li className="mt-3">CT Coronary Angiogram</li>
                   
                 </ul>
             </div>
        </div>
      </div>
     <div className="ysu">
      <div className="ytment">
          <div className="ytment-sect">
              <img src={paste} alt="" />
              <h3>How is it treated?</h3>
              <p>The various methods employed to treat coronary artery disease are – </p>
          </div>
          
      </div>
      <div className="changin-lifestyle">
         <div className="lifestyle">
           <ul>
             <li>Changing Lifestyle</li>
           </ul>
           <p>It would be a benefit you a lot if you eat healthy food, shred the extra pounds, quit smoking and excessive drinking habits, exercise regularly, and reduce stress in life.</p>
         </div>
         <div className="lifestyle mt-5">
           <ul>
             <li>Taking Medication</li>
           </ul>
           <p>It would be a benefit you a lot if you eat healthy food, shred the extra pounds, quit smoking and excessive drinking habits, exercise regularly, and reduce stress in life.</p>
         </div>
         <div className="lifestyle mt-5">
           <ul>
             <li>Surgeries</li>
           </ul>
           <p>It would be a benefit you a lot if you eat healthy food, shred the extra pounds, quit smoking and excessive drinking habits, exercise regularly, and reduce stress in life.</p>
         </div>
      </div>
      <div className="when-contact">
          <h3>When to contact a doctor?</h3>
          <p>If you have risk factors for coronary artery disease, such as use of tobacco, high cholesterol, high blood pressure, or diabetes, talk to your doctor immediately. Your doctor might want to test you for the condition, if you have symptoms of narrowed arteries.</p>
          <button onClick={()=> setApointPop(true)}>Book An Appointment</button>
      </div>

        <div className="provide-car">
              <div className="provide-sect">
                 <h2>How does Major provide care?</h2>
              </div>
        </div>
      </div>

      <div className="stereo">
          <img className="stereo1" src={stereo} alt="stereo" />
          <h3 className="clo">Consult with experienced doctors</h3>
          <div className="sard ">
               {
                item.slice(0,visible).map((val,index)=>{
                   return(
                    <React.Fragment key={index}>
          <div className="card mt-6">
            <img className="main-img" src={val.images} alt="" />
            <div className="igh">
              <div className="name-card">
                <div className="text-card">
                  <h3>{val.name}</h3>
                  <p>{val.content}</p>
                  <p>{val.content1}</p>
                </div>
                <div className="viwe-profile">
                  <Link to={`/cardio/${val.id}`}>
                    <p>{val.view}</p>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="information-doc">
                <h3>{val.information}</h3>
                <p>{val.informationCont}</p>
                <p>{val.informationCont1}</p>
                <div className="tara flex ">
                  <img src={val.image1[0]} alt="" />
                  <img className="ml-1" src={val.image1[1]} alt="" />
                  <img className="ml-1" src={val.image1[2]} alt="" />
                  <img className="ml-1" src={val.image1[3]} alt="" />
                  <img className="ml-1" src={val.image1[4]} alt="" />
                </div>
                <button onClick={() => setApointPop(true)}>
                  {val.appoint}
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
                   )
                })
               }
          </div>
          <button className="stereo-but" onClick={()=> setApointPop(true)}>Book An Appointment</button>
          <p onClick={showMoreDoctore} className="fee_more">See more Doctors</p>
      </div>

      <div className="have-question">
          <div className="question-sect">
               <h3>Have a question?</h3>
               <h3>Call us +91 - 123-456-789</h3>
          </div>
      </div>

      {
        apointPop && <ApointmentPopup setApointPop={setApointPop}/>
      }
    </>
  );
};

export default Cornary;
