import React from 'react'
import CareerBack from './common/CareerBack';
const JobOpeningDetails = () => {
  return (
   <>
    <CareerBack/>
    <div className="job-description">
    <h2>Job Description</h2>
    <div className='mt-6'>
        <div className='job-change'>
            <div></div>
            <p>6-10 years of experience</p>
        </div>
        <div className='job-change'>
            <div></div>
            <p>CA</p>
        </div>
        <div className='job-change'>
            <div></div>
            <p>Hospital Experience is a must</p>
        </div>
        <div className='job-change'>
            <div></div>
            <p>Best Salary as per the industry standard</p>
        </div>
          <p className='cv'>Share your CV at  hr@loremsipsum.com or Call: +910123456789</p>
        </div>
    </div>

    <div className="work-together">
         <h2>Let’s work together !</h2>
         <div className="form-carer">
            
<form>
<div className="flex work-follow">
  <div class="mb-10 w-full">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
    <input type="email" id="email" class=" block w-full" placeholder="Enter Name Here" required/>
  </div>
  <div class="mb-10 w-full dusra-h">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id*</label>
    <input placeholder='Enter Email Id' type="email" id="password" class=" block w-full" required/>
  </div>
  </div>
  <div className="flex work-follow">
  <div class="mb-10 w-full">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth*</label>
    <input  type="date" id="email" class=" block w-full appearance-none" placeholder="Enter DOB" required/>
  </div>
  <div class="mb-10 w-full dusra-h">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number*</label>
    <input placeholder='Enter Phone Number' type="text" id="password" class=" block w-full" required/>
  </div>
  </div>
  <div className="flex work-follow">
  <div class="mb-10 w-full">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit*</label>
    <input type="email" id="email" class=" block w-full" placeholder="Major Hospital. Delhi" required/>
  </div>
  <div class="mb-10 w-full dusra-h">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Applying For*</label>
    <select className='d-block w-full' name="" id="">
        <option value="">Senior Manager - Finance Account</option>
    </select>
  </div>
  </div>

  <div className="flex files work-follow">
  <div class="mb-9 w-full">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attach Resume*</label>
    <div className="flex w-full">
        <div className='w-full'>
        <input type="file" id="email" class=" block w-full" placeholder="Major Hospital. Delhi" required/>
    <p>(Upload Limit 2mb)</p>
        </div>
         <button className='upload'>Upload</button>
    </div>
  
  </div>
  <div  class="mb-9 w-full dusra-h dusra-h1">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Applying For*</label>
    <select className='d-block w-full' name="" id="">
        <option value="">Senior Manager - Finance Account</option>
    </select>
  </div>
  </div>
   <div className="flex">
       <button className='sun'>Submit</button>
       <button className='reset'>Reset</button>
   </div>
</form>

         </div>
    </div>

    <div className="about-major">
          <h2>About Major Hospital</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
   </>
  )
}

export default JobOpeningDetails