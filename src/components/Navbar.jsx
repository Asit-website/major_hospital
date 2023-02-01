import React, { useState } from 'react'
import { BsGeoAlt, BsGlobe2, BsChevronDown, BsSearch } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import  navLogo  from '../images/navigation-logo.png';

export const Navbar = () => {

  const [show, setShow] = useState('none');
  const handleDropdown = () => {
    setShow(show === 'none' ? 'flex' : 'none');
      document.getElementById('dropdown-item').style.display = show;

  }


  return (
    <div className='Navbar '>

    {/* Upper Navigation */}
      <div className='upper-nav flex justify-end py-2 px-20 text-sm font-medium first-nav '>
        <div className='flex items-center'>
            <BsGeoAlt className='mr-2'/>
            <p className='mr-2'>Hospital near me</p>
            <div className='verticalDivider'/>
        </div>

        <div className='flex items-center'>
            <BsGlobe2 className='mr-2'/>
            <p className='flex items-center mr-2' >Choose Language <BsChevronDown className='ml-2'/></p>
            <div className='verticalDivider'/>
        </div>

        <div className='flex items-center'>
            <p className='mr-2'>About Us</p>
            <p className='mr-2'>Career</p>
           <NavLink to="/contact"><p className='mr-2'>Contact Us</p></NavLink>
            <div className='verticalDivider'/>
        </div>

        <div className='flex items-center '>
          <div className='mr-2 alt-phn-circle'>
            <FaPhoneAlt className=''/>
          </div>
          <p className='mr-2 contact-number-red'>+91 8800401411</p>
         <NavLink to="/feedback"><div className='red-btn mx-2'>Share your feedback</div></NavLink>
        </div>
      </div>
      {/* ./Upper Navigation */}
      {/* Main Navigation*/}
      <div className='main-navigation flex justify-around items-center bottom-divider'>
       <NavLink to="/"> <div className='nav-logo'>
          <img  src={navLogo}/>
        </div>
        </NavLink>
        <div className='main-menu-items flex justify-between second-nav'>
          <p>Find a Doctor</p>
          <p>Book Health Check-Up</p>
          <p>Our Hospitals</p>
          <p className='flex items-center dropdown-menu-item'  onClick={handleDropdown}>Specialistes <BsChevronDown className='ml-2'/>
            <div className='flex dropdown-sub-menu p-1' id='dropdown-item'>
              <div className='y-divider w-1/2 sub-menu-items'>
                <p>Ophthalmology</p>
                <p>Internal Medicine</p>
                <p>Cold Laser Therapy</p>
                <p>Dental</p>
              </div>

              <div className='sub-menu-items w-1/2'>
                <p>Gastroenterology</p>
                <p>Physiotherapy</p>
                <p>Nutrition Services</p>
               <NavLink to="/cardio"><p>Cardiology</p></NavLink>
              </div>
            </div>
          </p>
          <p>Patient & Visitor</p>
          <p>Treatments</p>
        </div>

        <div className='flex items-center'>
          <div className='mx-5 main-menu-search'>
            <BsSearch />
          </div>
          <div className='red-btn red-btn1 mx-5'>Register</div>
        </div>
      
      </div>
      {/* ./Main Navigation*/}
    </div>
  )
}
