import React from 'react'

const LabTest = () => {
  return (
    <>
    <div className='lab-back'>
       <div className="lab-sect">
           <h2>Lab Tests & Diagnostics</h2>
       </div>
    </div>
    <div className="lab-filter">
         <h2 className='find'>Find the test you are looking for</h2>
   <div className='lab-filter1'>
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative di">
        <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 filter-unu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-1" placeholder="Enter the test name and click search" required/>
    </div>
</div>

    </div>
    </>
  )
}

export default LabTest