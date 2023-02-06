import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Pagination, Navigation } from "swiper";

//importing icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

//importing Apis
import servicesApi from '../api/servicesApi';

//importing components
import { SpecialistCard } from '../components/SpecialistCard'
import { AppointmentForm } from '../components/AppointmentForm'
import { Navbar } from '../components/Navbar'

// importing images
import dr from '../images/dr.png'
import dr1 from '../images/dr1.png'
import dr2 from '../images/dr2.png'
import dr3 from '../images/dr3.png'
import vect from '../images/vect.png'
import untar from '../images/untar.png'
import testimonial from '../images/testimonial-img.png'
import test01 from '../images/test01.png'
import test02 from '../images/test02.png'
import test03 from '../images/test03.png'
import test04 from '../images/test04.png'
import test05 from '../images/test05.png'
import test06 from '../images/test06.png'
import test07 from '../images/test07.png'
import test08 from '../images/test08.png'
import test09 from '../images/test09.png'
import women from '../images/women.png'
import women1 from '../images/women1.png'
import patient_w from '../images/patient-story-w.png'
import btn from '../images/btn.png'
import blog01 from '../images/blog01.png'
import blog02 from '../images/blog02.png'
import blog03 from '../images/blog03.png'

const specialists = [
  {
    id : 1,
    img_light : require('../images/cardiology-light.png'),
    img_dark : require('../images/cardiology-dark.png'),
    title : 'Cardiology'
  },
  {
    id : 2,
    img_light : require('../images/diabates-light.png'),
    img_dark : require('../images/diabates-dark.png'),
    title : 'Diabates'
  },
  {
    id : 3,
    img_light : require('../images/gastroenterology-light.png'),
    img_dark : require('../images/gastroenterology-dark.png'),
    title : 'Gastroenterology'
  },
  {
    id : 4,
    img_light : require('../images/ophthalmology-light.png'),
    img_dark : require('../images/ophthalmology-dark.png'),
    title : 'Ophthalmology'
  },
]

export const Home = () => {
  const swiperRef = useRef();
  const swiperRef1 = useRef();

  const specialistMin = 0;
  const specialistMax = 0;

  const [selSpecialist, setSelSpecialist] = useState(0);

  const handleSpecialist = (id) => {
    setSelSpecialist(id);
  }
  return (
    <div>
        <Navbar/>
        {/** Banner */}
        <div className='relative '>
            <div className='home-banner flex items-center px-20'>
                <div className='home-banner-details w-[35%]'>
                    <p className='text-xl text-gray-800 my-3'>Major Hospital</p>
                    <p className='text-5xl font-bold'>A Destination for
                    Advanced Care</p>
                    <p className='text-2xl text-gray-800 my-3'>The hospital you trust to care for those
                    you love.</p>

                    <button className='yellow-btn my-5 '>Book an Appointment</button>
                </div>
            </div>

            <AppointmentForm/>
        </div>
        {/** ./Banner */}
        {/** Specialities */}
        <div className='relative mt-60'>
          <div className='h-specailities-desc'>
            <div className='text-center my-3 text-4xl font-semibold'>Specialities </div>
            <div className='text-center text-lg mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </div>        
          </div>

          <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >

          <SwiperSlide>
          <div className='specialist-cards flex mx-20 my-10 justify-between pb-8'>
          {specialists.map(specialist => 
            <div key={specialist.id} className={selSpecialist === specialist.id ? 'specialist-card bg-[#E74C3C]' : 'specialist-card'} onClick={() => handleSpecialist(specialist.id)}>
              <div className=' flex justify-center items-center'>
                <div className={selSpecialist === specialist.id ? 'specialist-card-img bg-[#FFF5D7]' : 'specialist-card-img bg-[#FFF5D7]'}>
                  <img src={selSpecialist === specialist.id ? specialist.img_dark : specialist.img_light}/>
                </div> 
              </div>
              <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-2xl mb-8 text-white' : 'text-center font-semibold text-2xl mb-8'}>{specialist.title}</div>

            </div>
            )}
            
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='specialist-cards flex mx-20 my-10 justify-between pb-8 '>
          {specialists.map(specialist => 
            <div key={specialist.id} className={selSpecialist === specialist.id ? 'specialist-card bg-[#E74C3C]' : 'specialist-card'} onClick={() => handleSpecialist(specialist.id)}>
              <div className=' flex justify-center items-center'>
                <div className={selSpecialist === specialist.id ? 'specialist-card-img bg-[#FFF5D7]' : 'specialist-card-img bg-[#FFF5D7]'}>
                  <img src={selSpecialist === specialist.id ? specialist.img_dark : specialist.img_light}/>
                </div> 
              </div>
              <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-2xl mb-8 text-white' : 'text-center font-semibold text-2xl mb-8'}>{specialist.title}</div>

            </div>
            )}
            
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='specialist-cards flex mx-20 my-10 justify-between pb-8'>
          {specialists.map(specialist => 
            <div key={specialist.id} className={selSpecialist === specialist.id ? 'specialist-card bg-[#E74C3C]' : 'specialist-card'} onClick={() => handleSpecialist(specialist.id)}>
              <div className=' flex justify-center items-center'>
                <div className={selSpecialist === specialist.id ? 'specialist-card-img bg-[#FFF5D7]' : 'specialist-card-img bg-[#FFF5D7]'}>
                  <img src={selSpecialist === specialist.id ? specialist.img_dark : specialist.img_light}/>
                </div> 
              </div>
              <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-2xl mb-8 text-white' : 'text-center font-semibold text-2xl mb-8'}>{specialist.title}</div>

            </div>
            )}
            
          </div>
          </SwiperSlide>
          </Swiper>
        </div>
        {/** ./Specialities */}
        {/** Videos Slider */}
        
        <div className=' flex items-center justify-center px-10'>
        <div className='swipe-left-btn' onClick={() => swiperRef.current.slidePrev()}>
            <FaAngleLeft/>
        </div>
        <Swiper
        modules={[ Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className='video-slider '
        >
        
        
        <SwiperSlide className="women-section">
                  <div className="wo-img">
                  <img className='imhk' src={btn} alt="" />
                      <img src={women} alt="women1" />
                  </div>
                 <div className="wo-img">
                     <img className='imhk' src={btn} alt="" />
                      <img src={women1} alt="women" />
                 </div>
                 
        </SwiperSlide>
        

        
        <SwiperSlide className="women-section">
                  <div className="wo-img">
                  <img className='imhk' src={btn} alt="" />
                      <img src={women} alt="women1" />
                  </div>
                 <div className="wo-img">
                     <img className='imhk' src={btn} alt="" />
                      <img src={women1} alt="women" />
                 </div>
                 
        </SwiperSlide>
        

        <SwiperSlide className="women-section">
                  <div className="wo-img">
                  <img className='imhk' src={btn} alt="" />
                      <img src={women} alt="women1" />
                  </div>
                 <div className="wo-img">
                     <img className='imhk' src={btn} alt="" />
                      <img src={women1} alt="women" />
                 </div>
                 
        </SwiperSlide>
        
        
        </Swiper>
        <div className='swipe-right-btn' onClick={() => swiperRef.current.slideNext()}>
            <FaAngleRight/>
        </div>
        </div>
        {/** ./Videos Slider */}
        {/** Patient Stories */}
        <Swiper 
        modules={[ Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef1.current = swiper;
        }}
        
        >
        
        <SwiperSlide>
        <div className='patient-stories-section flex mx-[130px] items-center my-[80px]'>
            <div className="wo-img relative w-[50%]">
              <img className='imhk' src={btn} alt="" />
              <img src={patient_w} alt="women" />
              <div className='swipe-left-btn absolute right-0 bottom-5' onClick={() => swiperRef1.current.slidePrev()}>
                <FaAngleLeft/>
              </div>
              <div className='swipe-right-btn absolute -right-[50px] bottom-5' onClick={() => swiperRef1.current.slideNext()}>
                <FaAngleRight/>
              </div>
            </div>
            <div className='w-[40%] ml-20'>
              <p className='text-2xl font-bold'>Patient's Stories</p>
              <p className='text-4xl font-bold mt-2'>Where Health Meets Care</p>
              <p className='text-xl mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className=' mt-8'><span className='light-red-btn'>Lorem Ipsum</span></div>
            </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='patient-stories-section flex mx-[130px] items-center my-[80px]'>
            <div className="wo-img relative w-[50%]">
              <img className='imhk' src={btn} alt="" />
              <img src={patient_w} alt="women" />
              <div className='swipe-left-btn absolute right-0 bottom-5' onClick={() => swiperRef1.current.slidePrev()}>
                <FaAngleLeft/>
              </div>
              <div className='swipe-right-btn absolute -right-[50px] bottom-5' onClick={() => swiperRef1.current.slideNext()}>
                <FaAngleRight/>
              </div>
            </div>
            <div className='w-[40%] ml-20'>
              <p className='text-2xl font-bold'>Patient's Stories</p>
              <p className='text-4xl font-bold mt-2'>Where Health Meets Care</p>
              <p className='text-xl mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className=' mt-8'><span className='light-red-btn'>Lorem Ipsum</span></div>
            </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='patient-stories-section flex mx-[130px] items-center my-[80px]'>
            <div className="wo-img relative w-[50%]">
              <img className='imhk' src={btn} alt="" />
              <img src={patient_w} alt="women" />
              <div className='swipe-left-btn absolute right-0 bottom-5' onClick={() => swiperRef1.current.slidePrev()}>
                <FaAngleLeft/>
              </div>
              <div className='swipe-right-btn absolute -right-[50px] bottom-5' onClick={() => swiperRef1.current.slideNext()}>
                <FaAngleRight/>
              </div>
            </div>
            <div className='w-[40%] ml-20'>
              <p className='text-2xl font-bold'>Patient's Stories</p>
              <p className='text-4xl font-bold mt-2'>Where Health Meets Care</p>
              <p className='text-xl mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className=' mt-8'><span className='light-red-btn'>Lorem Ipsum</span></div>
            </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='patient-stories-section flex mx-[130px] items-center my-[80px]'>
            <div className="wo-img relative w-[50%]">
              <img className='imhk' src={btn} alt="" />
              <img src={patient_w} alt="women" />
              <div className='swipe-left-btn absolute right-0 bottom-5' onClick={() => swiperRef1.current.slidePrev()}>
                <FaAngleLeft/>
              </div>
              <div className='swipe-right-btn absolute -right-[50px] bottom-5' onClick={() => swiperRef1.current.slideNext()}>
                <FaAngleRight/>
              </div>
            </div>
            <div className='w-[40%] ml-20'>
              <p className='text-2xl font-bold'>Patient's Stories</p>
              <p className='text-4xl font-bold mt-2'>Where Health Meets Care</p>
              <p className='text-xl mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className=' mt-8'><span className='light-red-btn'>Lorem Ipsum</span></div>
            </div>
        </div>
        </SwiperSlide>

        
       
        </Swiper>
        {/** ./Patient Stories */}
        {/** Our Services */}
        <div className='our-services-section bg-[#FEF9F9] py-10'>
        
            <div className='text-3xl text-center font-bold'>Our Services</div>
            <div className='text-lg text-center font-bold my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </div>
            
            <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
            <SwiperSlide>
            <div className='flex justify-center mx-20 pb-10'>
              {
                servicesApi.map(service => 
                  <div key={service.id} className='service-card pb-8'>
                    <div className='service-card-img'>
                      <img src={service.service_img} alt='services'/>
                    </div>
                    <p className='my-5 mx-2 text-xl font-semibold text-[#101010]'>{service.name}</p>
                    <p className='mb-5 mx-2 text-sm text-[#101010]'>{service.desc}</p>
                    <div className='flex justify-center '><span className='red-btn red-btn1 '>Know More</span></div>
                  </div>
                  )
              }
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='flex justify-center mx-20 pb-10'>
              {
                servicesApi.map(service => 
                  <div key={service.id} className='service-card pb-8'>
                    <div className='service-card-img'>
                      <img src={service.service_img} alt='services'/>
                    </div>
                    <p className='my-5 mx-2 text-xl font-semibold text-[#101010]'>{service.name}</p>
                    <p className='mb-5 mx-2 text-sm text-[#101010]'>{service.desc}</p>
                    <div className='flex justify-center '><span className='red-btn red-btn1 '>Know More</span></div>
                  </div>
                  )
              }
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='flex justify-center mx-20 pb-10'>
              {
                servicesApi.map(service => 
                  <div key={service.id} className='service-card pb-8'>
                    <div className='service-card-img'>
                      <img src={service.service_img} alt='services'/>
                    </div>
                    <p className='my-5 mx-2 text-xl font-semibold text-[#101010]'>{service.name}</p>
                    <p className='mb-5 mx-2 text-sm text-[#101010]'>{service.desc}</p>
                    <div className='flex justify-center '><span className='red-btn red-btn1 '>Know More</span></div>
                  </div>
                  )
              }
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='flex justify-center mx-20 pb-10'>
              {
                servicesApi.map(service => 
                  <div key={service.id} className='service-card pb-8'>
                    <div className='service-card-img'>
                      <img src={service.service_img} alt='services'/>
                    </div>
                    <p className='my-5 mx-2 text-xl font-semibold text-[#101010]'>{service.name}</p>
                    <p className='mb-5 mx-2 text-sm text-[#101010]'>{service.desc}</p>
                    <div className='flex justify-center '><span className='red-btn red-btn1 '>Know More</span></div>
                  </div>
                  )
              }
            </div>
            </SwiperSlide>
            </Swiper>
        </div>
        {/** ./Our Services */}

        {/** Meet Our Team */}
        <div className='our-team bg-[#F5F5F5] flex justify-between px-40'>
              <div className='w-[35%] mt-10 mr-20'>
                <p className='text-[#E74C3C] font-semibold my-1'>Meet Our Team</p>
                <p className='text-4xl font-bold my-2'>Group of certified &
                Experienced Doctors.</p>
                <p className='text-xl leading-7'>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.</p>
                <div className='my-3'>
                  <button className='ba-red-btn mr-5'>Book Appoinment</button>
                  <button className='ba-white-btn '>View All Doctors</button>
                </div>
              </div>
              <div className='flex w-[65%] justify-start'>

                <div className='my-10'>
                  <SpecialistCard img={dr} name='Dr. Mahi Rawat' vect={vect} untar={untar}/>
                  <SpecialistCard img={dr2} name='Dr. Sakshi Sena' vect={vect} untar={untar}/>
                </div>
                <div className='mt-20 mb-10'>
                  <SpecialistCard img={dr1} name='Dr. Rohan Shrma' vect={vect} untar={untar} />
                  <SpecialistCard img={dr3} name='Dr. Rohan Shrma' vect={vect} untar={untar}/>
                </div>
              </div>
        </div>
        {/** ./Meet Our Team */}
        {/** Our Blogs */}
        <div className='our-blogs py-10 px-10'>
              
                <p className='text-center text-3xl font-bold'>Our Blogs</p>
                <p className='text-lg text-center font-bold mt-2 mb-10'>Stay up to date with our most recent news and updates</p>

                <div className='flex justify-center '>

                  <div className='blog-card-main w-[45%] mx-5'>
                    <img className='h-[250px]' src={blog01}/>
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
                      <img className='w-[300px] h-[200px]' src={blog02} />
                      <div className='text-sm p-5'>
                        <div className='flex justify-between my-2'>
                          <p className='font-bold'>Chronic Kidney Disease – The Silent Killer</p>
                          <p className='text-xs font-bold'>05 January</p>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className='text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer mt-1'>Know More</div>
                      </div>
                    </div>

                    <div className='blog-card-secondary flex items-center'>
                      <img className='w-[300px] h-[200px]' src={blog03}/>
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
                  <button className=' bg-[#E74C3C] font-bold px-[50px] py-[10px] text-[#ffffff] rounded-[5px] text-sm'>View All Blog</button>
                </div>
              
        </div>
        {/** ./Our Blogs */}
        {/** Patient Reviews */}
        <div >
        <Swiper 
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>
        <div className='patient-reviews flex justify-center py-20'>
        
        <div className=' text-center w-[40%]'>
          <p className='text-[#E74C3C] font-semibold my-1'>Testimonial</p>
          <p className='text-3xl font-extrabold text-slate-600'>Satisfied Patients Reviews</p>
          <div className='flex justify-center testimonial-img'>
              <img src={testimonial} alt='testimonial-img'/>
          </div>
          
          <p className='mb-5 text-slate-500'>
            I appreciate your hospital really good environment and excellent patient care. you are
            continuously handle patient treatment wonderfully. Thanks for your great service. Please
            enjoy the chocolates.
          </p>
          <div className="tara flex mb-3 justify-center">
              <img  src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
          </div>
          <p className='font-bold text-slate-700'>Amanda Kinedy</p>
        </div>
              <img src={test01} className='testmonial-floating-img test1' alt='testimonial'/>
              <img src={test01} className='testmonial-floating-img test2' alt='testimonial'/>
              <img src={test02} className='testmonial-floating-img test3' alt='testimonial'/>
              <img src={test03} className='testmonial-floating-img test4' alt='testimonial'/>
              <img src={test04} className='testmonial-floating-img test5' alt='testimonial'/>
              <img src={test05} className='testmonial-floating-img test6' alt='testimonial'/>
              <img src={test06} className='testmonial-floating-img test7' alt='testimonial'/>
              <img src={test07} className='testmonial-floating-img test8' alt='testimonial'/>
              <img src={test08} className='testmonial-floating-img test9' alt='testimonial'/>
              <img src={test09} className='testmonial-floating-img test10' alt='testimonial'/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='patient-reviews flex justify-center py-20'>
        
        <div className=' text-center w-[40%]'>
          <p className='text-[#E74C3C] font-semibold my-1'>Testimonial</p>
          <p className='text-3xl font-extrabold text-slate-600'>Satisfied Patients Reviews</p>
          <div className='flex justify-center testimonial-img'>
              <img src={testimonial} alt='testimonial-img'/>
          </div>
          
          <p className='mb-5 text-slate-500'>
            I appreciate your hospital really good environment and excellent patient care. you are
            continuously handle patient treatment wonderfully. Thanks for your great service. Please
            enjoy the chocolates.
          </p>
          <div className="tara flex mb-3 justify-center">
              <img  src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
          </div>
          <p className='font-bold text-slate-700'>Amanda Kinedy</p>
        </div>
              <img src={test01} className='testmonial-floating-img test1' alt='testimonial'/>
              <img src={test01} className='testmonial-floating-img test2' alt='testimonial'/>
              <img src={test02} className='testmonial-floating-img test3' alt='testimonial'/>
              <img src={test03} className='testmonial-floating-img test4' alt='testimonial'/>
              <img src={test04} className='testmonial-floating-img test5' alt='testimonial'/>
              <img src={test05} className='testmonial-floating-img test6' alt='testimonial'/>
              <img src={test06} className='testmonial-floating-img test7' alt='testimonial'/>
              <img src={test07} className='testmonial-floating-img test8' alt='testimonial'/>
              <img src={test08} className='testmonial-floating-img test9' alt='testimonial'/>
              <img src={test09} className='testmonial-floating-img test10' alt='testimonial'/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='patient-reviews flex justify-center py-20'>
        
        <div className=' text-center w-[40%]'>
          <p className='text-[#E74C3C] font-semibold my-1'>Testimonial</p>
          <p className='text-3xl font-extrabold text-slate-600'>Satisfied Patients Reviews</p>
          <div className='flex justify-center testimonial-img'>
              <img src={testimonial} alt='testimonial-img'/>
          </div>
          
          <p className='mb-5 text-slate-500'>
            I appreciate your hospital really good environment and excellent patient care. you are
            continuously handle patient treatment wonderfully. Thanks for your great service. Please
            enjoy the chocolates.
          </p>
          <div className="tara flex mb-3 justify-center">
              <img  src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
              <img className='ml-1' src={vect} alt="" />
          </div>
          <p className='font-bold text-slate-700'>Amanda Kinedy</p>
        </div>
              <img src={test01} className='testmonial-floating-img test1' alt='testimonial'/>
              <img src={test01} className='testmonial-floating-img test2' alt='testimonial'/>
              <img src={test02} className='testmonial-floating-img test3' alt='testimonial'/>
              <img src={test03} className='testmonial-floating-img test4' alt='testimonial'/>
              <img src={test04} className='testmonial-floating-img test5' alt='testimonial'/>
              <img src={test05} className='testmonial-floating-img test6' alt='testimonial'/>
              <img src={test06} className='testmonial-floating-img test7' alt='testimonial'/>
              <img src={test07} className='testmonial-floating-img test8' alt='testimonial'/>
              <img src={test08} className='testmonial-floating-img test9' alt='testimonial'/>
              <img src={test09} className='testmonial-floating-img test10' alt='testimonial'/>
        </div>
        </SwiperSlide>
        </Swiper>
        </div>
        {/** ./Patient Reviews */}




    </div>
  )
}
