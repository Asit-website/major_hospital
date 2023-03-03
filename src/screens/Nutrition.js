import React,{useState} from 'react'
import ApointmentPopup from '../popup/ApointmentPopup'
import Frame from '../images/Frame.png'
import hath from '../images/hath.jpg'
import { Link, NavLink } from 'react-router-dom';
import nutrition1 from '../images/nutratrion1.png';
import nutrition3 from '../images/nutration3.png';
import cardiologyApi from '../api/cardilogiApi';
import mango from '../images/mango.png'
import mango1 from '../images/mango1.png'
import mango2 from '../images/mango2.png'
const Nutrition = ({apointPop,setApointPop}) => {
    const [item,setItem] = useState(cardiologyApi);
    // const [visible,setVisible] = useState(3);

    // const showMoreDoctore = () =>{
    //     setVisible((prevValue)=> prevValue + 3);
    // }
  return (
     <>
            <div className="medicine-back medicine-back1">
                 <div className="medicine-sect">
                     <h2>Nutrition Services</h2>
                 </div>
            </div>

            <div className="about-institute">
                <div className="institute">
                    <h4>About the Institute</h4>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="institute-img">
                     <img className='dov-img' src={nutrition1} alt="dotor" />
                </div>
            </div>

            <div className="word-leader">
                 <div className="first-word">
                   <div className="rohan">
                      <h3>Dr. Rohan Shrma</h3>
                      <small>Chairman</small>
                      <p>Institute of Physiotherapy</p>
                   </div>
                    <img src={nutrition3} alt="dawa" />
                 </div>
                 <div className="second-word">
                    <h2>A word from our leaders</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h4>See all doctors from this division</h4>
                 </div>
            </div>

            <div className="treats">
                <img  className='hath' src={hath} alt="hath" />
                <h2>What we treat</h2>
                <p className='treats-p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and scrambled it to make a type.</p>

                <div className="lorem">
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>

                <div className="treats-back treats-back1">
                     <div className="treats-sect">
                          <h2>Our approach to treat you</h2>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                     </div>
                   
                </div>
                 <div className=" relative">
                <div className='consult'>
                          <img className='hath' src={Frame} alt="" />
                          <h3 className='exy mt-2'>Consult with experienced doctors</h3>
                          <div className="sard">
            {
              item.slice(19,22).map(val=>{
                return(
                  <>
                  <div key={val.id} className="card card1">
                   <img className='main-img' src={val.images} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>{val.name}</h3>
                       <p>Senior Nutrition Expert at Major</p>
                       <p>Hospital Haryana</p>
                       {/* <p>{val.content1}</p> */}
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
              <h2 className='text-center text-3xl font-bold gast'>Nutrition Services Blogs</h2>
              <p className='stays text-center'>Stay up to date with our most recent news and updates</p>

              <div className='flex justify-center mt-10 blog-meta1'>

                <div className='blog-card-main w-[45%] mx-5'>
                  <img className='h-[250px]' src={mango}/>
                  <div className='p-5'>
                      <div className='flex justify-between'>
                      <div className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
                      <div className='text-sm font-semibold text-gray-600'>2 January 2023</div>
                    </div>
                    <div className='my-2 text-md text-[#222F3E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</div>
                    <div className='text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer'>Know More</div>
                  </div>
                  
                </div>

                <div className='blog-cards-secondary w-[45%] mx-5'>
                  <div className='blog-card-secondary flex mb-6 items-center'>
                    <img className='w-[300px] h-[200px]' src={mango1} />
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
                    <img className='w-[300px] h-[200px]' src={mango2}/>
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

export default Nutrition