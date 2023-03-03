import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import cardiologyApi from '../api/cardilogiApi';
import { Pagination, Navigation } from "swiper";

//importing icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

//importing Apis
import servicesApi from '../api/servicesApi';

//importing components
import { SpecialistCard } from '../components/SpecialistCard'
import { AppointmentForm } from '../components/AppointmentForm'


import vect from '../images/vect.png'
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
// import women from '../images/women.png'
// import women1 from '../images/women1.png'
import patient_w from '../images/patient-story-w.png'
import btn from '../images/btn.png'
import blog01 from '../images/blog01.png'
import blog02 from '../images/blog02.png'
import blog03 from '../images/blog03.png'
import ApointmentPopup from '../popup/ApointmentPopup';
import { Link, NavLink } from 'react-router-dom';
const specialists = [
  {
    id: 1,
    img_light: require('../images/cardiology-light.png'),
    img_dark: require('../images/cardiology-dark.png'),
    title: 'Cardiology',
    path: "cardio"

  },
  {
    id: 2,
    img_light: require('../images/diabates-light.png'),
    img_dark: require('../images/diabates-dark.png'),
    title: 'Dental Care',
    path: "dental"

  },
  {
    id: 3,
    img_light: require('../images/gastroenterology-light.png'),
    img_dark: require('../images/gastroenterology-dark.png'),
    title: 'Gastroenterology',
    path: "gasto"
  },
  {
    id: 4,
    img_light: require('../images/ophthalmology-light.png'),
    img_dark: require('../images/ophthalmology-dark.png'),
    title: 'Ophthalmology',
    path: "opthomology"
  },
  {
    id: 5,
    img_light: require('../images/img5.png'),
    img_dark: require('../images/img5.png'),
    title: 'Internal Medicine',
    path: "medicine"
  },
  {
    id: 6,
    img_light: require('../images/img6.png'),
    img_dark: require('../images/img6.png'),
    title: 'Physiotherapy',
    path: "physcio"
  },
  {
    id: 7,
    img_light: require('../images/img7.png'),
    img_dark: require('../images/img7.png'),
    title: 'Nutrition Services',
    path: "nutro"
  },
];

export const Home = ({ apointPop, setApointPop }) => {
  const swiperRef = useRef();
  const swiperRef1 = useRef();

  const specialistMin = 0;
  const specialistMax = 0;

  const [selSpecialist, setSelSpecialist] = useState(0);

  const handleSpecialist = (id) => {
    setSelSpecialist(id);
  };

  const handleVideo = (e, flag) => {
    if (flag) {
      e.target.classList.toggle('hidden');
      e.target.nextElementSibling.classList.toggle('hidden');
      if (e.target.nextElementSibling.nextElementSibling.paused) {

        e.target.nextElementSibling.nextElementSibling.play();
      }
      else {
        e.target.nextElementSibling.nextElementSibling.pause();
      }
    }
    else {
      let ele;
      if (e.target.tagName === 'path') {
        ele = e.target.parentNode;
      }
      else {
        ele = e.target;
      }
      ele.classList.toggle('hidden');
      ele.previousElementSibling.classList.toggle('hidden');
      if (ele.nextElementSibling.paused) {
        ele.nextElementSibling.play();
      }
      else {
        ele.nextElementSibling.pause();
      }
    }
  };

  return (
    <>
      <div>
        {/** Banner */}
        <div className='relative '>
          <div className='home-banner flex items-center px-20 max-[425px]:px-10'>
            <div className='home-banner-details w-[35%] max-lg:w-[50%]  max-md:w-[70%] max-[425px]:w-[100%]'>
              <p className='text-xl text-gray-800 my-3 max-sm:text-lg major-h'>Major Hospital</p>
              <p className='text-5xl font-bold max-sm:text-4xl destination'>A Destination for
                Advanced Care</p>
              <p className='text-2xl text-gray-800 my-3 max-sm:text-xl '>The hospital you trust to care for those
                you love.</p>

              <button onClick={() => setApointPop(true)} className='yellow-btn my-5 yellow-btn2 '>Book an Appointment</button>
            </div>
          </div>

          <AppointmentForm />
        </div>
        {/** ./Banner */}
        {/** Specialities */}
        <div className='relative mt-80 max-lg:mt-[18rem] max-md:mt-[20rem] max-sm:mt-[45rem]'>
          <div className='h-specailities-desc'>
            <div className='text-center my-3 text-4xl font-semibold specilist'>Specialities </div>
            <div className='text-center text-lg mb-5 lorem loremdas'>A Multi-Speciality Major Hospital. Major hospital is spread across 30,000 sq ft area & is equipped with advanced technology & state-of-the-art infrastructure to provide personalized and committed
              treatment services with focus on diabates & its co-morbidities
            </div>
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
              <div className='specialist-cards flex flex-wrap  mx-10 my-10 justify-center pb-8 max-md:flex-col'>
                {specialists.slice(0, 4).map(specialist =>
                  <div key={specialist.id} className={selSpecialist === specialist.id ? 'specialist-card bg-[#E74C3C]  mx-2' : 'specialist-card  mx-2'} onClick={() => handleSpecialist(specialist.id)}>
                    <NavLink to={`/${specialist.path}`}><div className=' flex justify-center items-center '>
                      <div className={selSpecialist === specialist.id ? 'specialist-card-img bg-[#FFF5D7]' : 'specialist-card-img bg-[#FFF5D7]'}>
                        <img src={selSpecialist === specialist.id ? specialist.img_dark : specialist.img_light} />
                      </div>
                    </div></NavLink>
                    <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-2xl mb-8 text-white spet-tit' : 'text-center font-semibold text-2xl mb-8 spet-tit'}>{specialist.title}</div>
                  </div>
                )}

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='specialist-cards flex flex-wrap  mx-10 my-10 justify-center pb-8 max-md:flex-col'>
                {specialists.slice(4, 7).map(specialist =>
                  <div key={specialist.id} className={selSpecialist === specialist.id ? 'specialist-card bg-[#E74C3C]  mx-2' : 'specialist-card  mx-2'} onClick={() => handleSpecialist(specialist.id)}>
                    <NavLink to={`/${specialist.path}`}> <div className=' flex justify-center items-center '>
                      <div className={selSpecialist === specialist.id ? 'specialist-card-img bg-[#FFF5D7]' : 'specialist-card-img bg-[#FFF5D7]'}>
                        <img src={selSpecialist === specialist.id ? specialist.img_dark : specialist.img_light} />
                      </div>
                    </div></NavLink>
                    <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-2xl mb-8 text-white' : 'text-center font-semibold text-2xl mb-8'}>{specialist.title}</div>
                  </div>
                )}

              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
          <div className='specialist-cards flex flex-wrap  mx-10 my-10 justify-center pb-8 max-md:flex-col'>
          {specialists.map(specialist => 
            <div key={specialist.id} className={selSpecialist === specialist.id ? 'specialist-card bg-[#E74C3C]  mx-2' : 'specialist-card  mx-2'} onClick={() => handleSpecialist(specialist.id)}>
              <div className=' flex justify-center items-center '>
                <div className={selSpecialist === specialist.id ? 'specialist-card-img bg-[#FFF5D7]' : 'specialist-card-img bg-[#FFF5D7]'}>
                  <img src={selSpecialist === specialist.id ? specialist.img_dark : specialist.img_light}/>
                </div> 
              </div>
              <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-2xl mb-8 text-white' : 'text-center font-semibold text-2xl mb-8'}>{specialist.title}</div>
            </div>
            )}
            
          </div>
          </SwiperSlide> */}
          </Swiper>
        </div>

        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper3">
        <SwiperSlide>
        <div className='specialist-card  mx-2'>
              <div className=' flex justify-center items-center '>
                <div className='specialist-card-img bg-[#FFF5D7]'>
                  <img src={card}/>
                </div> 
              </div>
              <div className='text-center font-semibold text-2xl mb-8 spet-tit'>title</div>

            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}


        {/** ./Specialities */}
        {/** Videos Slider */}

        <div className=' flex items-center justify-center px-10 max-md:px-2'>
          <div className='swipe-left-btn max-md:mx-[10px]' onClick={() => swiperRef.current.slidePrev()}>
            <FaAngleLeft />
          </div>


          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className='video-slider '
          >

            <SwiperSlide className="women-section">
              <div className="wo-img">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e) => {
                  handleVideo(e, true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women} alt="women1" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="wo-img">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e) => {
                  handleVideo(e, true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video  className='vid-pause'>
                  <source  src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>

            <SwiperSlide className="women-section">
              <div className="wo-img">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e) => {
                  handleVideo(e, true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women} alt="women1" /> */}
                <video  className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="wo-img">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e) => {
                  handleVideo(e, true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>

            </SwiperSlide>


            <SwiperSlide className="women-section">
              <div className="wo-img">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e) => {
                  handleVideo(e, true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women} alt="women1" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="wo-img">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e) => {
                  handleVideo(e, true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>

            </SwiperSlide>


          </Swiper>
          <div className='swipe-right-btn max-md:mx-[10px]' onClick={() => swiperRef.current.slideNext()}>
            <FaAngleRight />
          </div>
        </div>
        {/* * ./Videos Slider */}
        {/** Patient Stories */}
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}

        >

          <SwiperSlide>
            <div className='patient-stories-section flex mx-[130px] items-center my-[80px] max-lg:mx-[50px] max-md:flex-col max-md:my-0'>
              <div className="wo-img relative w-[50%] max-md:w-[95%]">
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e)=>{
                    handleVideo(e,true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
                {/* <img src={patient_w} alt="women" /> */}
                <div className='swipe-left-btn absolute right-0 bottom-5 ' onClick={() => swiperRef1.current.slidePrev()}>
                  <FaAngleLeft />
                </div>
                <div className='swipe-right-btn absolute -right-[50px] bottom-5 max-[425px]:-right-[40px]' onClick={() => swiperRef1.current.slideNext()}>
                  <FaAngleRight />
                </div>
              </div>
              <div className='w-[40%] ml-20 max-md:w-[95%] max-md:ml-0 max-md:my-[50px]'>
                <p className='text-2xl font-bold max-sm:text-xl stories1'>Patient's Stories</p>
                <p className='text-4xl  font-bold mt-4 max-sm:text-3xl healths'>Where Health Meets Care</p>
                <p className='text-xl mt-4 max-sm:text-lg gil '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className=' mt-8 light-red-btn1'><span className='light-red-btn'>Lorem Ipsum</span></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='patient-stories-section flex mx-[130px] items-center my-[80px] max-lg:mx-[50px] max-md:flex-col max-md:my-0'>
              <div className="wo-img relative w-[50%] max-md:w-[95%]">
                {/* <img className='imhk cursor-pointer' src={btn} alt="" />
                <img src={patient_w} alt="women" /> */}
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e)=>{
                    handleVideo(e,true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
                <div className='swipe-left-btn absolute right-0 bottom-5 ' onClick={() => swiperRef1.current.slidePrev()}>
                  <FaAngleLeft />
                </div>
                <div className='swipe-right-btn absolute -right-[50px] bottom-5 max-[425px]:-right-[40px]' onClick={() => swiperRef1.current.slideNext()}>
                  <FaAngleRight />
                </div>
              </div>
              <div className='w-[40%] ml-20 max-md:w-[95%] max-md:ml-0 max-md:my-[50px]'>
                <p className='text-2xl font-bold max-sm:text-xl stories1'>Patient's Stories</p>
                <p className='text-4xl  font-bold mt-4 max-sm:text-3xl healths'>Where Health Meets Care</p>
                <p className='text-xl mt-4 max-sm:text-lg gil '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className=' mt-8 light-red-btn1'><span className='light-red-btn'>Lorem Ipsum</span></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='patient-stories-section flex mx-[130px] items-center my-[80px] max-lg:mx-[50px] max-md:flex-col max-md:my-0'>
              <div className="wo-img relative w-[50%] max-md:w-[95%]">
                {/* <img className='imhk cursor-pointer' src={btn} alt="" />
                <img src={patient_w} alt="women" /> */}
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e)=>{
                    handleVideo(e,true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
                <div className='swipe-left-btn absolute right-0 bottom-5 ' onClick={() => swiperRef1.current.slidePrev()}>
                  <FaAngleLeft />
                </div>
                <div className='swipe-right-btn absolute -right-[50px] bottom-5 max-[425px]:-right-[40px]' onClick={() => swiperRef1.current.slideNext()}>
                  <FaAngleRight />
                </div>
              </div>
              <div className='w-[40%] ml-20 max-md:w-[95%] max-md:ml-0 max-md:my-[50px]'>
                <p className='text-2xl font-bold max-sm:text-xl stories1'>Patient's Stories</p>
                <p className='text-4xl  font-bold mt-4 max-sm:text-3xl healths'>Where Health Meets Care</p>
                <p className='text-xl mt-4 max-sm:text-lg gil '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className=' mt-8 light-red-btn1'><span className='light-red-btn'>Lorem Ipsum</span></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='patient-stories-section flex mx-[130px] items-center my-[80px] max-lg:mx-[50px] max-md:flex-col max-md:my-0'>
              <div className="wo-img relative w-[50%] max-md:w-[95%]">
                {/* <img className='imhk cursor-pointer' src={btn} alt="" />
                <img src={patient_w} alt="women" /> */}
                <img className='imhk cursor-pointer' src={btn} alt="" onClick={(e)=>{
                    handleVideo(e,true);
                }} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {
                  handleVideo(e, false);
                }} width="54" height="54" fill="currentColor" className="hidden imhk cursor-pointer invert1 bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
                {/* <img src={women1} alt="women" /> */}
                <video className='vid-pause'>
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
                <div className='swipe-left-btn absolute right-0 bottom-5 ' onClick={() => swiperRef1.current.slidePrev()}>
                  <FaAngleLeft />
                </div>
                <div className='swipe-right-btn absolute -right-[50px] bottom-5 max-[425px]:-right-[40px]' onClick={() => swiperRef1.current.slideNext()}>
                  <FaAngleRight />
                </div>
              </div>
              <div className='w-[40%] ml-20 max-md:w-[95%] max-md:ml-0 max-md:my-[50px]'>
                <p className='text-2xl font-bold max-sm:text-xl stories1'>Patient's Stories</p>
                <p className='text-4xl  font-bold mt-4 max-sm:text-3xl healths'>Where Health Meets Care</p>
                <p className='text-xl mt-4 max-sm:text-lg gil '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className=' mt-8 light-red-btn1'><span className='light-red-btn'>Lorem Ipsum</span></div>
              </div>
            </div>
          </SwiperSlide>




        </Swiper>
        {/** ./Patient Stories */}
        {/** Our Services */}
        <div className='our-services-section bg-[#FEF9F9] py-10'>

          <div className='text-3xl text-center font-bold our-sery'>Our Services</div>
          <div className='text-lg text-center font-bold my-2 our-fery'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='flex flex-wrap justify-center mx-20 pb-10 service-cards'>
                {
                  servicesApi.slice(0, 4).map(service =>
                    <div key={service.id} className='service-card pb-8'>
                      <div className='service-card-img'>
                        <img src={service.service_img} alt='services' />
                      </div>
                      <p className='my-5 mx-2 text-xl font-semibold text-[#101010] service_nam'>{service.name}</p>
                      <p className='mb-5 mx-2 text-sm text-[#101010] service_des'>{service.desc}</p>
                      <NavLink to={`/${service.path}`}><div className='flex justify-center  '><span className='red-btn serv-btn red-btn1 '>Know More</span></div></NavLink>
                    </div>
                  )
                }
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='flex flex-wrap justify-center mx-20 pb-10 service-cards'>
                {
                  servicesApi.slice(4, 7).map(service =>
                    <div key={service.id} className='service-card pb-8'>
                      <div className='service-card-img'>
                        <img src={service.service_img} alt='services' />
                      </div>
                      <p className='my-5 mx-2 text-xl font-semibold text-[#101010]'>{service.name}</p>
                      <p className='mb-5 mx-2 text-sm text-[#101010]'>{service.desc}</p>
                      <NavLink to={`/${service.path}`}><div className='flex justify-center '><span className='red-btn red-btn1 '>Know More</span></div></NavLink>
                    </div>
                  )
                }
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
            <div className='flex flex-wrap justify-center mx-20 pb-10 service-cards'>
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
            <div className='flex flex-wrap justify-center mx-20 pb-10 service-cards'>
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
            </SwiperSlide> */}
          </Swiper>
        </div>
        {/** ./Our Services */}

        {/** Meet Our Team */}
        <div className='our-team bg-[#F5F5F5] flex justify-center px-40 max-xl:px-20 max-lg:px-10 max-md:flex-col'>
          <div className='w-[35%] mt-10 mr-20 max-md:w-[100%]'>
            <p className='text-[#E74C3C] font-semibold my-1'>Meet Our Team</p>
            <p className='text-4xl font-bold my-2 certified'>Group of certified &
              Experienced Doctors.</p>
            <p className='text-xl leading-7 lead-8'>Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.</p>
            <div className='my-3'>
              <button onClick={() => setApointPop(true)} className='ba-red-btn mr-5 max-md:mb-3 mr-btn'>Book Appoinment</button>
              <NavLink to="/doctors"><button className='ba-white-btn mr-btn '>View All Doctors</button></NavLink>
            </div>
          </div>
          <div className='flex w-[65%] justify-start max-md:flex-col max-md:w-[100%]'>
            <div>
              {

                cardiologyApi.slice(0, 2).map((val, index) => {
                  return (
                    <div key={index} className='my-10 max-md:mt-10 max-md:mb-0'>
                      <div className="card card9">
                        <img className="main-img" src={val.images} alt="" />
                        <div className="igh">
                          <div className="name-card">
                            <div className="text-card">
                              <h3>{val.name}</h3>
                              <p>{val.content}</p>
                              <p>{val.content1}</p>
                              <div className="tara flex ">
                                <img src={val.image1[0]} alt="" />
                                <img className="ml-1" src={val.image1[1]} alt="" />
                                <img className="ml-1" src={val.image1[2]} alt="" />
                                <img className="ml-1" src={val.image1[3]} alt="" />
                                <img className="ml-1" src={val.image1[4]} alt="" />
                              </div>
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


                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })
              }
            </div>
            <div>
              {
                cardiologyApi.slice(5, 7).map((val, index) => {
                  return (
                    <div key={index} className='mt-20 mb-10 max-md:mt-0 '>
                      <div className="card card9">
                        <img className="main-img" src={val.images} alt="" />
                        <div className="igh">
                          <div className="name-card">
                            <div className="text-card">
                              <h3>{val.name}</h3>
                              <p>{val.content}</p>
                              <p>{val.content1}</p>
                              <div className="tara flex ">
                                <img src={val.image1[0]} alt="" />
                                <img className="ml-1" src={val.image1[1]} alt="" />
                                <img className="ml-1" src={val.image1[2]} alt="" />
                                <img className="ml-1" src={val.image1[3]} alt="" />
                                <img className="ml-1" src={val.image1[4]} alt="" />
                              </div>
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

                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/** ./Meet Our Team */}
        {/** Our Blogs */}

        <div className='our-blogs our-blogs2 our-blogs3 py-2  px-10'>

          <h2 className='text-center text-3xl font-bold gast'>Cardiology Blogs</h2>
          <p className='stays text-center'>Stay up to date with our most recent news and updates</p>

          <div className='flex justify-center mt-10 blog-meta1'>

            <div className='blog-card-main w-[45%] mx-5'>
              <img className='h-[250px]' src={blog01} />
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
                <img className='w-[300px] h-[200px]' src={blog02} />
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
                <img className='w-[300px] h-[200px]' src={blog03} />
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
                  <p className='text-[#E74C3C] font-semibold my-1 testi'>Testimonial</p>
                  <p className='text-3xl font-extrabold text-slate-600 satisfied'>Satisfied Patients Reviews</p>
                  <div className='flex justify-center testimonial-img'>
                    <img src={testimonial} alt='testimonial-img' />
                  </div>

                  <p className='mb-5 text-slate-500 ita'>
                    I appreciate your hospital really good environment and excellent patient care. you are
                    continuously handle patient treatment wonderfully. Thanks for your great service. Please
                    enjoy the chocolates.
                  </p>
                  <div className="tara flex mb-3 justify-center">
                    <img src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                  </div>
                  <p className='font-bold text-slate-700'>Amanda Kinedy</p>
                </div>
                <img src={test01} className='testmonial-floating-img test1' alt='testimonial' />
                <img src={test01} className='testmonial-floating-img test2' alt='testimonial' />
                <img src={test02} className='testmonial-floating-img test3' alt='testimonial' />
                <img src={test03} className='testmonial-floating-img test4' alt='testimonial' />
                <img src={test04} className='testmonial-floating-img test5' alt='testimonial' />
                <img src={test05} className='testmonial-floating-img test6' alt='testimonial' />
                <img src={test06} className='testmonial-floating-img test7' alt='testimonial' />
                <img src={test07} className='testmonial-floating-img test8' alt='testimonial' />
                <img src={test08} className='testmonial-floating-img test9' alt='testimonial' />
                <img src={test09} className='testmonial-floating-img test10' alt='testimonial' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='patient-reviews flex justify-center py-20'>

                <div className=' text-center w-[40%]'>
                  <p className='text-[#E74C3C] font-semibold my-1 testi'>Testimonial</p>
                  <p className='text-3xl font-extrabold text-slate-600 satisfied'>Satisfied Patients Reviews</p>
                  <div className='flex justify-center testimonial-img'>
                    <img src={testimonial} alt='testimonial-img' />
                  </div>

                  <p className='mb-5 text-slate-500 ita'>
                    I appreciate your hospital really good environment and excellent patient care. you are
                    continuously handle patient treatment wonderfully. Thanks for your great service. Please
                    enjoy the chocolates.
                  </p>
                  <div className="tara flex mb-3 justify-center">
                    <img src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                  </div>
                  <p className='font-bold text-slate-700'>Amanda Kinedy</p>
                </div>
                <img src={test01} className='testmonial-floating-img test1' alt='testimonial' />
                <img src={test01} className='testmonial-floating-img test2' alt='testimonial' />
                <img src={test02} className='testmonial-floating-img test3' alt='testimonial' />
                <img src={test03} className='testmonial-floating-img test4' alt='testimonial' />
                <img src={test04} className='testmonial-floating-img test5' alt='testimonial' />
                <img src={test05} className='testmonial-floating-img test6' alt='testimonial' />
                <img src={test06} className='testmonial-floating-img test7' alt='testimonial' />
                <img src={test07} className='testmonial-floating-img test8' alt='testimonial' />
                <img src={test08} className='testmonial-floating-img test9' alt='testimonial' />
                <img src={test09} className='testmonial-floating-img test10' alt='testimonial' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='patient-reviews flex justify-center py-20'>

                <div className=' text-center w-[40%]'>
                  <p className='text-[#E74C3C] font-semibold my-1 testi'>Testimonial</p>
                  <p className='text-3xl font-extrabold text-slate-600 satisfied'>Satisfied Patients Reviews</p>
                  <div className='flex justify-center testimonial-img'>
                    <img src={testimonial} alt='testimonial-img' />
                  </div>

                  <p className='mb-5 text-slate-500 ita'>
                    I appreciate your hospital really good environment and excellent patient care. you are
                    continuously handle patient treatment wonderfully. Thanks for your great service. Please
                    enjoy the chocolates.
                  </p>
                  <div className="tara flex mb-3 justify-center">
                    <img src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                    <img className='ml-1' src={vect} alt="" />
                  </div>
                  <p className='font-bold text-slate-700'>Amanda Kinedy</p>
                </div>
                <img src={test01} className='testmonial-floating-img test1' alt='testimonial' />
                <img src={test01} className='testmonial-floating-img test2' alt='testimonial' />
                <img src={test02} className='testmonial-floating-img test3' alt='testimonial' />
                <img src={test03} className='testmonial-floating-img test4' alt='testimonial' />
                <img src={test04} className='testmonial-floating-img test5' alt='testimonial' />
                <img src={test05} className='testmonial-floating-img test6' alt='testimonial' />
                <img src={test06} className='testmonial-floating-img test7' alt='testimonial' />
                <img src={test07} className='testmonial-floating-img test8' alt='testimonial' />
                <img src={test08} className='testmonial-floating-img test9' alt='testimonial' />
                <img src={test09} className='testmonial-floating-img test10' alt='testimonial' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/** ./Patient Reviews */}




      </div>
      {
        apointPop && <ApointmentPopup setApointPop={setApointPop} />
      }
    </>
  )
}
