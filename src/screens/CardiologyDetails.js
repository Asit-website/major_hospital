import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import cardiologyApi from '../api/cardilogiApi';
import { Navbar } from '../components/Navbar'

const CardiologyDetails = () => {
    const { name } = useParams();
   
    const [item,setItem] = useState(cardiologyApi);

    const details = item.filter((it,e)=>{
        return it.name === name;
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