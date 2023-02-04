import React from 'react'

export const SpecialistCard = (props) => {
  return (
    <div className="speciality-card bg-[#ffffff] w-[90%]">
                   <img className='main-img rounded-t-[10px]' src={props.img} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>{props.name}</h3>
                       <p>Cardiology Expert</p>
                       <div className="tara flex mb-5">
                          <img  src={props.vect} alt="" />
                          <img className='ml-1' src={props.vect} alt="" />
                          <img className='ml-1' src={props.vect} alt="" />
                          <img className='ml-1' src={props.vect} alt="" />
                          <img className='ml-1' src={props.untar} alt="" />
                      </div>
                     </div>
                     <div className="viwe-profile">
                          <p>View Profile</p>
                     </div>

                   </div>
                   <hr />
                   <div className="information-doc">
                      <h3>Associate Director Cardiology</h3>
                      <p>MBBS, MD, DM, FSCAI, FIC(USA), FPD (MICHIGAN USA), FPI <br />(VIETNAM), FESC.</p>
                      
                      
                   </div>
                   </div>
    </div> 
  )
}
