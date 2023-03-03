import React, { useState } from "react";
import ApointmentPopup from "../popup/ApointmentPopup";
import Frame from "../images/Frame.png";
import { Link, NavLink } from "react-router-dom";
import therpy1 from "../images/therpy1.png";
import cardiologyApi from "../api/cardilogiApi";
import nutrition3 from "../images/nutration3.png";
import phy from '../images/phy.png';
import phy1 from '../images/phy1.png';
import phy2 from '../images/phy2.png';
const Physiotherapy = ({ apointPop, setApointPop }) => {
  const [item, setItem] = useState(cardiologyApi);
  // const [visible, setVisible] = useState(3);

  // const showMoreDoctore = () => {
  //   setVisible((prevValue) => prevValue + 3);
  // };
  return (
    <>
      <div className="medicine-back medicine-back2">
        <div className="medicine-sect">
          <h2>Physiotherapy</h2>
        </div>
      </div>

      <div className="about-institute about-int">
        <div className="institute about-int3">
          <h4>About the Physiotherapy</h4>
          <p>
            At Major Hospital Physiotherapy
            department has pioneered in the area providing highest care with
            leading technologies to cater to rehabilitative needs of neurology,
            cardiology, sports injuries, orthopedics, pediatrics & critical care
            patients through region’s one of the most experienced
            physiotherapists. The Major Hospital Is The <span className="bh"> Physiotherapy Centre In
            Gurgaon</span> With the best team from multiple disciplines and highest
            experience, our treatment encompasses current illness as well as
            injury prevention measures for posterity. So If you Are Search for
            The physiotherapy centre in Gurgaon. We Are the Best Place for you.
          </p>
        </div>
        <div className="institute-img">
          <img className="dov-img" src={therpy1} alt="dotor" />
        </div>
      </div>

      <div className="word-leader">
        <div className="first-word">
          <img src={nutrition3} alt="dawa" />
        </div>
        <div className="second-word">
          <p>
          The overall aim of the department is to ensure that you get best of the support to get back into daily lifestyle routine & enjoy being healthy with your loved ones. Major Hospital Is The Best Physiotherapy Centre In Gurgaon.
On the off chance that you’ve ever been in an auto collision or experienced a games injury, you may have gotten physiotherapy to help in the mending cycle. Physiotherapy is likewise applied to patients with removals, joint pain, strains (particularly in the spine), or who have had such a clinical activity. Physiotherapy helps make development and regular living simpler for a patient through a progression of medicines that are custom-made to every patient’s necessities.
          </p>
        </div>
      </div>

      <div className="treats">
        <div className=" relative">
          <div className="consult">
            <img className="hath" src={Frame} alt="" />
            <h3 className="exy mt-2">Consult with experienced doctors</h3>
            <div className="sard">
              {item.slice(16,19).map((val) => {
                return (
                  <>
                    <div key={val.id} className="card card1">
                      <img className="main-img" src={val.images} alt="" />
                      <div className="igh">
                        <div className="name-card">
                          <div className="text-card">
                            <h3>{val.name}</h3>
                            <p>{val.content}</p>
                            <p>{val.content1}</p>
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
           <NavLink to="/doctors"> <p  className="see_more cursor-pointer">
              See More Doctors
            </p></NavLink>
          </div>
        </div>
      </div>

      <div className="our-blogs our-blogs2 px-10 py-2">
        <h2 className="text-center text-3xl font-bold gast">
          Physiotherapy Blogs
        </h2>
        <p className="stays text-center">
          Stay up to date with our most recent news and updates
        </p>

        <div className="flex justify-center mt-10 blog-meta1">
          <div className="blog-card-main w-[45%] mx-5">
            <img className="h-[250px]" src={phy} />
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
              <img className="w-[300px] h-[200px]" src={phy1} />
              <div className="text-sm p-5">
                <div className="flex justify-between my-2 blog-meta">
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
              <img className="w-[300px] h-[200px]" src={phy2} />
              <div className="text-sm p-5">
                <div className="flex justify-between my-2 blog-meta">
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

export default Physiotherapy;
