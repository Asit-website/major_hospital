import React, { useState } from 'react';
import dotor from '../images/dotor.png';
import btn from '../images/btn.png'
import dawa from '../images/dawa.png'
import Frame from '../images/Frame.png'
import hath from '../images/hath.jpg'
import { Link } from 'react-router-dom';
import cardilogiApi from '../api/cardilogiApi'
import ApointmentPopup from '../popup/ApointmentPopup';
import ty from '../images/ty.png'
import ty1 from '../images/ty1.png'
import ty2 from '../images/ty2.png'

const InternalMedicine = ({apointPop,setApointPop}) => {
    const [item,setItem] = useState(cardilogiApi);
    const [visible,setVisible] = useState(3);

    const showMoreDoctore = () =>{
        setVisible((prevValue)=> prevValue + 3);
    }

  return (
    <>
            <div className="medicine-back">
                 <div className="medicine-sect">
                     <h2>Internal Medicine</h2>
                 </div>
            </div>

            <div className="about-some">
        <div className="about-institute about-int about-int1">
          <div className="institute">
            <h4>About the Gastroenterology</h4>
            <p>
            Internal medicine is a field of medicine that assists in the general treatment of a broad variety of diseases in a patient, including both common illnesses and complicated long-term medical disorders. Internal medicine specialists are known as ‘internists’ and the ‘doctor’s doctor’ because they are often called by other physicians to assist in solving diagnostic issues.
            </p>
            <p className='sond'>The following procedures are carried out in the department of internal medicine:</p>
            <p>
              <span className='fens'>Fine Needle Aspiration Cytology (FNAC): </span> This test is used to detect if a mass is cancerous. This technique is also used to screen for diseases of the salivary glands, thyroid, or lymph nodes.
            </p>
            <p>
            <span className='fens'>Pleural Aspiration</span> is a technique that includes introducing a needle or tube into the pleural space (the area between the lung and the chest wall) to remove excess fluid surrounding the lungs.
            </p>
            <p>
            <span className='fens'>Aspiration of a Liver Abscess:</span> The abscess (collection of pus) in the liver is drained and checked for illnesses.
            </p>
            <p>
            <span className='fens'>Ultrasound (US) Guided Liver Biopsy:</span> Ultrasound guidance is used to remove tissue samples
from the liver to identify liver dysfunctions, grade the disease, aid in prognosis, and design
particular treatment methods.
            </p>
          </div>
          <div className="institute-img">
            <img className="dov-img" src={dotor} alt="dotor" />
          </div>
        </div>
        <p className="hital">
          <span className='fens'>Lumbar Puncture:</span> Also known as a spinal tap, this technique involves collecting a sample of cerebrospinal fluid from your lower back using a needle (lumbar region). This test, also known as a blood flow study, utilises high-frequency sound waves to identify irregular blood flow in your arteries and veins.
        </p>
        <p className="hital">
          <span className='fens'>Ultrasound (US) Guided Pleural Tap:</span> A pleural tap, also known as thoracentesis, is used to drain excess fluid from the pleural area. The technique involves injecting a needle guided by ultrasonography into the body to eliminate excess fluid build up (called a pleural effusion). Ultrasound guidance has been shown to decrease the number of problems associated with pleural disease management treatments.
        </p>
      </div>

      <div className="step-follow">
        <h2>Why choose Major Hospital?</h2>
        <div className="step-color"></div>
        <h5>Major Hospital Department of Internal Medicine provides both inpatient and outpatient treatments for the management of patients with common and chronic illnesses, including primary care and hospital care. Infectious illnesses are a significant issue in this area, and the department deals with a huge number of them, including influenza, hepatitis, TB, pneumonia, malaria, endocarditis, acute fever and other tropical diseases. The department includes a facility for infectious patients who need isolation as well as an ICU (intensive care unit) that is fully equipped. <br />
Furthermore, we are concerned not just with the total amount and quality of treatment, but we are also becoming more dedicated to creating specialised programmes and improvements in care management to enhance patient satiety and safety.We in the Department of Internal Medicine are confident in our ability to achieve excellence in research, clinical treatment, and education.The department is dedicated to faculty development via continuing education programmes, as well as continual quality improvement in its services through the use of best practises.</h5>
      </div>

      <div className="treats">
        {/* <img  className='hath' src={hath} alt="hath" />
                <h2>What we treat</h2>
                <p className='treats-p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and scrambled it to make a type.</p>

                <div className="lorem">
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>

                <div className="treats-back">
                     <div className="treats-sect">
                          <h2>Our approach to treat you</h2>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                     </div>
                   
                </div> */}
        <div className=" relative">
          <div className="consult">
            <img className="hath" src={Frame} alt="" />
            <h3 className="exy mt-2">Consult with experienced doctors</h3>
            <div className="sard">
              {item.slice(0, visible).map((val) => {
                return (
                  <>
                    <div key={val.id} className="card card1">
                      <img className="main-img" src={val.images} alt="" />
                      <div className="igh">
                        <div className="name-card">
                          <div className="text-card">
                            <h3>{val.name}</h3>
                            <p>Senior Dental Expert at Major</p>
                            <p>Hospital Haryana</p>
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
                          <div className="tara flex">
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
                  </>
                );
              })}
            </div>
            <p onClick={showMoreDoctore} className="see_more cursor-pointer">
              See More Doctors
            </p>
          </div>
        </div>
      </div>

            <div className='our-blogs our-blogs2 py-2  px-10'>
              
              <h2 className='text-center text-3xl font-bold gast'>Internal Medicine Blogs</h2>
              <p className='stays text-center'>Stay up to date with our most recent news and updates</p>

              <div className='flex justify-center mt-10 blog-meta1 '>

                <div className='blog-card-main w-[45%] mx-5'>
                  <img className='h-[250px]' src={ty}/>
                  <div className='p-5'>
                      <div className='flex justify-between'>
                      <div className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                      <div className='text-sm font-semibold text-gray-600'>2 January 2023</div>
                    </div>
                    <div className='my-2 text-md text-[#222F3E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</div>
                    <div className='text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer'>Know More</div>
                  </div>
                  
                </div>

                <div className='blog-cards-secondary w-[45%] mx-5 blog-card-mar'>
                  <div className='blog-card-secondary flex mb-6 items-center'>
                    <img className='w-[300px] h-[200px]' src={ty1} />
                    <div className='text-sm p-5'>
                      <div className='flex justify-between my-2 blog-meta'>
                        <p className='font-bold'>Chronic Kidney Disease – The Silent Killer</p>
                        <p className='text-xs font-bold'>05 January</p>
                      </div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <div className='text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer mt-1'>Know More</div>
                    </div>
                  </div>

                  <div className='blog-card-secondary flex items-center'>
                    <img className='w-[300px] h-[200px]' src={ty2}/>
                    <div className='text-sm p-5'>
                      <div className='flex justify-between my-2'>
                        <p className='font-bold'>What to do when you have Stroke?</p>
                        <p className='text-xs font-bold'>13 January</p>
                      </div>
                      <p>Stroke is also called as Brain Attack. It is a paralysis attack in which person loses power of any body part. It is caused by blockage in the arteries supplying blood to the brain</p>
                      <div className='text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer mt-1'>Know More</div>
                    </div>
                  </div>

                  
                  

                </div>
              
              </div>

              <div className='mt-10 flex justify-center'>
                <button className='blog-btn1'>View All Blog</button>
              </div>
            
      </div>


      <div className="faq">
        <h2>FAQ</h2>
        <div className="faq-div"></div>
        <div className="faq-details">
          <div className="faq-header">
            <h2>What occurs on the first visit?</h2>
            <p>
            An allocated physician will investigate all of the patient’s basic information before reviewing the present injury or illness. Further diagnostic tests or therapy will be suggested based on the results.
            </p>
          </div>
          <div className="faq-header mt-6">
            <h2>What are the most frequent medical problems that adults face?</h2>
             <p>Aside from the four chronic diseases of cancer, diabetes, stroke, and heart disease, adults are affected by allergies, anaemia, arthritis, blood pressure, cholesterol issues, digestive disorders, colon disease, thyroid disorders, urine and bladder problems, tendonitis and bursitis, and a variety of other medical conditions.</p>
          </div>
          <div className="faq-header mt-6">
            <h2>
            Should you see a doctor even if you believe you are in good health?
            </h2>
            <p>
            It is critical to follow up with yearly health checks. This will allow you to keep an eye on a number of risk factors that may lead to complicated problems in the future.
            </p>
          </div>

          <div className="faq-header mt-6">
            <h2>
              Is it possible to avoid injuries or illnesses in adults?
            </h2>
            <p>
            There are many medical problems that may be avoided, and various programmes are in place to help adults maintain their health. However, not all medical conditions are entirely avoidable.
            </p>
          </div>
        </div>
      </div>

            {
              apointPop && <ApointmentPopup setApointPop={setApointPop}/>
            }
    </>
  )
}

export default InternalMedicine