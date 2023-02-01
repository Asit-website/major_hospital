import React from 'react'
import { Navbar } from '../components/Navbar'
import shut1 from '../images/shut1.png';
import shut2 from '../images/shut2.png';
import shut3 from '../images/shut3.png';
const HealthCheckup = ({apointPop,setApointPop}) => {
  return (
    <>
        <Navbar/>
        <div className="cardio-back cardio-check">
            <div className="cardio-sect">
                 <h2>Book Health Check-Up</h2>
            </div>
        </div>

        <div className="filter-group flex items-center py-6">
                 <div className="inps-group">
                
                 <div className="second-nsp second-nsp1 flex items-center">
                 <label for="underline_select" class="sr-only">Underline select</label>
<select id="underline_select" class="block py-2  pyo">
    <option selected>Select Location</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
</select>
           </div>    

                 </div>
                 
               <div className="second-nsp second-nsp1 flex items-center">
                 <label for="underline_select" class="sr-only">Underline select</label>
<select id="underline_select" class="block py-2  pyo">
    <option selected>Select Gender</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
</select>
           </div>    


            </div>

            <div className="health-card">
            <h3>Popular Packages</h3>
                 <div className="health-sard mt-9">
                     <div className="health-box">
                         <div className="off">
                              <p>20% <br /> OFF</p>
                         </div>
                           <img src={shut3} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut1} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut2} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>
                 </div>

                 <div className="health-sard mt-9">
                     <div className="health-box">
                         <div className="off">
                              <p>20% <br /> OFF</p>
                         </div>
                           <img src={shut3} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut1} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut2} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>
                 </div>
                 
            </div>
    </>
  )
}

export default HealthCheckup