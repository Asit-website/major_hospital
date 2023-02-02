import React, { useState } from 'react'
import { AppointmentForm } from '../components/AppointmentForm'
import { Navbar } from '../components/Navbar'
import women from '../images/women.png'
import women1 from '../images/women1.png'
import patient_w from '../images/patient-story-w.png'
import btn from '../images/btn.png'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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

          <div className='specialist-cards flex mx-20 my-10 justify-between '>
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
        
        </div>
        {/** ./Specialities */}
        {/** Videos Slider */}
        <div className='video-slider flex items-center justify-center'>
        <div className='swipe-left-btn'>
            <FaAngleLeft/>
        </div>
        <div className="women-section">
                  <div className="wo-img">
                  <img className='imhk' src={btn} alt="" />
                      <img src={women} alt="women1" />
                  </div>
                 <div className="wo-img">
                     <img className='imhk' src={btn} alt="" />
                      <img src={women1} alt="women" />
                 </div>
                 
        </div>
        
        <div className='swipe-right-btn'>
            <FaAngleRight/>
        </div>
        </div>
        {/** ./Videos Slider */}
        {/** Patient Stories */}
        <div className='patient-stories-section flex mx-[130px] items-center my-[80px]'>
            <div className="wo-img relative w-[50%]">
              <img className='imhk' src={btn} alt="" />
              <img src={patient_w} alt="women" />
              <div className='swipe-left-btn absolute right-0 bottom-5'>
                <FaAngleLeft/>
              </div>
              <div className='swipe-right-btn absolute -right-[50px] bottom-5'>
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
        {/** ./Patient Stories */}
        {/** Our Services */}
        <div className='our-services-section bg-[#FEF9F9] py-10'>
            <div className='text-3xl text-center font-bold'>Our Services</div>
            <div className='text-lg text-center font-bold my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </div>
        
        </div>
        {/** ./Our Services */}




    </div>
  )
}
