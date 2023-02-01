import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import cardiologyApi from '../api/cardilogiApi';
import { Navbar } from '../components/Navbar'

const CardiologyDetails = () => {
    const { id } = useParams();
   
    const [item,setItem] = useState(cardiologyApi);

    const details = item.filter((it,e)=>{
       return it.id === id 
    });

    
  return (
    <>
      <Navbar/>

     <div>
        {
           details.map(val=>{
              return (
                <>
                {/* <p>{val.name}</p> */}
                <img src={val.images} alt="" />
                </>
              )
           })
        }
        
     </div>

    </>
  )
}

export default CardiologyDetails