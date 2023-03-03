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

  const [tab,setTab] = useState(1);

  const aruntTab = (e) =>{
     e.preventDefault();
     setTab(1);
     document.querySelector(".www").style.backgroundColor="#FDC91E";
        document.querySelector(".xxx").style.backgroundColor="#D30806";
        document.querySelector(".yyy").style.backgroundColor="#D30806";
        document.querySelector(".zzz").style.backgroundColor="#D30806";

        document.querySelector(".www").style.color="#000000";
        document.querySelector(".xxx").style.color="#ffffff";
        document.querySelector(".yyy").style.color="#ffffff";
        document.querySelector(".zzz").style.color="#ffffff";
  }

  const aruntTab1 = (e) =>{
    e.preventDefault();
    setTab(2);
     document.querySelector(".www").style.backgroundColor="#D30806";
    document.querySelector(".xxx").style.backgroundColor="#FDC91E";
    document.querySelector(".yyy").style.backgroundColor="#D30806";
    document.querySelector(".zzz").style.backgroundColor="#D30806";

     document.querySelector(".www").style.color="#ffffff";
        document.querySelector(".xxx").style.color="#000000";
        document.querySelector(".yyy").style.color="#ffffff";
        document.querySelector(".zzz").style.color="#ffffff";
  }

  const aruntTab2 = (e) =>{
    e.preventDefault();
    setTab(3);
     document.querySelector(".www").style.backgroundColor="#D30806";
    document.querySelector(".xxx").style.backgroundColor="#D30806";
    document.querySelector(".yyy").style.backgroundColor="#FDC91E";
    document.querySelector(".zzz").style.backgroundColor="#D30806";

     document.querySelector(".www").style.color="#ffffff";
        document.querySelector(".xxx").style.color="#ffffff";
        document.querySelector(".yyy").style.color="#000000";
        document.querySelector(".zzz").style.color="#ffffff";
  }

  const aruntTab3 = (e) =>{
    e.preventDefault();
    setTab(4);
    document.querySelector(".www").style.backgroundColor="#D30806";
    document.querySelector(".xxx").style.backgroundColor="#D30806";
    document.querySelector(".yyy").style.backgroundColor="#D30806";
    document.querySelector(".zzz").style.backgroundColor="#FDC91E";

    document.querySelector(".www").style.color="#ffffff";
        document.querySelector(".xxx").style.color="#ffffff";
        document.querySelector(".yyy").style.color="#ffffff";
        document.querySelector(".zzz").style.color="#000000";
  }

  // =============another==================
  const tabAnother = (e) =>{
        e.preventDefault();
        setTabIndex(1);
        document.querySelector(".abc").style.backgroundColor="#FDC91E";
        document.querySelector(".def").style.backgroundColor="#D30806";
        document.querySelector(".ghi").style.backgroundColor="#D30806";
        document.querySelector(".jkl").style.backgroundColor="#D30806";
        document.querySelector(".mno").style.backgroundColor="#D30806";
        document.querySelector(".pqr").style.backgroundColor="#D30806";
        document.querySelector(".abc").style.color="#000000";
        document.querySelector(".def").style.color="#ffffff";
        document.querySelector(".ghi").style.color="#ffffff";
        document.querySelector(".jkl").style.color="#ffffff";
        document.querySelector(".mno").style.color="#ffffff";
        document.querySelector(".pqr").style.color="#ffffff";
  }
  const tabAnother1 = (e) =>{
    e.preventDefault();
    setTabIndex(2);
    document.querySelector(".abc").style.backgroundColor="#D30806";
    document.querySelector(".def").style.backgroundColor="#FDC91E";
    document.querySelector(".ghi").style.backgroundColor="#D30806";
    document.querySelector(".jkl").style.backgroundColor="#D30806";
    document.querySelector(".mno").style.backgroundColor="#D30806";
    document.querySelector(".pqr").style.backgroundColor="#D30806";

    document.querySelector(".abc").style.color="#ffffff";
    document.querySelector(".def").style.color="#000000";
    document.querySelector(".ghi").style.color="#ffffff";
    document.querySelector(".jkl").style.color="#ffffff";
    document.querySelector(".mno").style.color="#ffffff";
    document.querySelector(".pqr").style.color="#ffffff";
  }

  const tabAnother2 = (e) =>{
    e.preventDefault();
    setTabIndex(3);
    document.querySelector(".abc").style.backgroundColor="#D30806";
    document.querySelector(".def").style.backgroundColor="#D30806";
    document.querySelector(".ghi").style.backgroundColor="#FDC91E";
    document.querySelector(".jkl").style.backgroundColor="#D30806";
    document.querySelector(".mno").style.backgroundColor="#D30806";
    document.querySelector(".pqr").style.backgroundColor="#D30806";

    document.querySelector(".abc").style.color="#ffffff";
    document.querySelector(".def").style.color="#ffffff";
    document.querySelector(".ghi").style.color="#000000";
    document.querySelector(".jkl").style.color="#ffffff";
    document.querySelector(".mno").style.color="#ffffff";
    document.querySelector(".pqr").style.color="#ffffff";
  }

  const tabAnother3 = (e) =>{
    e.preventDefault();
    setTabIndex(4);
    document.querySelector(".abc").style.backgroundColor="#D30806";
    document.querySelector(".def").style.backgroundColor="#D30806";
    document.querySelector(".ghi").style.backgroundColor="#D30806";
    document.querySelector(".jkl").style.backgroundColor="#FDC91E";
    document.querySelector(".mno").style.backgroundColor="#D30806";
    document.querySelector(".pqr").style.backgroundColor="#D30806";

    document.querySelector(".abc").style.color="#ffffff";
    document.querySelector(".def").style.color="#ffffff";
    document.querySelector(".ghi").style.color="#ffffff";
    document.querySelector(".jkl").style.color="#000000";
    document.querySelector(".mno").style.color="#ffffff";
    document.querySelector(".pqr").style.color="#ffffff";
  }

  const tabAnother4 = (e) =>{
    e.preventDefault();
    setTabIndex(5);
    document.querySelector(".abc").style.backgroundColor="#D30806";
    document.querySelector(".def").style.backgroundColor="#D30806";
    document.querySelector(".ghi").style.backgroundColor="#D30806";
    document.querySelector(".jkl").style.backgroundColor="#D30806";
    document.querySelector(".mno").style.backgroundColor="#FDC91E";
    document.querySelector(".pqr").style.backgroundColor="#D30806";

    document.querySelector(".abc").style.color="#ffffff";
    document.querySelector(".def").style.color="#ffffff";
    document.querySelector(".ghi").style.color="#ffffff";
    document.querySelector(".jkl").style.color="#ffffff";
    document.querySelector(".mno").style.color="#000000";
    document.querySelector(".pqr").style.color="#ffffff";
  }

  const tabAnother5 = (e) =>{
    e.preventDefault();
    setTabIndex(6);
    document.querySelector(".abc").style.backgroundColor="#D30806";
    document.querySelector(".def").style.backgroundColor="#D30806";
    document.querySelector(".ghi").style.backgroundColor="#D30806";
    document.querySelector(".jkl").style.backgroundColor="#D30806";
    document.querySelector(".mno").style.backgroundColor="#D30806";
    document.querySelector(".pqr").style.backgroundColor="#FDC91E";

    document.querySelector(".abc").style.color="#ffffff";
    document.querySelector(".def").style.color="#ffffff";
    document.querySelector(".ghi").style.color="#ffffff";
    document.querySelector(".jkl").style.color="#ffffff";
    document.querySelector(".mno").style.color="#ffffff";
    document.querySelector(".pqr").style.color="#000000";
  }

  return (
    <>
    {
      details.map((val,index)=>{
        return(
          <div>
          <div className={`aruniti ${val.fg}`} key={index}>
          <div>
          <div className="tangiji flex items-start justify-between">
              <div className="first-tanji">
              <h1>{val.name}</h1>
                   <p>{val.content}</p>
                   <div className="hod"></div>
              </div>
              <div className="second-tanji">
              <div className="broucher">
                         <img src={broucher} alt="broucher" />
                          <h3>Hospital Brochure</h3>
                     </div>
              </div>
          </div>
          <div className="profile-doctor">
               <div className="profile-doctor1">
                   <div className=" text-right">
                   <img src={val.images} alt="images" />
                   </div>
               </div>
               <div className="educarion">
                  <h2>Education</h2>
                  <ul>
                    <li>Completed MBBS Degree with Rotation Internship from MKCG Medical College and Hospital, a 700 Bedded hospital in Berhampur, Odisha (1990-1995)</li>
                  </ul>
               </div>
               <div className="expertise">
                   <h2>Area of Expertise</h2>
                   <ul>
                    <li>Diabetes management</li>
                    <li>Thyroid disorder</li>
                    <li>Obesity & related disorder</li>
                   </ul>
               </div>
               <div className="profile-doctor2">
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
          <div className="group-detail-btn">
                       <button  onClick={tabAnother} className="qualiy abc">Experience</button>
                       <button  onClick={tabAnother1} className="ml-3 def">Post MBBS</button>
                       <button  onClick={tabAnother2} className="ml-3 ghi">Ongoing Training</button>
                       <button  onClick={tabAnother3} className="ml-3 jkl">Awards & Achievements</button>
                   </div>
                   <div className="group-detail-btn group-details-btn">
                       
                       <button  onClick={tabAnother4} className="mno">Participations</button>
                       <button  onClick={tabAnother5} className="ml-3 pqr">Philanthropy</button>
                       
                   </div>
          </div>
          <div className="profil-information">
          <div>
              <div className="profile-information1">
                   <div className="ul">
                      {
                        tabIndex === 1 && (
                          <ul>
                      <li>My clinical handling mostly covers DIABETES, HEART, LUNG, and RHEUMATOLOGY.</li>
                         <li>I follow a Protocol Based Practice, which includes strict planning and management of all the cases for accurate diagnosis and management based on modern Evidence Based Medicine.</li>
                         <li>My practice in Major includes handling of Pre-Diabetics and Major, as well as Management of complications and sequelae of diabetes. An important aspect of this is Diabetes Education, Counselling, Life Style modifications and Dietary interventions.</li>
                         <li>My practice also caters to Weight loss and Obesity management, Metabolic disease management and THYROID dysfunctions.</li>
                         <li>
                         I am an avid practitioner of Podiatry and FOOT Care with Modern techniques of wound stabilisation with VAC and r-Tissue therapy. My clinic has a dedicated Diabetes Foot Care Department.
                         </li>
                         <li>
                         I also manage early Diabetes Kidney Disease with emphasis on practices that facilitate prevention of Kidney dysfunction in Diabetes. I am well versed with procedures such as tapping of Ascitis for management of Diabetes sequelae.
                         </li>
                         <li>
                         Our clinic applies modern applications of DIABETES Investigation methods such as Remote SENSPRO & CGMS methods of Blood sugar monitoring, 24 hours ABPM, PODIASCANS, CANS-Assessing the Neurological and dysautonomia syndromes of Diabetes complications, Spirometry, ECG, 24hour Holter monitoring, Ankle Brachial index calculations, Vascular Doppler study for Diabetes patients, Retina screening and Fundoscopy, Biochemistry analysis of Blood, instant HbA1c% by new technique, and Micralbumin to Assess kidney disease in Diabetes to name a few.
                         </li>
                         <li>
                         Our clinic applies modern applications of DIABETES Investigation methods such as Remote SENSPRO & CGMS methods of Blood sugar monitoring, 24 hours ABPM, PODIASCANS, CANS-Assessing the Neurological and dysautonomia syndromes of Diabetes complications, Spirometry, ECG, 24hour Holter monitoring, Ankle Brachial index calculations, Vascular Doppler study for Diabetes patients, Retina screening and Fundoscopy, Biochemistry analysis of Blood, instant HbA1c% by new technique, and Micralbumin to Assess kidney disease in Diabetes to name a few.
                         </li>
                         <li>
                         I am comfortable carrying out Surgical Interventions such as VATS, Bronchoscopy, and Intrathoracic Tube Insertion to treat Pneumothorax and Effusions.
                         </li>
                         <li>
                         I have treated Pulmonary embolism, DVT, ARDS, and ALI cases and have handled both Invasive and Non-Invasive Ventilation in EMERGENCY and ICU by Airway Management, Tracheostomy, Arterial Blood Gas Analysis etc.
                         </li>
                         <li>
                         I am well versed with Sleep study and have Polysomnography conducted for cases such as Obese Sleep Disorder
                         </li>
                         <li>
                         In my Cardiology practice I have handled cases of Myocardial Ischemia, Myocardial Infarct, Angina, and Non specific chest pain cases. I have conducted procedures such as Central vascular catheterisation and peripheral vascular short procedures and am well versed with cardiac monitoring. I am trained to conduct and analyse reports of Echocardiography.
                         </li>
                         <li>I routinely manage cases with Hypertension in my practice including cases with Acclerated Hypertension, Malignant Hypertension and Peripheral vascular diseases such as Deep vein Thrombosis (DVT).</li>
                         <li>
                         In Rheumatology I have handled cases of Rheumatic arthritis, Psoriatic Arthritis, SLE, Dermatosclerosis, Vasculitis disorders and Gouty Arthritis and have witnessed and handled Wegener Granulomatosis and Polyarteritis vasculitis
                         </li>
                      </ul>
                        )
                      }

                      {
                        tabIndex === 2 && (
                          <ul>
                      <li>
                      Intensive Cardiology and Emergency (1996-1998)
                      <ul>
                          <li>AIIMS New Delhi (2600 Bedded Apex Tertiary care institute)</li>
                          <li>LHMC New Delhi (600 Bedded Apex Tertiary care institute)</li>
                      </ul>
                      </li>
                         <li>
                           Comprehensive Training in Internal MEDICINE and ICU (1998-2000)
                           <ul>
                              <li>VIMHANS New Delhi (250 Bedded Tertiary care institute)</li>
                           </ul>
                         </li>

                         <li>
                           Comprehensive Training in CRITICAL CARE (2000-2002)
                           <ul>
                              <li>APOLLO Hospitals New Delhi (700 Bedded Tertiary care Institute)</li>
                           </ul>
                         </li>
                         <li>
                         Comprehensive Respiratory, Sleep and Critical Care Training – DNB (2002-2005)
                         <ul>
                           <li>National TB Inst (LRS Inst of TB & Allied Diseases) New Delhi (200 Bedded Tertiary care institute)</li>
                         </ul>
                         </li>
                         <li>
                         Interventional Bronchoscopy Hands On Training Certified Course – MAX New Delhi & Italy (Dr. Herve Dutau) (2011)
                         </li>
                         <li>
                         Post Graduate Diploma in Cardiology (IMA –AKS Institute, Patna) (2011)
                         </li>
                         <li>
                         Post Graduate Diploma in ECHOCARDIOGRAPHY (Global Open University) (2011)
                         </li>
                         <li>
                         BMJ Learning Certified Course in HYPERTENSION – (UK) (2011)
                         </li>
                         <li>
                         FCCS – Critical Care Medicine (Society of Critical Care Medicine-California-USA) (2011)
                         </li>
                         <li>
                           DIABETOLOGY Fellowship from PHFI-INDIA (CCEBDM) (2011)
                         </li>
                         <li>
                         Post Graduate Diploma in Rheumatology (IMA-AKS institute, Patna) (2012)
                         </li>
                         <li>
                         Advanced Clinical Course in Cardiology (ACCC 2012)
                         </li>
                         <li>Post Graduate Diploma in Cardiology (John Hopkins USA, Reg no. C104/HM/01/01/0478) (2013)</li>
                         <li>
                         Diploma in Emergencies in Cardiology (Boston University USA) (2014)
                         </li>
                         <li>American College of Gastroenterology – Certified Recognition for Medical Knowledge in Gastroenterology (2014)</li>
                         <li>Certified Course on IBS in INDIA (John Hopkins Medicine) (2015)</li>
                         <li>Successfully cleared American Heart Association critical ASSESSMENT in Selected issues in Hypertension Programme (2015)</li>
                         <li>Royal College of Physicians UK: Certified Course on GERD, (RCP Code 95000) (2016)</li>
                         <li>Certified PGCAT –THYROID Disorder – TOTALL Diabetes Hormone Institute, Indore, INDIA (2016)</li>
                         <li>Certified PGCDM – DIABETES – TOTALL Institute of Health Education/Hormone Institute, Indore, INDIA (2016)</li>
                         <li>Cleveland Clinic annual upgradation – Advanced Certification Course in DIABETES (Diabetes & Obesity Centre, New Delhi) (2011-2016)</li>
                         <li>Member of American College of Physicians (MACP) (USA) (2016)</li>
                      </ul>
                        )
                      }

                      {
                        tabIndex === 3 && (
                          <ul>
                      <li>
                      Post Graduate Diploma DIABETES – Cardiff University (UK) (2016-2018)
                      </li>
                         <li>
                         Fellowship in Diabetes Management–Arthur Martin Christian Medical University (India) (2017)
                         </li>

                         <li>
                         Diploma – Advanced Course in Hospital Management –eUnivMedReach-Hyderabad, INDIA (2017)
                         </li>
                         <li>
                         Certificate Course in MEDICAL LAW For Doctors – Esteemed Deemed Institute of LAW in Medicine, INDIA (2016-2017)
                         </li>
                         <li>
                         MRCP (General Medicine) – London (UK) (2016-2018)
                         </li>
                         <li>
                         MRCP (General Medicine) – Dublin (Ireland) (2016-2018)
                         </li>
                      </ul>
                        )
                      }

                      {
                        tabIndex === 4 && (
                          <ul>
                      <li>
                      Award of Excellence in DIABETES EDUCATION PROGRAMME by DIABETES INDIA & Asian Society of Continuing Medical Education
                      </li>
                         <li>
                         FCRD & RES Med Academy Foundation Sydney Clinician Participation Award for NIV Summit on CRITICAL CARE, Australia
                         </li>

                         <li>
                         LIFE Member Award for Diabetic Foot Care by Indian Podiatry Association
                         </li>
                         <li>
                         LIFE Member Award for IMACGP, India
                         </li>
                         <li>
                         LIFE TIME Endorsement Award for Diabetic Foot Salvage by DIABETES INDIA
                         </li>
                         <li>
                         ACLS Certification Award for Life Saving by American Heart Association and FCCS USA
                         </li>
                         <li>MACP – by American College OF Physicians</li>
                         <li>Awarded for “TARGET” research and management in reducing the burden of Hypertension in India by World Hypertension League – South Asia Region.</li>
                         <li>LIFE MEMBER AWARD from Red Cross Society of India for Blood Donation and Life saving activities</li>
                         <li>BEST CITIZEN AWARD – by GURGAON TIMES, a leading Newspaper of Haryana, India</li>
                         <li>Guest Speaker in RADIO PROGRAMME ON DIABETES AWARENESS WITH DIRECT INTERACTION IN COMMUNITY RADIO – still going on In GURGAON KI AWAAZ –FM 107.6 MHz</li>
                         <li>2nd time consecutively Nominated For BEST DIABETELOGIST IN INDIA for Active Diabetes Awareness and Diabetes Management</li>
                      </ul>
                        )
                      }

                      {
                        tabIndex === 5 && (
                          <ul>
                      <li>
                      Critical Care Aspects of Otolaryngology – AOI –Golden Jubilee New Delhi (1998)
                      </li>
                         <li>
                         Critical Care Aspects of Surgical Oncology – Free Paper Presentation in NATCON, IASO India (2000)
                         </li>
                         <li>
                         Orientation course on Child Psychiatry and Behaviour in General Practice by IMA in VIMHANS India (2001)
                         </li>
                         <li>
                         Contemporary Global Perspective on Child & Adolescent Aggression – EXPRESSIONS 2001, India
                         </li>
                         <li>
                         Visiting Lecturer on MEDICINE and Pharmacology – CME Educations- Delhi Academy of Medical Sciences and Institute of Advanced Sciences, New Delhi (1998-2002)
                         </li>
                         <li>
                         Speaker in Cardio-Pulmonary Updates 2003- R&R Army Hospital, New Delhi, India (2003)
                         </li>
                         <li>Speaker and Delegate in Critical Care Symposium & Workshop ISCCM & APOLLO Hospitals, New Delhi, India (2003)</li>
                         <li>Delegate in NAPCON-Pulmonary Diseases, Ahmedabad India (2004)</li>
                         <li>Speaker in CME on Pulmonary Sleep Medicine at LRSI New Delhi, India (2005)</li>
                         <li>Speaker on Respiratory Critical Care at NATCON 2005, LRSI New Delhi, India (2005)</li>
                         <li>Speaker on Sleep Study in Clinical Practice at NATCON 2005, LRSI New Delhi 2005, India (2005)</li>
                         <li>Speaker in CME on Respiratory Critical Care Medicine, LRSI New Delhi, India (2005)</li>
                         <li>Delegate in Lung Cancer Updates at LRSI New Delhi, India (2006)</li>
                         
                         <li>Delegate in Pulmonology, Thoracic Surgery & Critical Care – New Horizons 2007 New Delhi, India (2007)</li>
                         <li>Delegate in Critical Care Conference –ISCCM Jaipur delegation – IAP- Jaipur Chapter, India (2007)</li>
                         <li>Delegate in JNC-Guidelines Delegation with American Heart Association and Punjab Medical Council, India (2011)</li>
                         <li>Diabetic Foot Care Society of India-Workshop Delegate-Ahmedabad, India (2011)</li>
                         <li>Cleveland Clinic USA Practical Diabetology Workshop Delegate (2011)</li>
                         <li>Research Society for the Study of Diabetes in India – Delhi Chapter Delegate (2011)</li>
                         <li>Delegate in Workshop on Practical Guidelines and Basis of POLYSOMNOGRAPHY & NIPPV in Obese patients in National Conference on Sleep Disorder, Chandigarh (2012)</li>
                         <li>Participated in Joint workshop of European Society of Cardiology and CAD and Cardiovascular society of India CAD (2013)</li>
                         <li>Delegate in World Congress on Practical & Diabetes Research and Diabetes in India (2013)</li>
                         <li>Attended JNC-Guideline delegation in HYPERTENSION Conclave –V (2014)</li>
                         <li>Delegate in IRACON 2014 in National Conference of Indian Rheumatology Association, PGIMER, Chandigarh (2014)</li>
                         <li>Attended Workshop by American Society of Hypertension & Asian Society of Continuing Medical Education on Annual India Conference Risk Summit in Conjunction with Best of ASH delegation Updates (2014)</li>

                         <li>JCP Cardiology – Echomedanta- Workshop delegation and participation under aegis of Haryana Medical Council (2014)</li>
                         <li>Workshop Participation and Delegate in IWGDF-(International Working Group on the Diabetic Foot) with Indian College of Physicians- in Diabetes Foot Education Programme (2014)</li>
                         <li>Active participation in ADVANCES IN DIABETES recognised by JOSLIN DIABETES CENTRE Boston USA for International Symposia on DIABETES (2014)</li>
                         <li>Delegate in Research society for the Study of Diabetes in INDIA, New Delhi (2014)</li>
                         <li>Speaker on Linagliptin a new revolution in Diabetes & Hypertriglyceredaemia, IDF International Diabetes Summit Boston USA (2015)</li>
                         <li>Active participation in Advancements in Diabetes – Diabetes Scientia – American Diabetes Association, Boston, MA, June 2015.</li>
                         <li>Delegate in Research society for the Study of Diabetes in INDIA, Lucknow (2015)</li>
                         <li>Active participation in INDIA RISK SUMMIT OF DIABETES AND CARDIOVASCULAR SYMPOSIUM under Aegis of European Society of Hypertension and American Society of Hypertension and Asian Society of Continuing medical Education (2015)</li>
                         <li>Active participation in TOP-Target Organ Protection in Hypertension 2015, an active delegation under the Aegis of World Hypertension League & Asian Society of CME India (2015)</li>
                         <li>Participant in Rheumatology CME – current perspectives in rheumatology, PGIMER Chandigarh, India 2015.</li>
                         <li>Resource person in Faculty/delegate in National Diabetes Foot Congress of 13th DFSICON 2015, Chandigarh – PGI Medical & Research Institute.</li>
                         <li>Paper presentation on DIABETIC FOOT CARE in DFSICON 2016, Aurangabad, under the Aegis of Diabetic Foot Care Society of India (2016)</li>
                         <li>Active participation in Indian Chapter Congress MEDICINE, under the Aegis of American College of Physicians (2016)</li>
                         <li>Attended Best of American Diabetes Association India Summit, Mumbai 2016.</li>
                         <li>ENDORSE (ENDOcrine & diabetes Regional dialogue SEries) Active delegation for DPP4 Inhibitors – LINAGLIPTIN in DIABETES 2016</li>
                         <li>Active delegation in RESEARCH SOCIETY FOR THE STUDY OF DIABETES IN INDIA –RSSDI –Hyderabad India (2016)</li>

                         <li>Participated in Workshop 3rd Advanced Certification Workshop in Diabetes,Cardiff University- 2016.</li>
                         <li>Active Participation and delegation in APICON 2016 for Association of Physicians of India, Hyderabad India (2016)</li>
                      </ul>
                        )
                      }

                      {
                        tabIndex === 6 && (
                          <ul>
                      <li>
                      We started our philanthropic activities in the form of “Chiranjeevi Bhavo” Mission in the nearby societies to increase Health Awareness around 9 to 10 years back. We have also been supporting the underprivileged community and poor rural areas for the past 8 plus years by providing free consultations, free tests and free distribution of medicines, which is well witnessed by various Charitable organisations and Renowned Media. I also get invited for Live Interactive Radio Programmes for Diabetes awareness every month.
                      </li>
                         <li>
                         Every year we organise free vaccination programmes and food supplement distributions to anaemic and malnourished street kids and adults of socioeconomically poor strata. We facilitate distribution of winter clothes and multivitamins to underpriviledged in nearby rural areas and urban slums. We have also made contributions towards establishing schools and procurement of study material for poor children from time to time.
                         </li>
                         <li>
                         The Eye Department at KPSpandan is run by my wife, Dr. Arundhati Kar, who has been doing charitable cataract surgeries every Wednesday in remote rural areas to reduce the load of preventable blindness for more than 12 years till date.
                         </li>
                         <li>
                         We have become an important charitable partner to Karuna Care Foundation and Health Care, Sohna Nangli. We have been organising and providing free health care facilities, especially for Diabetes and Allied Diseases, every third Sunday of each month regularly for the past 4 years. This includes Medical advice by Senior Consultants, free distribution of medicines and providing laboratory services to aid screening and early diagnosis of diabetes, hypertension and allied diseases.
                         </li>
                         <li>
                         We have been celebrating World Diabetes Day Annually for past 4 years in our innovative and creative way to educate majority of community to have a better understanding about diabetes, the possible complications and finally the management. This includes Street plays (Nukkad Natak) to increase health awareness, Quiz programmes, Panel discussions by Senior Consultants with general public, one to one interactive sessions, screening activities clinically and by laboratory diagnostic tests to name a few.
                         </li>
                      </ul>
                        )
                      }
                    
                   </div>
              </div>
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

          {/* <div className="doctor-contact">
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
          </div> */}
      </div>

      <div className={`aruniti ${val.gh}`} key={val.id}>
          <div>
          <div className="tangiji flex items-start justify-between">
              <div className="first-tanji">
              <h1>{val.name}</h1>
                   <p>{val.content}</p>
                   <div className="hod"></div>
              </div>
              <div className="second-tanji">
              <div className="broucher">
                         <img src={broucher} alt="broucher" />
                          <h3>Hospital Brochure</h3>
                     </div>
              </div>
          </div>
          <div className="profile-doctor">
               <div className="profile-doctor1">
                   <div className=" text-right">
                   <img src={val.images} alt="images" />
                   </div>
               </div>
               {/* <div className="educarion">
                  <h2>Education</h2>
                  <ul>
                    <li>Completed MBBS Degree with Rotation Internship from MKCG Medical College and Hospital, a 700 Bedded hospital in Berhampur, Odisha (1990-1995)</li>
                  </ul>
               </div>
               <div className="expertise">
                   <h2>Area of Expertise</h2>
                   <ul>
                    <li>Diabetes management</li>
                    <li>Thyroid disorder</li>
                    <li>Obesity & related disorder</li>
                   </ul>
               </div> */}
               <div className="profile-doctor2">
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
          <div className="group-detail-btn">
                       <button  onClick={aruntTab} className="qualiy abc www">Qualifications</button>
                       <button  onClick={aruntTab1} className="ml-3 xxx def">Clinical Experience</button>
                       <button  onClick={aruntTab2} className="ml-3 yyy ghi">Research & Papers</button>
                       <button  onClick={aruntTab3} className="ml-3 zzz jkl">Awards & Achievements</button>
                   </div>
                   {/* <div className="group-detail-btn group-details-btn">
                       
                       <button id="mno" onClick={tabAnother4} className="">Participations</button>
                       <button id="pqr" onClick={tabAnother5} className="ml-3">Philanthropy</button>
                       
                   </div> */}
          </div>
          <div className="profil-information">
          <div>
              <div className="profile-information1">
                   <div className="ul">
                      {
                        tab === 1 && (
                          <ul>
                      <li>Completed MBBS Degree (1990-1995) with one year Rotating Internship (1995- 1996) from MKCG Medical College and Hospital, a 700 Bedded hospital in Berhampur, Orissa</li>

                         <li>Comprehensive hands-on training in the Department of Pathology in All India Institute of Medical Sciences, New Delhi (2600 Bedded Apex Tertiary care institute) from 1997 to 1998</li>
                         <li>Intensive clinical training including OT (operation theatre) and ICU exposure in the Department of Anaesthesiology in All India Institute of Medical Sciences, New Delhi (2600 Bedded Apex Tertiary care institute) in 1998</li>
                         <li>Clinical and surgical training in the Department of Surgery in Lady Hardinge Medical College & Sucheta Kripalani Hospital, New Delhi (600 Bedded Apex Tertiary care institute) from 1998 to 1999</li>
                         <li>
                         Comprehensive training leading to independent patient handling and participation in clinical trials in Department of Psychiatry in Vidyasagar Institute of Mental Health and Neurosciences, New Delhi (250 Bedded Tertiary care institute) from 1999 to 2001
                         </li>
                         <li>
                         Comprehensive Surgical and Clinical Training (DNB) in Ophthalmology in Venu Eye Institute arid Research Centre, New Delhi (200 Bedded Tertiary care institute with 5 secondary care satellite hospitals and 13 primary vision centers) from 2002 to 2005
                         </li>
                         <li>
                         Fellowship course in Low Vision Assessment and Prescription in Venu Eye Institute in 2005
                         </li>
                         <li>
                         Extensive training in Eye Bank procedures from 2003 to 2006 that involved sensitization of people to Eye Donation, collection of eyeballs from deceased donors, cold-chain transport to eye bank, harvesting, processing and grading of tissue
                         </li>
                         <li>
                         Comprehensive Surgical and Administrative work experience as Second in charge Ophthalmic surgeon in Dhankot Hospital, a secondary level satellite hospital of Venu Eye Institute and Research Centre in 2006
                         </li>
                         <li>
                         Experience in setting up Eye clinic and Daycare Operative unit as Consultant Ophthalmologist and Surgeon in Lifeline Healthcare Hospital, Gurgaon in 2006
                         </li>
                      </ul>
                        )
                      }

                      {
                        tab === 2 && (
                          <ul>
                      <li>
                      My present area of interest and expertise is in the field of Ophthalmology both clinical and surgical. I had logged more than 5000 successful surgeries by the time I completed my training in Ophthalmology in 2005. Since 2007 I have practiced independently associated with various Hospitals such as Lifeline Healthcare, Lall Eye Hospital, Centre for Sight, Arunodaya Deseret as visiting Consultant Ophthalmologist. I have also spearheaded setting up of the Eye Units at some of these places. I am also an accredited Assessor by Quality Council of India (QCI) and have inspected various Hospitals for continued and new empanelment with CGHS. Currently I am consultant in charge of the Ophthalmology unit of KP Spandan Clinic and Diagnostics.
                      </li>
                         <li>
                         I follow evidence and protocol-based guidelines in my clinical practice and surgical procedures. I am competent in diagnosing and suggesting management of a wide range of ophthalmological conditions including cataract, glaucoma, corneal, conjunctival, retinal and extraocular pathologies. I am actively involved in screening and treating the patients with Diabetic Eye Diseases in KP Spandan. The ophthalmology unit of KP Spandan is well equipped with all the diagnostic equipment such as slit lamp, applanation tonometer, gonioscope, direct and indirect ophthalmoscopes, retinoscope, refraction unit with contrast and colour vision assessment and mydriatic and non mydriatic fundoscope with camera to name a few.
                         </li>

                         <li>
                         Our Eye unit in KP Spandan is equipped to handle minor OPD procedures such as corneal foreign body removal. For additional day-care procedures such as YAG capsulotomy and iridotomy, FFA, OCT, Humphrey visual field assessment, PRP of retina and AntiVEGF intravitreal injection I currently take my patients to various hospitals in Gurgaon where I have independent procedure rights.
                         </li>
                         <li>
                         For Surgical procedures I currently have operation rights as visiting surgeon in many Hospitals in Gurgaon. I am competent in usual ophthalmological surgeries including Microincision cataract surgery with foldable IOL through Phacoemulsification, Trabeculectomy, Pterygium excision and conjunctiva! autograft, Nasolacrymal duct surgeries, corneoscleral tear repair and lid surgeries with good post surgical results.
                         </li>
                         <li>
                         I also have a competent ophthalmic referral system in place with my fellow ophthalmologists to handle cases that require further specialised care like retina surgery.
                         </li>
                         <li>
                         Presently I am a successful Ophthalmologist practicing along with my husband Dr. T. Rajdev Patro in our organisation by the name KP SPANDAN CLINIC AND DIAGNOSTICS, since June 2008. We cater to around 7 lakh population of Gurgaon City. I am especially popular for ophthalmic diagnosis and management of young children and elderly who are usually uncooperative for examination elsewhere.
                         </li>
                         <li>
                         Additionally I also look after the Administration of KP Spandan Clinic and Diagnostics including processes and protocols, staff coordination, patient interaction and Visiting Doctor relations.
                         </li>
                      </ul>
                        )
                      }

                      {
                        tab === 3 && (
                          <ul>
                      <li>
                      Co-investigator in an International, Double-blind, Placebo-controlled clinical drug trial for patients with Acute Mania from 2000 to 2001
                      </li>
                         <li>
                         Thesis submitted and accepted in 2005 titled – “Study of astigmatism in two-point Scleral fixated Posterior chamber intraocular lens implants.”
                         </li>

                         <li>
                         Conducted a study comparing Tonoscreen-20, an experimental device to measure intraocular pressure, with Goldmann applanation tonometry in 2006
                         </li>
                         <li>
                         Participated in Pre Congress CME program on Child and Maternal Health under the aegis of FOGS! at Pune in 1996
                         </li>
                         <li>
                         Participated and contributed to scientific deliberations in 50th Annual Conference of Otolaryngologists at New Delhi in 1998
                         </li>
                         <li>
                         Presented Free Paper on Impact of Malnutrition on Pregnant Women and Fetus at All Orissa Conference of Obstetrics and Gynecology at Rourkela in 1998
                         </li>
                         <li>
                         Participated and contributed to Workshop on Reproductive and Child Health Care at Rourkela, Orissa, in 1999
                         </li>
                         <li>Participated in 51st Annual Conference Association of Otolaryng’ologists of India at Guwahati, Assam in 1999</li>
                         <li>Presented a free paper at The National Conference of Indian Association of Surgical Oncology held from 15th -17th September 2000 at Puri, Orissa</li>
                         <li>Presented paper titled “Psychological changes in patients suffering from chronic sinusitis” at 52nd Annual Conference of Association of Otolaryngologists held at Cochin on 7th January 2000</li>

                         <li>Presented paper on Prevalence and Prevention of Rhinosporidiosis at Annual Conference of Otolaryngologists of India, Orissa State Branch at Cuttack, Orissa in 2001</li>
                         <li>Delivered Lectures on “Panic Disorder”, Attention Deficit Hyperactivity Disorder” and “Alcohol Dependence” in The Third Orientation Course in Clinical Psychiatry and Allied Behavioral Sciences For Family Physicians at New Delhi in 2001</li>
                         <li>Participated in Expressions 2001, a school based pilot project on holistic health and was part of panel discussion on Contemporary Global Perspectives on Child and Adolescent Aggression at VIMHANS, New Delhi in 2001</li>
                         <li>Presented Paper with poster presentation on a new technique for screening intraocular pressure at XVth Annual Conference of Glaucoma Society of India, at Ahmedabad, December 2005</li>
                         <li>Actively involved in Teaching programs for students of 3 year Optometry Degree courses at Venu Eye Institute and Research Centre from 2002 to 2006</li>
                         <li>Participated as Delegate cum Faculty member in Conference for Genital Tuberculosis & Infertility at Southend Fertility and IVF Centre, New Delhi in 2012</li>
                         <li>Delegate and active participant in Annual and Mid-term conferences of Delhi Ophthalmological Society (DOS) 2002 onwards till date</li>
                      </ul>
                        )
                      }

                      {
                        tab === 4 && (
                          <ul>
                      <li>
                      LIFE Member Award for IMACGP, India
                      </li>
                         <li>
                         LIFE MEMBER AWARD from Red Cross Society of India for Blood Donation and Lifesaving activities
                         </li>

                         <li>
                         Awarded by Impact India Foundation, An International Initiative Against Avoidable Disablement promoted by UNDP, UNICEF and WHO for rendering voluntary services to The Lifeline Express, the world’s first Hospital on a train
                         </li>
                         <li>
                         Awarded by Village Panchayat of Palra, Gurgaon for Organizing Child Eye Screening Program
                         </li>
                         <li>
                         Awarded by Seva Bharti Gurugram for continued support to Eye Camp for underprivileged in the urban slums in and around Gurgaon
                         </li>
                         <li>
                         Life Member of Delhi Ophthalmological Society
                         </li>
                         <li>Advisor to Nazar Nawaz Charitable Eye Foundation and Hospital in Nuh, Mewat Dist. Haryan</li>
                      </ul>
                        )
                      }
                   </div>
              </div>
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
      </div>
        </div>
      
        )
      })
    }
  
    </>
  );
};

export default CardiologyDetails;
