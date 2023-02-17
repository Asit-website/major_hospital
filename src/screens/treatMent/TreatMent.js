import React,{useState} from 'react'
import aliment1 from '../../images/aliment1.png';
import aliment2 from '../../images/aliment2.png';
import aliment3 from '../../images/aliment3.png';
import test from '../../images/test.png';
import test1 from '../../images/test1.png';
import poly from '../../images/poly.png';
import { NavLink } from 'react-router-dom';
const TreatMent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabAnother = (e) =>{
    e.preventDefault();
    setTabIndex(1)
    document.getElementById("far").style.visibility="visible"
    document.getElementById("gar").style.visibility="hidden"
    document.getElementById("sar").style.visibility="hidden"
  }
  const tabAnother1 = (e) =>{
    e.preventDefault();
    setTabIndex(2)
    document.getElementById("gar").style.visibility="visible"
    document.getElementById("far").style.visibility="hidden"
    document.getElementById("sar").style.visibility="hidden"
  }
  const tabAnother2 = (e) =>{
    e.preventDefault();
    setTabIndex(3)
    document.getElementById("sar").style.visibility="visible"
    document.getElementById("far").style.visibility="hidden"
    document.getElementById("gar").style.visibility="hidden"
  }
  return (
     <>
       <div className="all-section-disases">
        <div className='treat-nav'>
             <div className="treat-method">
                  <div className='browes-by'>
                      <p>BROWS BY</p>
                  </div>
                  <div onClick={tabAnother} id="barier" className='alit flex items-center'>
                      <img id='far' style={{visibility:"hidden"}} className='poly' src={poly} alt="poly" />
                      <img className='aliment1' src={aliment1} alt="aliment1" />
                      <p>Aliments</p>
                  </div>
                
                  <div onClick={tabAnother1} id='camp' className='alit flex items-center'>
                  <img id='gar' style={{visibility:"hidden"}} className='poly' src={poly} alt="poly" />
                    <img className='aliment2' src={aliment2} alt="aliment2" />
                    <p>Treatment methods</p>
                  </div>
                  <div onClick={tabAnother2} id='tamp' className='alit alit1 flex items-center'>
                  <img id='sar' style={{visibility:"hidden"}} className='poly' src={poly} alt="poly" />
                    <img className='aliment3' src={aliment3} alt="aliment3" />
                    <p>Techniques</p>
                  </div>
             </div>
        </div>
        {
          tabIndex === 1 && (
            <>
            <div className="hkhk">
         <div className="aliment-navbar">
             <div className="first-aliment-navbar">
               <NavLink to="/treat/cornary"><p>Cornary Artery Disease</p></NavLink>
                <p>Epilepsy</p>
               <NavLink to="/treat/lab"><p>Lab Tests & Diagnostics</p></NavLink>
                <p>Refractive Error</p>
                <p>Cerebral Stroke</p>
                <p>Rheumatoid Arthitis</p>
                <p>Bronchial Asthma</p>
             </div>
             <div className="first-aliment-navbar">
                <p>Head and Neck Cancer</p>
                <p>Hip Fracture</p>
                <p>Prostate Cancer</p>
                <p>Sepsis</p>
                <p>Hypertension</p>
                <p>Stomach Cancer</p>
             </div>

                 <div className="first-aliment-navbar">
                <p>Head and Neck Cancer</p>
                <p>Hip Fracture</p>
                <p>Prostate Cancer</p>
                <p>Sepsis</p>
                <p>Hypertension</p>
                <p>Stomach Cancer</p>
             </div>
             
             
         </div>
          <div className="aliment-hr"></div>
          <p className='aliment-para'>See all Aliments</p>
         </div>
            </>
          )
        }

        {
          tabIndex === 2 && (
            <>
            <div className="hkhk">
         <div className="aliment-navbar">
             <div className="first-aliment-navbar">
                <p>Cornary Artery Disease</p>
                <p>Epilepsy</p>
                <p>Refractive Error</p>
                <p>Cerebral Stroke</p>
                <p>Rheumatoid Arthitis</p>
                <p>Bronchial Asthma</p>
             </div>
             <div className="first-aliment-navbar">
                <p>Head and Neck Cancer</p>
                <p>Hip Fracture</p>
                <p>Prostate Cancer</p>
                <p>Sepsis</p>
                <p>Hypertension</p>
                <p>Stomach Cancer</p>
             </div>
             
             
         </div>
          <div className="aliment-hr"></div>
          <p className='aliment-para'>See all Aliments</p>
         </div>
            </>
          )
        }
        
        {
          tabIndex === 3 && (
            <>
            <div className="hkhk">
         <div className="aliment-navbar">
             <div className="first-aliment-navbar">
                <p>Cornary Artery Disease</p>
                <p>Epilepsy</p>
                <p>Refractive Error</p>
                <p>Cerebral Stroke</p>
                <p>Rheumatoid Arthitis</p>
                <p>Bronchial Asthma</p>
             </div>
             <div className="first-aliment-navbar">
                <p>Head and Neck Cancer</p>
                <p>Hip Fracture</p>
                <p>Prostate Cancer</p>
                <p>Sepsis</p>
                <p>Hypertension</p>
                <p>Stomach Cancers</p>
             </div>
             
             
         </div>
          <div className="aliment-hr"></div>
          <p className='aliment-para'>See all Aliments</p>
         </div>
            </>
          )
        }
        </div>

        <div className="test-dis">
            <div className='first-test flex items-center'>
                <img src={test} alt="" />
                <div className='test-para'>
                     <h3>Need to conduct any tests for your treatment?</h3>
                     <p>Visit our Dianostic & Lab Test Unit</p>
                </div>
            </div>
            <div className="second-test flex items-center">
                <img src={test1} alt="test1" />
                <div className="test-para">
                   <h3>Looking For an overall health check-up?</h3>
                   <p>See our Executive Health Packgaes</p>
                </div>
            </div>
        </div>
     </>
  )
}

export default TreatMent