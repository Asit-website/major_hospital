import React from 'react'

export const AppointmentForm = () => {
  return (
    <div className='absolute appointment-form flex justify-center'>
        
            <div className='form-details'>
                <div className='flex text-white mb-5'>
                    <p className='text-2xl font-bold mr-10'>CHECK SCHEDULES</p>
                    <p className='text-2xl font-bold mr-10'>BOOK APPOINTMENT</p>
                </div>

                <div className='flex flex-wrap justify-between appointment-form-input'>
                    <select>
                        <option disabled selected hidden>Choose a department</option>
                    </select>
                    <input placeholder='Patient Name'/>
                    <input placeholder='Phone Number'/>
                    <input placeholder='Email Address'/>
                    <input placeholder='Doctor’s Name'/>
                    <input placeholder='Choose Date'/>
                
                </div>

                <div className='flex mt-5 items-center'>
                    <div className='white-btn mr-5'>VIEW SCHEDULE</div>
                    <div className='yellow-btn yellow-btn5 mr-5'>SUBMIT</div>
                    <div className='text-sm text-white'>Please fill out all of the fields correctly. your records will be saved in our database securely.</div>
                </div>
            </div>
        
    </div>
  )
}
