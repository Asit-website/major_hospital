import React,{useState} from 'react'
import ApointmentPopup from '../../popup/ApointmentPopup';
import HealthCheckupApi from '../../api/HealthCheckupApi';
const LabTest = ({apointPop,setApointPop}) => {
  const [health, setHealth] = useState(HealthCheckupApi);
  const filterBySearch = (event) => {
    const query = event.target.value;
    var updateList = [...HealthCheckupApi];
    updateList = updateList.filter((it) => {
      return it.advance.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setHealth(updateList);
  };
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
        <input onChange={filterBySearch} type="search" id="default-search" className="block w-full p-1" placeholder="Enter the test name and click search" required/>
    </div>
         </div>

         <div className="orji">
             <p>OR</p>
         </div>
           
         <div className="health-card health-card1">
        <h3>Explore the most common tests</h3>
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

          {
            health.length === 0 &&  <h2 className='no-data'>No Data to display</h2>
          }
        </div>
         </div>

    </div>

    {
      apointPop && <ApointmentPopup setApointPop={setApointPop}/>
    }
    </>
  )
}

export default LabTest