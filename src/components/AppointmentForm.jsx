import React from 'react'
export const AppointmentForm = () => {
  return (
    <div className='absolute appointment-form flex justify-center'>
        
            <div className='form-details'>
                <div className='flex text-white mb-5 max-sm:flex-col'>
                    {/* <p className='text-2xl font-bold mr-10 max-sm:text-xl max-sm:mb-5 check'>CHECK SCHEDULES</p> */}
                    <p className='text-2xl font-bold mr-10 max-sm:text-xl check'>BOOK APPOINTMENT</p>
                </div>

                <div className='flex flex-wrap justify-between appointment-form-input max-sm:flex-col aplit-form'>
                    <select>
                        <option>Choose a department</option>
                        <option >Cardiology</option>
                        <option >Dental Care</option>
                        <option>Gastroenterology</option>
                        <option>Ophthalmology</option>
                        <option>Internal Medicine</option>
                        <option>Physiotherapy</option>
                        <option>Nutrition Services</option>
                    </select>
                    <input placeholder='Patient Name'/>
                    <input placeholder='Phone Number'/>
                    <input placeholder='Email Address'/>
                    <input placeholder='Doctor’s Name'/>
                    <input type="date" placeholder='Choose Date'/>
                
                </div>

                <div className='flex mt-5 items-center max-sm:flex-col'>
                    {/* <div className='white-btn mr-5 mb-5 max-sm:mr-0 yellow-btn5'>VIEW SCHEDULE</div> */}
                    <div className='yellow-btn yellow-btn5 mr-5 mb-5 max-sm:mr-0'>SUBMIT</div>
                    <div className='text-sm text-white mb-5 please-all'>Please fill out all of the fields correctly. your records will be saved in our database securely.</div>
                </div>
            </div>
        
    </div>
  )
}
