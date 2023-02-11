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
       <div className="table-opening">
            <div className="table-sect flex items-center justify-between">
                 <h2>Job Title</h2>
                 <h2>Location</h2>
                 <h2 className='mr-10'>Action</h2>
            </div>
            <hr className='my-5' />
            <div className="table-sect1 flex items-center justify-between">
                 <p>Job Title</p>
                 <p className='ml-6'>Delhi</p>
                <NavLink to="/careerDetails"><button className=' mr-0'>Apply</button></NavLink>
            </div>
            <hr className='my-5' />
            <div className="table-sect1 flex items-center justify-between">
                 <p>Job Title</p>
                 <p className='ml-6'>Delhi</p>
                 <button className=' mr-0'>Apply</button>
            </div>

            <hr className='my-5' />
            <div className="table-sect1 flex items-center justify-between">
                 <p>Job Title</p>
                 <p className='ml-6'>Delhi</p>
                 <button className=' mr-0'>Apply</button>
            </div>
            <hr className='my-5' />
            <div className="table-sect1 flex items-center justify-between">
                 <p>Job Title</p>
                 <p className='ml-6'>Delhi</p>
                 <button className=' mr-0'>Apply</button>
            </div>
            <hr className='my-5' />
            <div className="table-sect1 flex items-center justify-between">
                 <p>Job Title</p>
                 <p className='ml-6'>Delhi</p>
                 <button className=' mr-0'>Apply</button>
            </div>
            <hr className='my-5' />
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