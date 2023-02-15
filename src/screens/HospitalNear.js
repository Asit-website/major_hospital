import React from 'react'
import locatio from '../images/locatio.png';
import action from '../images/action.png';
import dir from '../images/dir.png'
import vect from '../images/vect.png'
const HospitalNear = () => {
  return (
     <>
        <div className="hospital-near">
             <div className="result-for">
                 <div className="first-for">
                   <p>Results for <span>Lorem Ipsum, Uttar Pradesh</span></p>
                 </div>
                 <div className="second-for">
                      <img src={locatio} alt="locatio" />
                 </div>
             </div>
             <div className="places mt-5">
                 <h2>Places</h2>
                 <img src={action} alt="action" />
                 <div className="select-near-btn flex items-center">
   <div className='first-near-btn'>   

       <select name="" id="">
          <option value="">Rating</option>
       </select>               
   </div>   

<div className='second-near-btn'>   

<select name="" id="">
          <option value="">Hours</option>
       </select>      
</div>   

                 </div>
             </div>

             <div className="map-hospital">
             <div className="first-ji1">
                  <div className="first-map">
                      <div className='care'>
                          <h3>Medical Care Clinic</h3>
                          <div className='car1 flex items-center'>
                             <p>5.0</p>
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <p className='fgim'> . Hospital</p>
                          </div>

                          <p className='durh'>durgaganj kakori</p>
                          <p className='aoon'>Opens soon <span className='pm'> . 5Pm</span></p>

                      </div>
                      <div className='firection'>
                      <div className="direction-ji">
                          <img src={dir} alt="dir" />
                         
                      </div>
                      <p className='seng'>Direction</p>
                      </div>
                  </div>
                    <div className="map-hr"></div>
                    <div className="first-map">
                      <div className='care'>
                          <h3>Medical Care Clinic</h3>
                          <div className='car1 flex items-center'>
                             <p>5.0</p>
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <p className='fgim'> . Hospital</p>
                          </div>

                          <p className='durh'>durgaganj kakori</p>
                          <p className='aoon'>Opens soon <span className='pm'> . 5Pm</span></p>

                      </div>
                      <div className='firection'>
                      <div className="direction-ji">
                          <img src={dir} alt="dir" />
                         
                      </div>
                      <p className='seng'>Direction</p>
                      </div>
                  </div>
                  <div className="map-hr"></div>
                  <div className="first-map">
                      <div className='care'>
                          <h3>Medical Care Clinic</h3>
                          <div className='car1 flex items-center'>
                             <p>5.0</p>
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <img className='fgim' src={vect} alt="" />
                             <p className='fgim'> . Hospital</p>
                          </div>

                          <p className='durh'>durgaganj kakori</p>
                          <p className='aoon'>Opens soon <span className='pm'> . 5Pm</span></p>

                      </div>
                      <div className='firection'>
                      <div className="direction-ji">
                          <img src={dir} alt="dir" />
                         
                      </div>
                      <p className='seng'>Direction</p>
                      </div>
                  </div>
                  <div className="more-map relative">
                   <button className='more-place'>More places <span><i class="fa-solid fa-arrow-right"></i></span></button>
                   </div>
                  <div className="map-hr"></div>
                  </div>
                  <div className="second-map">
                  <div className=''>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224369.0356247885!2d77.26107938753395!3d28.516681710818563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1672126747474!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                  </div>
             </div>
        </div>
     </>
  )
}

export default HospitalNear