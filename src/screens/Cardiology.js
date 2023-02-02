import React, { useContext, useState } from 'react'
import { Navbar } from '../components/Navbar';
import cardiologyApi from '../api/cardilogiApi';
import ApointmentPopup from '../popup/ApointmentPopup';
import { Link } from 'react-router-dom';
const Cardiology = ({apointPop,setApointPop}) => {
 const [item,setItem] = useState(cardiologyApi);
  const filterBySearch = (event) =>{
     const query = event.target.value;
     var updateList = [...cardiologyApi]
     updateList = updateList.filter((it)=>{
       return it.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
     });

     setItem(updateList);
  }
  return (
    <>
        <Navbar/>
        <div className="cardio-back">
            <div className="cardio-sect">
                 <h2>Our Cardiology Expert</h2>
            </div>
        </div>
        <div className="filter">
            <div className="filter-group flex items-center">
                 <div className="inps-group">
                
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <input onChange={filterBySearch} type="search" id="default-search" class="block w-full py-2  sing " placeholder="Name" required/>
        <div class="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-4 h-4 areas" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        
    </div>

                 </div>
                 
               <div className="second-nsp flex items-center">
                 <p>Sort by :</p>
                 <label for="underline_select" class="sr-only">Underline select</label>
<select id="underline_select" class="block py-2  pyo">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
</select>
           </div>    


            </div>

            <div className="sard">
            {
              item.map(val=>{
                return(
                  <>
                  <div key={val.id} className="card">
                   <img className='main-img' src={val.images} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>{val.name}</h3>
                       <p>{val.content}</p>
                       <p>{val.content1}</p>
                     </div>
                    <div className="viwe-profile">
                        <Link to={`/cardio/${val.id}`}><p>{val.view}</p></Link>
                     </div>
                    
                   </div>
                   <hr />
                   <div className="information-doc">
                      <h3>{val.information}</h3>
                      <p>{val.informationCont}</p>
                      <p>{val.informationCont1}</p>
                      <div className="tara flex ">
                          <img src={val.image1[0]} alt="" />
                          <img className='ml-1' src={val.image1[1]} alt="" />
                          <img className='ml-1' src={val.image1[2]} alt="" />
                          <img className='ml-1' src={val.image1[3]} alt="" />
                          <img className='ml-1' src={val.image1[4]} alt="" />
                      </div>
                      <button onClick={()=> setApointPop(true)}>{val.appoint}</button>
                   </div>
                   </div>
               </div>  
                  </>
                )
              })
            }
             

               {/* <div className="card">
                   <img className='main-img' src={dr1} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>Dr. Rohan Shrma</h3>
                       <p>Senior Cardiology Expert at Major <br /> Hospital Mumbai</p>
                     </div>
                     <div className="viwe-profile">
                          <p>View Profile</p>
                     </div>

                   </div>
                   <hr />
                   <div className="information-doc">
                      <h3>Associate Director Cardiology</h3>
                      <p>MBBS, MD, DM, FSCAI, FIC(USA), FPD (MICHIGAN USA), FPI <br />(VIETNAM), FESC.</p>
                      <div className="tara flex">
                          <img  src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={untar} alt="" />
                      </div>
                      <button>Book an Appointment</button>
                   </div>
                   </div>
               </div>  

               <div className="card">
                   <img className='main-img' src={dr2} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>Dr. Sakshi Sena</h3>
                       <p>Senior Cardiology Expert at Major <br /> Hospital Dehradoon</p>
                     </div>
                     <div className="viwe-profile">
                          <p>View Profile</p>
                     </div>

                   </div>
                   <hr />
                   <div className="information-doc">
                      <h3>Associate Director Cardiology</h3>
                      <p>MBBS, MD, DM, FSCAI, FIC(USA), FPD (MICHIGAN USA), FPI <br />(VIETNAM), FESC.</p>
                      <div className="tara flex">
                          <img src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={untar} alt="" />
                          <img className='ml-1' src={untar} alt="" />
                      </div>
                      <button>Book an Appointment</button>
                   </div>
                   </div>
               </div>  

             

               <div className="card">
                   <img className='main-img' src={dr3} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>Dr. Mahi Rawat</h3>
                       <p>Senior Cardiology Expert at Major <br /> Hospital </p>
                     </div>
                     <div className="viwe-profile">
                          <p>View Profile</p>
                     </div>

                   </div>
                   <hr />
                   <div className="information-doc">
                      <h3>Associate Director Cardiology</h3>
                      <p>MBBS, MD, DM, FSCAI, FIC(USA), FPD (MICHIGAN USA), FPI <br />(VIETNAM), FESC.</p>
                      <div className="tara flex ">
                          <img src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={vect} alt="" />
                          <img className='ml-1' src={half} alt="" />
                      </div>
                      <button>Book an Appointment</button>
                   </div>
                   </div>
               </div> */}


            </div> 

        </div>
        {
          apointPop && <ApointmentPopup setApointPop={setApointPop}/>
        }
    </>
  )
}

export default Cardiology