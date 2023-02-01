import React, { useState } from 'react'
import { AppointmentForm } from '../components/AppointmentForm'
import { Navbar } from '../components/Navbar'
import ApointmentPopup from '../popup/ApointmentPopup'

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

export const Home = ({apointPop,setApointPop}) => {

  const [selSpecialist, setSelSpecialist] = useState(0);

  const handleSpecialist = (id) => {
    setSelSpecialist(id);
  }
  return (
    <>
    <div>
        <Navbar/>
        {/** Banner */}
        <div className='relative '>
            <div className='home-banner flex items-center px-20'>
                <div className='home-banner-details w-[35%]'>
                    <p className='text-xl text-gray-800 my-3 major-para'>Major Hospital</p>
                    <p className='text-5xl font-bold destination-para'>A Destination for
                    Advanced Care</p>
                    <p className='text-2xl text-gray-800 my-3 trust-hos'>The hospital you trust to care for those
                   <br /> you love.</p>

                    <button onClick={()=> setApointPop(true)} className='yellow-btn my-5 yellow-btn1 '>Book an Appointment</button>
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
              <div className={selSpecialist === specialist.id ? 'text-center font-semibold text-xl mb-8 text-white' : 'text-center font-semibold text-xl mb-8'}>{specialist.title}</div>

            </div>
            )}
            
          </div>
        
        </div>
        {/** ./Specialities */}
        {/** Videos Slider */}
        {/** ./Videos Slider */}


    </div>

    {
       apointPop && <ApointmentPopup setApointPop={setApointPop}/>
    }
    </>
  )
}
