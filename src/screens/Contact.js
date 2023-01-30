import React from 'react'
import { Navbar } from '../components/Navbar'

const Contact = () => {
  return (
     <>
       <Navbar/>
       <div className="contact-back">
            <div className="sect">
                  <h2>Contact Us</h2>
            </div>
       </div>
       <div className="any-question">
         <div className="contact-header">
            <h2>Any question or remarks?</h2>
            <p>Just drop us a message.</p>
            </div>
           
            <div className="two-side-cont">
                <div className="input-fields1">
                <div className="mb-1 w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital*</label>
    <input type="email" id="email" className=" block w-full" placeholder="Select Hospital" required/>
                 </div>
                 <div className="mb-1 w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email id</label>
    <input type="email" id="email" className=" block w-full" placeholder="Enter your email id" required/>
  </div>

  <div className="mb-1 w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
    <input type="email" id="email" className=" block w-full" placeholder="Enter your name" required/>
  </div>
  <div className="mb-1 w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className=" block w-full" placeholder="Enter your phone number" required/>
  </div>
                </div>

                <div className="textarea1">
                <div className="mb-1 w-full">
    <label style={{visibility:"hidden"}} for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone*</label>
    <textarea type="email" id="email" className=" block w-full" placeholder="Enter your query" required/>
  </div>
                </div>
            </div>
            
       </div>
     </>
  )
}

export default Contact