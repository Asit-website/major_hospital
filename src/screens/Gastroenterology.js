import React, { useState } from "react";
import ApointmentPopup from "../popup/ApointmentPopup";
import Frame from "../images/Frame.png";
import { Link, NavLink } from "react-router-dom";
import cardiologyApi from "../api/cardilogiApi";
import gaston from "../images/gaston.png";
import gaston1 from "../images/gaston1.png";
import gaston2 from "../images/gaston2.png";
import gaston3 from "../images/gaston3.png";
const Gastroenterology = ({ apointPop, setApointPop }) => {
  const [item, setItem] = useState(cardiologyApi);
  // const [visible, setVisible] = useState(3);

  // const showMoreDoctore = () => {
  //   setVisible((prevValue) => prevValue + 3);
  // };
  return (
    <>
      <div className="medicine-back medicine-back3">
        <div className="medicine-sect">
          <h2>Gastroenterology</h2>
        </div>
      </div>
      <div className="about-some">
        <div className="about-institute about-int about-int1">
          <div className="institute">
            <h4>About the Gastroenterology</h4>
            <p>
              Surgical Gastroenterology offers cutting-edge treatment for
              individuals with gastrointestinal disorders that need surgical
              intervention. We provide sophisticated laparoscopic surgical
              methods to individuals suffering from gastrointestinal problems
              such as cancer. Patients may have oncologically sound procedures
              using minimally invasive techniques, resulting in a quicker
              recovery and return to regular life.
            </p>
            <p>
              <span className="fens">Gastro procedures:</span> Appendicitis
              Surgery is performed to remove the inflamed and infected appendix.
            </p>
            <p>
              <span className="fens">Cancer of the colon:</span> Surgery is the
              most successful and widely used way of treating colon cancer. The
              kind of surgery is determined by the stage of the cancer as well
              as the severity of the disease.
            </p>
            <p>
              <span className="fens">Gallbladder dysfunction:</span> Gallstones
              are the most frequent gallbladder problem. In extreme cases, the
              gallbladders must be removed. A cholecystectomy is the medical
              term for this kind of surgery.
            </p>
            <p>
              <span className="fens">
                G.E.R.D. (Gastroesophageal Reflux Disease):
              </span>{" "}
              If the medicine does not work, laparoscopic antireflux surgery is
              used to treat the gastroesophageal reflux. An efficient valve
              mechanism is constructed at the bottom of the oesophagus as a
              result of the operation.
            </p>
          </div>
          <div className="institute-img">
            <img className="dov-img" src={gaston} alt="dotor" />
          </div>
        </div>
        <p className="hital">
          <span className="fens">Hiatal hernia:</span> Hiatal hernias are
          repaired surgically by narrowing the diaphragm hole and pushing the
          stomach back into the abdomen.
        </p>
        <p className="hital">
          <span className="fens">Rectal prolapse:</span> Rectal prolapse is
          treated surgically by pulling the rectum back into position. The
          rectum is reattached to the pelvic wall with the assistance of a mesh
          sling. Cancers of the intestine. Surgery, chemotherapy, and radiation
          therapy are the most common treatments for gastrointestinal
          malignancies. Surgery is performed to remove a portion of or the whole
          stomach.
        </p>
      </div>

      <div className="step-follow">
        <h2>Why choose Major Hospital?</h2>
        <div className="step-color"></div>
        <h5>Major Hospital  is one of the few departments in the country that provides a multimodality approach to liver cancer treatment. Complex liver operations have been performed using intraoperative ultrasound guidance, making these procedures safer and more successful. Patients suffering from liver cancer or chronic liver disease are also offered the option of a liver transplant.</h5>
      </div>

      <div className="treats">
        <div className=" relative">
          <div className="consult">
            <img className="hath" src={Frame} alt="" />
            <h3 className="exy mt-2">Consult with experienced doctors</h3>
            <div className="sard">
              {item.slice(7,10).map((val) => {
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
            <NavLink to="/doctors"><p  className="see_more cursor-pointer">
              See More Doctors
            </p></NavLink>
          </div>
        </div>
      </div>

      <div className="our-blogs our-blogs2 py-2  px-10">
        <h2 className="text-center text-3xl font-bold gast">
           Gastroenterology
        </h2>
        <p className="stays text-center">
          Stay up to date with our most recent news and updates
        </p>

        <div className="flex justify-center mt-10 blog-meta1">
          <div className="blog-card-main w-[45%] mx-5">
            <img className="h-[250px]" src={gaston1} />
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
              <img className="w-[300px] h-[200px]" src={gaston2} />
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
              <img className="w-[300px] h-[200px]" src={gaston3} />
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

      <div className="faq">
        <h2>FAQ</h2>
        <div className="faq-div"></div>
        <div className="faq-details">
          <div className="faq-header">
            <h2>When Should you consult with a gastroenterologist</h2>
            <p>
              If you have unexplained blood in your stool, trouble swallowing,
              or are suffering stomach discomfort, your primary care doctor may
              send you to a gastroenterologist. People over the age of fifty
              should see a gastroenterologist as a preventative step. People
              over the age of fifty are more likely to get colon cancer.
            </p>
          </div>
          <div className="faq-header mt-3.5">
            <h2>What are the general gastrointestinal surgery options?</h2>
            <h4>
              Several surgical methods, depending on the circumstances of each
              patient, may be used, including:
            </h4>
            <ul>
              <li>
                Endoscopic surgery: Endoscopic surgery involves the surgeon
                inserting an endoscope via the mouth, nose, or other natural
                bodily openings to reach the treatment region.
              </li>
              <li>
                Laparoscopic surgery involves the physician making a tiny
                incision on the body and inserting a thin, flexible tube known
                as a laparoscope to conduct surgery. A lit camera is also
                included with the laparoscope.
              </li>
              <li>
                Robotic surgery: Robotic surgery provides more precision,
                control, and accuracy than human hands. As a result, it may be
                utilised for complicated and sensitive operations. In addition,
                the surgeon uses a console that offers a high-definition,
                magnified image of the operative site.
              </li>
            </ul>
          </div>
          <div className="faq-header mt-3.5">
            <h2>
              What should you do to be ready for your gastrointestinal
              procedure?
            </h2>
            <p>
              Follow the doctor’s or nurse’s instructions: Before the operation,
              your doctor will usually inform you of what you should and should
              not eat or drink. They may also advise you to discontinue some of
              your medications prior to surgery. You must adhere to all
              instructions given to you while preparing for surgery. Plan ahead
              of time for the day of surgery and the days following: Ascertain
              that you have someone who can drive you to the operation and
              return you home once it is over. The period after surgery is also
              crucial. Have someone assist you during this period to ensure a
              quick recovery. Make preparations to handle the following items in
              your home space: It is critical to prepare ahead of time if you
              will be able to walk the stairs, use the restroom, or make meals.
              You may also need physical rehabilitation after surgery. Make a
              plan for where you’ll be doing it.
            </p>
          </div>

          <div className="faq-header mt-3.5">
            <h2>
            What can I anticipate during my recuperation after gastrointestinal surgery?
            </h2>
            <p>
            The amount of time it will take you to recuperate depends on the operation and how extensive it was. If it was a minor operation, such as a colonoscopy, you may resume your normal activities immediately. If you have an invasive surgery, you will need some time to recover and manage your pain. However, it is best to consult with your doctor about what to anticipate throughout the healing process.
            </p>
          </div>
        </div>
      </div>

      {apointPop && <ApointmentPopup setApointPop={setApointPop} />}
    </>
  );
};

export default Gastroenterology;
