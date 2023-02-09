import React, { useState } from 'react'
import { BsGeoAlt, BsGlobe2, BsChevronDown, BsSearch } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import  navLogo  from '../images/navigation-logo.png';

export const Navbar = () => {

  const [show, setShow] = useState('none');
  const [show1,setShow1] = useState('none');

  const [open,setOpen] = useState(false);
  const [showAbout,setShowAbout] = useState('none');
  const handleDropdown = () => {
    setShow(show === 'none' ? 'flex' : 'none');
      document.getElementById('dropdown-item').style.display = show;

  }

  const styleMenu = {
    left: open ? 0 : "-100%"
  }

  const funcMenu = () =>{
     setOpen(!open);
  }



  const handleDropdown1 = () =>{
       setShow1(show === 'none' ? 'block' : 'none');
       document.getElementById('drop-menu').style.display = show1;
  }

  const handleAboutDropdown = () => {
    setShowAbout(showAbout === 'none' ? 'flex' : 'none');
      document.getElementById('about-us-dropdown').style.display = showAbout;
  }

  

  return (
    <div className='Navbar '>

    {/* Upper Navigation */}
      <div className='upper-nav flex justify-end py-2 px-20 text-sm font-medium first-nav '>
        <div className='flex items-center'>
            <BsGeoAlt className='mr-2'/>
           <NavLink to="/iodolgy"><p className='mr-2'>Hospital near me</p></NavLink>
            <div className='verticalDivider'/>
        </div>

        <div className='flex items-center near-me'>
            <BsGlobe2 className='mr-2'/>
            <p className='flex items-center mr-2' >Choose Language <BsChevronDown className='ml-2'/></p>
            <div className='verticalDivider'/>
        </div>
{/* ===============nav============ */}
        <div className='flex items-center near-me1'>
           <div className=''>
            <p  className='mr-2 relative systen flex items-center dropdown-menu-item' onClick={handleAboutDropdown}>About Us
            <div className='flex dropdown-about-sub-menu p-1' id='about-us-dropdown'>
            <div className='w-[100%] sub-menu-items'>
              <NavLink to="/iodolgy"><p className='bottom-divider pb-1'>Our Ideology</p></NavLink>
              <NavLink to="/acheive"><p className='bottom-divider pb-1'>Our Achievement</p></NavLink>
              <p>Special Clinic</p>
            </div>
          </div>
           </p>
            </div>
            <p className='mr-2'>Career</p>
           <NavLink to="/contact"><p className='mr-2'>Contact Us</p></NavLink>
            <div className='verticalDivider'/>
        </div>

        <div className='flex items-center near-me2 '>
          <div className='mr-2 alt-phn-circle'>
            <FaPhoneAlt className=''/>
          </div>
          <p className='mr-2 contact-number-red'>+91 8800401411</p>
         <NavLink to="/feedback"><div className='red-btn mx-2'>Share your feedback</div></NavLink>
        </div>
      </div>
      {/* ./Upper Navigation */}
      {/* Main Navigation*/}
      <div className='ki flex items-center justify-between'>
      <i onClick={funcMenu} id="men" className="fa-solid fa-bars solji"></i>
      <img src={navLogo} alt="" />
      </div>
      <div  className='main-navigation'>
      <div style={styleMenu}  className="flex justify-around items-center bottom-divider main-navigation1">
       <NavLink to="/"> <div className='nav-logo'>
          <img  src={navLogo}/>
        </div>
        </NavLink>
        <div className='main-menu-items flex justify-between second-nav'>
          <p>Find a Doctor</p>
         <NavLink to="/health"><p>Book Health Check-Up</p></NavLink>
          <p>Our Hospitals</p>
          <p className='flex items-center dropdown-menu-item'  onClick={handleDropdown}>Specialistes <BsChevronDown className='ml-2'/>
            <div className='flex dropdown-sub-menu p-1' id='dropdown-item'>
              <div className='y-divider w-1/2 sub-menu-items'>
               <NavLink to="/opthomology"><p>Ophthalmology</p></NavLink>
               <NavLink to="/medicine"><p>Internal Medicine</p></NavLink>
               <NavLink to="/coldLeaser"><p>Cold Laser Therapy</p></NavLink>
               <NavLink to="/dental"><p>Dental</p></NavLink>
              </div>

              <div className='sub-menu-items w-1/2'>
               <NavLink to="/gasto"><p>Gastroenterology</p></NavLink>
               <NavLink to="/physcio"><p>Physiotherapy</p></NavLink>
               <NavLink to="/nutro"><p>Nutrition Services</p></NavLink>
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
      </div>
      {/* ./Main Navigation*/}
    </div>
  )
}
