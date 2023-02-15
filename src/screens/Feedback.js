import React from 'react'
import smile from '../images/smile.png';
const Feedback = () => {
  return (
   <>
     <div className="feedback-back">
          <div className="sect-fed">
              <h2>Share Feedback</h2>
          </div>
     </div>

     <div className="share-feed">
        <h2>Share your Feedback</h2>
        <p>We love to hear about our doctors, facilities and your treatment at Major.</p>
        <div className="shadow-feed">
        <div className="two-side-cont">
                <div className="input-fields1">
                <div className=" w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital*</label>
    <input type="email" id="email" className=" block w-full" placeholder="Select Hospital" required/>
                 </div>
                 <div className=" w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email id</label>
    <input type="email" id="email" className=" block w-full" placeholder="Enter your email id" required/>
  </div>

  <div className=" w-full">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name*</label>
    <input type="email" id="email" className=" block w-full" placeholder="Enter your name" required/>
  </div>
  <div className="mt-7 w-full lett">
      <h2>Please Rate Your Experience At Major Hospitals</h2>
      <div className="diff-sut">
         <div className="first-suit">
              <img src={smile} alt="smile" />
              <input type="radio" />
              <h4>Excellent</h4>
         </div>
         <div className="first-suit">
              <img src={smile} alt="smile" />
              <input type="radio" />
              <h4>Good</h4>
         </div>
         <div className="first-suit">
              <img src={smile} alt="smile" />
              <input type="radio" />
              <h4>Ok</h4>
         </div>
         <div className="first-suit">
              <img src={smile} alt="smile" />
              <input type="radio" />
              <h4>Bad</h4>
         </div>
      </div>
  </div>
                </div>

                <div className="textarea1">
                <div className="mb-1 w-full">
    <label style={{visibility:"hidden"}} for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone*</label>
    <textarea type="email" id="email" className=" block w-full" placeholder="Feedback" required/>
                </div>

                  <div className="feed-btn">
                      <button>Submit</button>
                  </div>
                </div>
            </div>
            
        </div>
     </div>
   </>
  )
}

export default Feedback