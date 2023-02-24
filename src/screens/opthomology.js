import React, { useState } from "react";
import ApointmentPopup from "../popup/ApointmentPopup";
import rec from "../images/rec.png";
import btn from "../images/btn.png";
import Frame from "../images/Frame.png";
import hath from "../images/hath.jpg";
import { Link } from "react-router-dom";
import doc4 from "../images/doc4.png";
import cardiologyApi from "../api/cardilogiApi";
import opto from "../images/opto.png";
import opto1 from "../images/opto1.png";
import opto2 from "../images/opto2.png";
const Opthomology = ({ apointPop, setApointPop }) => {
  const [item, setItem] = useState(cardiologyApi);
  const [visible, setVisible] = useState(3);

  const showMoreDoctore = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <>
      <div className="medicine-back medicine-back5">
        <div className="medicine-sect">
          <h2>Ophthalmology</h2>
        </div>
      </div>

      <div className="about-institute about-int">
        <div className="institute">
          <h4>About the Ophthalmology  </h4>
          <p>
            Ophthalmology Department at the Center of Diabetes and Allied
            Sciences (Major) has a team of experienced doctors and surgeons
            passionate to provide eye care services including medical, surgical,
            and reconstructive services. With highly sophisticated technology
            and state-of-the-art instruments at our center, we offer the best
            services in the field of ophthalmology to patients from kids to the
            Elderly. Major Hospital Is The <span className="bh">Best Eye Hospital In Gurgaon</span>  <br /> While we
            boast about our expert hands in performing numerous <span>cataract
            surgeries</span> , our approach to diabetic patients begin as soon as they
            start treatment with us. We screen our patients routinely, offer
            precise guidance and prevent diabetic eye complications altogether
            which is an almost impossible feat elsewhere.
          </p>
        </div>
        <div className="institute-img">
          <img className="dov-img" src={doc4} alt="dotor" />
        </div>
      </div>
      <div className="sidek">
      <div className="stress-over">
         <h2>Stress Over Your Eye Health More than Your <br /> Health Insurance Covering Eye Exams.</h2>
         <h4>You Should Follow These Steps</h4>
         <div  className="boxing mt-8">
              <div className="boxing2 flex items-center justify-center flex-wrap">
                 <p>Natural Air</p>
                 <p>Natural Air</p>
                 <p>Stop Smoking</p>
                 <p>Dodge Dry Air</p>
                 <p>Remain Hydrated</p>
                 <p>Shades are Helpful</p>
                 <p>Try not to Rub Your Eyes</p>
              </div>

              <div className="boxing2 flex items-center justify-center mt-9 flex-wrap">
                 <p>Consolidate Blinking Breaks</p>
                 <p>Solid Diet Healthy Eyesight</p>
                 <p>Consolidate Blinking Breaks</p>
                 <p>Be Careful About Your Contacts</p>
              </div>

              <div className="boxing2 flex items-center justify-center mt-9 flex-wrap">
                 <p>Stay away from Excessive Coffee Consumption</p>
                 <p>Think about Your Family Health History</p>
                 <p>Sharing Your Towel is anything but a Good Idea </p>
              </div>

              <div className="boxing2 flex items-center justify-center mt-9 flex-wrap">
                 <p>Try not to Underestimate the Power of Protective Eyewear</p>
                 <p>Dodge Excessive Exposure to Computer Screens</p>
              </div>

              <p className="boxv">
              The vast majority depend on their eyes to see and figure out their general surroundings. However, some eye illnesses can prompt vision misfortune, so it is critical to recognize and treat eye sicknesses as right on time as could reasonably be expected. You ought to get your eyes checked as frequently as your medical care supplier suggests it, or on the off chance that you have any new vision issues. What’s more, similarly as it is essential to keep your body solid, you likewise need to keep your eyes Healthy.
              </p>
           
         </div>
      </div>
      </div>

      <div className="treats">
        {/* <img  className='hath' src={hath} alt="hath" />
                <h2>What we treat</h2>
                <p className='treats-p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and scrambled it to make a type.</p>

                <div className="lorem">
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>

                <div className="treats-back">
                     <div className="treats-sect">
                          <h2>Our approach to treat you</h2>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                     </div>
                   
                </div> */}
        <div className=" relative">
          <div className="consult">
            <img className="hath" src={Frame} alt="" />
            <h3 className="exy mt-2">Consult with experienced doctors</h3>
            <div className="sard">
              {item.slice(0, visible).map((val) => {
                return (
                  <>
                    <div key={val.id} className="card card1">
                      <img className="main-img" src={val.images} alt="" />
                      <div className="igh">
                        <div className="name-card">
                          <div className="text-card">
                            <h3>{val.name}</h3>
                            <p>Senior Dental Expert at Major</p>
                            <p>Hospital Haryana</p>
                          </div>
                          <div className="viwe-profile">
                            <Link to={`/cardio/${val.id}`}>
                              <p>{val.view}</p>
                            </Link>
                          </div>
                        </div>
                        <hr />
                        <div className="information-doc">
                          <h3>{val.information}</h3>
                          <p>{val.informationCont}</p>
                          <p>{val.informationCont1}</p>
                          <div className="tara flex">
                            <img src={val.image1[0]} alt="" />
                            <img className="ml-1" src={val.image1[1]} alt="" />
                            <img className="ml-1" src={val.image1[2]} alt="" />
                            <img className="ml-1" src={val.image1[3]} alt="" />
                            <img className="ml-1" src={val.image1[4]} alt="" />
                          </div>
                          <button onClick={() => setApointPop(true)}>
                            {val.appoint}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <p onClick={showMoreDoctore} className="see_more cursor-pointer">
              See More Doctors
            </p>
          </div>
        </div>
      </div>

      <div className="our-blogs our-blogs2 py-2  px-10">
        <h2 className="text-center text-3xl font-bold gast">
          Ophthalmology Blogs
        </h2>
        <p className="stays text-center">
          Stay up to date with our most recent news and updates
        </p>

        <div className="flex justify-center mt-10 blog-meta1">
          <div className="blog-card-main w-[45%] mx-5">
            <img className="h-[250px]" src={opto} />
            <div className="p-5">
              <div className="flex justify-between">
                <div className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  2 January 2023
                </div>
              </div>
              <div className="my-2 text-md text-[#222F3E]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen.
              </div>
              <div className="text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer">
                Know More
              </div>
            </div>
          </div>

          <div className="blog-cards-secondary w-[45%] mx-5 blog-card-mar">
            <div className="blog-card-secondary flex mb-6 items-center">
              <img className="w-[300px] h-[200px]" src={opto1} />
              <div className="text-sm p-5">
                <div className="flex justify-between my-2  blog-meta">
                  <p className="font-bold">
                    Chronic Kidney Disease – The Silent Killer
                  </p>
                  <p className="text-xs font-bold">05 January</p>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer mt-1">
                  Know More
                </div>
              </div>
            </div>

            <div className="blog-card-secondary flex items-center">
              <img className="w-[300px] h-[200px]" src={opto2} />
              <div className="text-sm p-5">
                <div className="flex justify-between my-2">
                  <p className="font-bold">What to do when you have Stroke?</p>
                  <p className="text-xs font-bold">13 January</p>
                </div>
                <p>
                  Stroke is also called as Brain Attack. It is a paralysis
                  attack in which person loses power of any body part. It is
                  caused by blockage in the arteries supplying blood to the
                  brain
                </p>
                <div className="text-[#E74C3C] font-bold underline underline-offset-4 cursor-pointer mt-1">
                  Know More
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="blog-btn1">View All Blog</button>
        </div>
      </div>

      {apointPop && <ApointmentPopup setApointPop={setApointPop} />}
    </>
  );
};

export default Opthomology;
