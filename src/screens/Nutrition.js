import React,{useState} from 'react'
import ApointmentPopup from '../popup/ApointmentPopup'
import { Navbar } from '../components/Navbar';
import rec from '../images/rec.png';
import btn from '../images/btn.png'
import Frame from '../images/Frame.png'
import hath from '../images/hath.jpg'
import { Link } from 'react-router-dom';
import das from '../images/das.png';
import doc4 from '../images/doc4.png';
import cardiologyApi from '../api/cardilogiApi';
const Nutrition = ({apointPop,setApointPop}) => {
    const [item,setItem] = useState(cardiologyApi);
    const [visible,setVisible] = useState(3);

    const showMoreDoctore = () =>{
        setVisible((prevValue)=> prevValue + 3);
    }
  return (
     <>
        <Navbar/>
            <div className="medicine-back medicine-back1">
                 <div className="medicine-sect">
                     <h2>Nutrition Services</h2>
                 </div>
            </div>

            <div className="about-institute">
                <div className="institute">
                    <h4>About the Institute</h4>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="institute-img">
                <img className='sov-img'  src={btn} alt="" />
                     <img className='dov-img' src={doc4} alt="dotor" />
                </div>
            </div>

            <div className="word-leader">
                 <div className="first-word">
                   <div className="rohan">
                      <h3>Dr. Rohan Shrma</h3>
                      <small>Chairman</small>
                      <p>Institute of Ophthalmology</p>
                   </div>
                    <img src={rec} alt="dawa" />
                 </div>
                 <div className="second-word">
                    <h2>A word from our leaders</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h4>See all doctors from this division</h4>
                 </div>
            </div>

            <div className="treats">
                <img  className='hath' src={hath} alt="hath" />
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
                   
                </div>
                 <div className=" relative">
                <div className='consult'>
                          <img className='hath' src={Frame} alt="" />
                          <h3 className='exy mt-2'>Consult with experienced doctors</h3>
                          <div className="sard">
            {
              item.slice(0,visible).map(val=>{
                return(
                  <>
                  <div key={val.id} className="card card1">
                   <img className='main-img' src={val.images} alt="" />
                   <div className="igh">
                   <div className="name-card">
                     <div className="text-card">
                       <h3>{val.name}</h3>
                       <p>Senior Nutrition Expert at Major</p>
                       <p>Hospital Haryana</p>
                       {/* <p>{val.content1}</p> */}
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
                      <div className="tara flex">
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
            </div> 
                <p   onClick={showMoreDoctore} className='see_more cursor-pointer'>See More Doctors</p>
                     </div>
                     </div>
                      
            </div>

            <div className='success'>
                <h2>Our Success Stories</h2>
                <p className='medis'>See how Medanta’s doctors treated patients using advanced technologies and <br /> sophisticated procedures.</p>
                <div className="img-suc">
                <img className='vic' src={btn} alt="" />
                    <img  src={das} alt="" />
                </div>

                <p className='patients'>All patient’s stories</p>
                
            </div>

            {
                apointPop && <ApointmentPopup setApointPop={setApointPop}/>
            }
     </>
  )
}

export default Nutrition