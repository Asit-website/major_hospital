import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from "../../components/Navbar"
import CareerBack from './common/CareerBack'
const JobOpening = () => {
  return (
    <>
     <Navbar/>
    <CareerBack/>
     <div className="carer-section relative">
         <div className="serach-section">
              <div className="search-carer">
                  <select name="" id="">
                      <option value="">Job Location</option>
                  </select>
              </div>
              <div className="search-carer">
                  <select name="" id="">
                      <option value="">Professional Areas</option>
                  </select>
              </div>
              <div className="search-carer">
                  <select name="" id="">
                      <option value="">Sub Category</option>
                  </select>
              </div>
              <div className="search-carer">
                  <select name="" id="">
                      <option value="">Job Title</option>
                  </select>
              </div>
              <div className="search-button">
                    <button className='sea'>Search</button>
                    <button className='reset'>Reset</button>
              </div>
         </div>

        <div className=' relative'>  
<div class="relative overflow-x-auto table-opening">
    <table class="w-full  text-left">
        <thead class="">
            <tr className='table-sect border-b '>
                <th scope="col" class="px-6 py-3">
                    <h2>Job Title</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                   <h2>Professional Area</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                    <h2>Location</h2>
                </th>
                <th scope="col" class="px-6 py-3">
                    <h2>Action</h2>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b  table-sect1">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <p>Senior Manager - Finance Accounts</p>
                </th>
                <td class="px-6 py-4">
                    <p>Doctors & Sergeon</p>
                </td>
                <td class="px-6 py-4">
                   <p>Gurugram</p>
                </td>
                <td class="px-6 py-4">
                   <button className=' text-center'>Apply</button>
                </td>
            </tr>
        
            <tr class=" border-b  table-sect1">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <p>Senior Manager - Finance Accounts</p>
                </th>
                <td class="px-6 py-4">
                    <p>Doctors & Sergeon</p>
                </td>
                <td class="px-6 py-4">
                   <p>Gurugram</p>
                </td>
              <NavLink to="/careerDetails"><td class="px-6 py-4">
                   <button className=' text-center'>Apply</button>
                </td></NavLink>
            </tr>
            <tr class=" border-b  table-sect1">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <p>Senior Manager - Finance Accounts</p>
                </th>
                <td class="px-6 py-4">
                    <p>Doctors & Sergeon</p>
                </td>
                <td class="px-6 py-4">
                   <p>Gurugram</p>
                </td>
                <td class="px-6 py-4">
                   <button className=' text-center'>Apply</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>
      
     </div>
     <div className="about-major">
          <h2>About Major Hospital</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      


    </>
  )
}

export default JobOpening