import React, { useState } from "react";
import ApointmentPopup from '../popup/ApointmentPopup'
import Frame from '../images/Frame.png'
import hath from '../images/hath.jpg'
import { Link } from 'react-router-dom';
import doctorji from '../images/doctorji.png';
import cardiologyApi from '../api/cardilogiApi';
import ty from '../images/ty.png';
import ty1 from '../images/ty1.png';
import ty2 from '../images/ty2.png';
import cardio1 from '../images/cardio1.png';
import cardio3 from '../images/cardio3.png'
import cardio4 from '../images/cardio4.png'
import cardio5 from '../images/cardio5.png'
const Cardiology = ({ apointPop, setApointPop }) => {
  const [item,setItem] = useState(cardiologyApi);
  const [visible,setVisible] = useState(3);

  const showMoreDoctore = () =>{
      setVisible((prevValue)=> prevValue + 3);
  }
  return (
    <>
        <div className="medicine-back medicine-back6">
                 <div className="medicine-sect">
                     <h2>Cardiology</h2>
                 </div>
            </div>

            <div className="about-institute about-int">
                <div className="institute">
                    <h4>About the Cardiology</h4>
                    <p>Cardiovascular disease management requires the expertise and experience of an excellent team who harness the knowledge and technology for the best patient outcome. At Center of Diabetes and Allied Sciences (Major), we provide such advanced heart treatment through our experienced team of Cardiologists cardiac surgeons, Technologists, Perfusionists, Physiotherapists and dedicated Cardiac Nurses. Major Hospital Has The Best Cardiologist In Gurgaon. Standard heart surgery is considered as one of the Best Heart Specialist In Gurgaon.</p>
                </div>
                <div className="institute-img">
                     <img className='dov-img' src={doctorji} alt="dotor" />
                </div>
            </div>

            <div className="word-leader">
                 <div className="first-word">
                    <img src={cardio1} alt="dawa" />
                 </div>
                 <div className="second-word">
                    <p>
                    The team will diagnose & treat a full spectrum of heart conditions from preventive care, comprehensive treatment, and complex surgeries to rehabilitation services. Well-staffed by a team of internationally trained doctors and other staff, Major adheres to International protocols and keeps constantly updated with American and European guidelines and individualizes care to the people suffering from cardiac problems. Here you Get the Best Cardiologist In Gurgaon.
                    </p>
                 </div>
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
                <div className='consult'>
                          <img className='hath' src={Frame} alt="" />
                          <h3 className='exy mt-2'>Consult with experienced doctors</h3>
                          <div className="sard">
            {
              item.slice(0,visible).map(val=>{
                return(
                  <>
                  <div key={val.id} className="card card1">
                   <img className='main-img' src={val.images} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>{val.name}</h3>
                       <p>Senior Dental Expert at Major</p>
                       <p>Hospital Haryana</p>
                     </div>
                    <div className="viwe-profile">
                        <Link to={`/cardio/${val.id}`}><p>{val.view}</p></Link>
                     </div>
                    
                   </div>
                   <hr />
                   <div className="information-doc">
                      <h3>{val.information}</h3>
                      <p>{val.informationCont}</p>
                      <p>{val.informationCont1}</p>
                      <div className="tara flex">
                          <img src={val.image1[0]} alt="" />
                          <img className='ml-1' src={val.image1[1]} alt="" />
                          <img className='ml-1' src={val.image1[2]} alt="" />
                          <img className='ml-1' src={val.image1[3]} alt="" />
                          <img className='ml-1' src={val.image1[4]} alt="" />
                      </div>
                      <button onClick={()=> setApointPop(true)}>{val.appoint}</button>
                   </div>
                   </div>
                  
               </div>  
                  </>
                )
              })
            }
            </div> 
                <p   onClick={showMoreDoctore} className='see_more cursor-pointer'>See More Doctors</p>
                     </div>
                     </div>
                      
            </div>

            <div className="step-follow">
                <h2>You Should Follow That Steps To Get Your Healthy Heart</h2>
                <div className="step-color"></div>
                <ul>
                  <li>Get dynamic every week</li>
                  <li>Appreciate sound fats, evade unfortunate ones</li>
                  <li>Wake up from an inactive way of life</li>
                  <li>Try not to smoke and maintain a strategic distance from used smoke</li>
                  <li>Shed overabundance weight</li>
                  <li>Try not to indulge through part control</li>
                  <li>Catch your Zs</li>
                  <li>Eat cholesterol-accommodating nourishment</li>
                  <li>Fit your heart wellbeing with music</li>
                  <li>Deal with your teeth</li>
                  <li>Fragrant healing can smother pressure and help your heart</li>
                </ul>
                <p>Take these sound heart tips to heart to keep your ticker running easily for the long stretch. Keep in mind, you hold the ability to keep up your wellbeing and deal with
your body. Settle on sound decisions and carry on with a way of life that helps your heart remain at its best.</p>
            </div>

            <div className='our-blogs our-blogs2 py-2  px-10'>
              
              <h2 className='text-center text-3xl font-bold gast'>Cardiology Blogs</h2>
              <p className='stays text-center'>Stay up to date with our most recent news and updates</p>

              <div className='flex justify-center mt-10 blog-meta1'>

                <div className='blog-card-main w-[45%] mx-5'>
                  <img className='h-[250px]' src={cardio3}/>
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
                    <img className='w-[300px] h-[200px]' src={cardio4} />
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
                    <img className='w-[300px] h-[200px]' src={cardio5}/>
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

            {
                apointPop && <ApointmentPopup setApointPop={setApointPop}/>
            }
    </>
  );
};

export default Cardiology;
