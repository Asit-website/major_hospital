import React,{useState} from 'react'
import ApointmentPopup from '../popup/ApointmentPopup'
import Frame from '../images/Frame.png'
import { Link, NavLink } from 'react-router-dom';
import dental from '../images/dental.png';
import dental1 from '../images/dental1.png';
import dental2 from '../images/dental2.png';
import dental3 from '../images/dental3.png';
import dental4 from '../images/dental4.png';
import cardiologyApi from '../api/cardilogiApi';
const Dental = ({apointPop,setApointPop}) => {
    const [item,setItem] = useState(cardiologyApi);
    // const [visible,setVisible] = useState(3);

    // const showMoreDoctore = () =>{
    //     setVisible((prevValue)=> prevValue + 3);
    // }
  return (
     <>
           <div className="medicine-back medicine-back8">
                 <div className="medicine-sect">
                     <h2>Dental Care</h2>
                 </div>
            </div>

            <div className="about-institute">
                <div className="institute">
                    <h4>About the Dental Care   </h4>
                    <p>At  Major Hospital, the department of Dentistry has every discipline offering quality care. We provide a wide range of services from cosmetic dentistry, maxillofacial surgery, implant surgery, periodontology, orthodontics, dental hygiene therapy to complex reconstructive surgery.</p>
                    <p>Dental procedures performed by our doctors follow National guidelines and employ strict infection control measures to render a high quality, satisfactory outcome for our patients.</p>
                </div>
                <div className="institute-img">
                     <img className='dov-img' src={dental} alt="dotor" />
                </div>
            </div>

            <div className="word-leader">
                 <div className="first-word">
                    <img src={dental1} alt="dawa" />
                 </div>
                 <div className="second-word second-word1">
                    <p className='dens'>
                   <span className='dens1'>Preventive Dentistry</span> • Oral Prophylaxis (Scaling and polishing) •Fillings <br />
•Flouride treatment •Pit and fissure sealants •Night guard
 <span className='dens1'> SURGICAL PROCEDURES</span> • All types of tooth removal• Corrective surgeries for jaws• Fracture correction• Surgical removal of growths, cysts or tumours• Apicoectomy <br />
<span className='dens1'>Restorative Dentistry</span> • Bridges • Implants • Dentures • Full mouth rehabilitation • Partial dentures-acrylic and cast partial • Implant supported Cosmetic   Dentistry   <br />
          <span className='dens1'>Veneers</span>  • Composite • Porcelain • Tooth alignment with braces 
                    </p>
                 </div>
            </div>

            <div className="treats">
                 <div className=" relative">
                <div className='consult'>
                          <img className='hath' src={Frame} alt="" />
                          <h3 className='exy mt-2'>Consult with experienced doctors</h3>
                          <div className="sard">
            {
              item.slice(4,7).map(val=>{
                return(
                  <>
                  <div key={val.id} className="card card1">
                   <img className='main-img' src={val.images} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>{val.name}</h3>
                       <p>{val.content}</p>
                       <p>{val.content1}</p>
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
               <NavLink to="/doctors"><p className='see_more cursor-pointer'>See More Doctors</p></NavLink>
                     </div>
                     </div>
                      
            </div>

       

            <div className='our-blogs our-blogs2 py-2  px-10'>
              
              <h2 className='text-center text-3xl font-bold gast'>Dental Care Blogs</h2>
              <p className='stays text-center'>Stay up to date with our most recent news and updates</p>

              <div className='flex justify-center mt-10 blog-meta1'>

                <div className='blog-card-main w-[45%] mx-5'>
                  <img className='h-[250px]' src={dental2}/>
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
                    <img className='w-[300px] h-[200px]' src={dental3} />
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
                    <img className='w-[300px] h-[200px]' src={dental4}/>
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
  )
}

export default Dental