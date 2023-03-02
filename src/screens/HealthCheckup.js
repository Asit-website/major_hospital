import React, { useState } from "react";
import HealthCheckupApi from "../api/HealthCheckupApi";
import ApointmentPopup from "../popup/ApointmentPopup";
const HealthCheckup = ({ apointPop, setApointPop }) => {
  const [health, setHealth] = useState(HealthCheckupApi);

  const allGender = [
    ...new Set(HealthCheckupApi.map((CurrElem) => CurrElem.gender)),
  ];

  const [genItem, setGenItem] = useState(allGender);

  const filterItem = (Cate) => {
    if (Cate === "all1") {
      setHealth(HealthCheckupApi);
      return;
    }

    const newItem = HealthCheckupApi.filter((Curr) => {
      return Curr.gender === Cate;
    });

    setHealth(newItem);
  };

  const allLocation = [...new Set(HealthCheckupApi.map((CurrElem)=> CurrElem.location))];

  const [locationItem,setLocationItem] = useState(allLocation);
  
  const filterItem1 = (cate) =>{
      if(cate === "all"){
        setHealth(HealthCheckupApi);
        return;
      }

      const newItem1 = HealthCheckupApi.filter((curr)=>{
          return curr.location === cate
      });

      setHealth(newItem1);
  }

  return (
    <>
      <div className="cardio-back cardio-check">
        <div className="cardio-sect">
          <h2>Book Health Check-Up</h2>
        </div>
      </div>
      
      <div className="filter-group flex items-center py-6">
        <div className="inps-group">
          <div className="second-nsp second-nsp1 flex items-center">
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select onChange={(e)=> filterItem1(e.target.value)} id="underline_select" class="block py-2  pyo">
              <option value="all">Select Location</option>
               {
                locationItem.map((val,index)=>{
                    return <option key={index} value={val}>{val}</option>
                })
               }
            </select>
          </div>
        </div>
       
        <div className="second-nsp second-nsp1 flex items-center">
          <label for="underline_select" class="sr-only">
            Underline select
          </label>
          <select onChange={(event)=> filterItem(event.target.value)} id="underline_select" class="block py-2  pyo">
            <option value="all1">Select Gender</option>
            {
              genItem.map((val,index)=>{
                return <option key={index} value={val}>{val}</option>
              })
            }
          </select>
        </div>
      </div>

      <div className="health-card">
        <h3>Popular Packages</h3>
        <div className="health-sard mt-1">
          {health.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <div className="health-box">
                  <div className={`off ${val.off1}`}>
                    <p>
                      {val.percentage} <br /> {val.percentage1}
                    </p>
                  </div>
                  <img src={val.images} alt="shut2" />
                  <div className="health-sox">
                    <h2>{val.advance}</h2>
                    <div className="para-he">
                      <p>{val.range}</p>
                      <p>{val.willness}</p>
                    </div>
                    <div className="health-btn">
                      <button className="know_more">{val.know}</button>
                      <button
                        onClick={() => setApointPop(true)}
                        className="book_more"
                      >
                        {val.book}
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          {/* <div className="health-box">
                         <div className="off">
                              <p>20% <br /> OFF</p>
                         </div>
                           <img src={shut3} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut1} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut2} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div> */}
        </div>

        {/* <div className="health-sard mt-9">
                     <div className="health-box">
                         <div className="off">
                              <p>20% <br /> OFF</p>
                         </div>
                           <img src={shut3} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut1} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>

                     <div className="health-box">
                           <img src={shut2} alt="shut2" />
                           <div className="health-sox">
                           <h2>Advanced Health Checkup</h2>
                           <div className="para-he">
                           <p>A range of tests recommended for your</p>
                           <p>complete wellness.</p>
                           </div>
                           <div className="health-btn">
                              <button className='know_more'>Know More</button>
                              <button className='book_more'>Book</button>
                           </div>
                           </div>
                     </div>
                 </div> */}
      </div>

      {apointPop && <ApointmentPopup setApointPop={setApointPop} />}
    </>
  );
};

export default HealthCheckup;
