import './App.css';
import './styles/home.css'
import { Navbar } from './components/Navbar';
import { Home } from './screens/Home';
import { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Contact from './screens/Contact';
import Footer from './components/Footer';
import Feedback from './screens/Feedback';
import Cardiology from './screens/Cardiology';
import CardiologyDetails from './screens/CardiologyDetails';
import HealthCheckup from './screens/HealthCheckup';
import Iodology from './screens/Iodology';
import Achievement from './screens/Achievement';
import InternalMedicine from './screens/InternalMedicine';
import Opthomology from './screens/opthomology';
import ColdLeaser from './screens/ColdLeaser';
import Dental from './screens/Dental';
import Gastroenterology from './screens/Gastroenterology';
import Physiotherapy from './screens/Physiotherapy';
import Nutrition from './screens/Nutrition';
import Hospital from './screens/Hospital';
import Clinic from './screens/Clinic';
import JobOpening from './screens/job/JobOpening';
import JobOpeningDetails from './screens/job/JobOpeningDetails';
import HospitalNear from './screens/HospitalNear';
import Patients from './screens/visitors/Patients';
import PatientInfo from './screens/visitors/PatientInfo';
import InternationalPat from './screens/visitors/InternationalPat';
import Payment from './screens/visitors/Payment';
import TreatMent from './screens/treatMent/TreatMent';
import Cornary from './screens/treatMent/Cornary';
import LabTest from './screens/treatMent/LabTest';
import Doctors from './screens/Doctors';
import Query from './components/Query';
function App() {
  const [apointPop,setApointPop] = useState(false);
  const [registerPop,setRegisterPop] = useState(false);
  return (
    
    <Router>
       <Navbar registerPop={registerPop} setRegisterPop={setRegisterPop}/>
      <Routes>
          <Route exact path='/' element={<Home apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/cardio' element={<Cardiology apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route  path='/cardio/:id' element={<CardiologyDetails apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/health' element={<HealthCheckup apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/iodolgy' element={<Iodology/>}/>
          <Route path='/acheive' element={<Achievement/>}/>
          <Route path='/medicine' element={<InternalMedicine apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/opthomology' element={<Opthomology apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/coldLeaser' element={<ColdLeaser apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/dental' element={<Dental apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/gasto' element={<Gastroenterology apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/physcio' element={<Physiotherapy apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/nutro' element={<Nutrition apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/hospital' element={<Hospital/>}/>
          <Route path='/clinic' element={<Clinic/>}/>
          <Route path='/carer' element={<JobOpening/>}/>
          <Route path='/carer/:id' element={<JobOpeningDetails/>}/>

          <Route path='/near' element={<HospitalNear/>}/>

          <Route path='/visitor' element={<Patients apointPop={apointPop} setApointPop={setApointPop}/>}/>
          
          <Route path='/visitor1' element={<PatientInfo apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/visitor2' element={<InternationalPat apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/payment' element={<Payment apointPop={apointPop} setApointPop={setApointPop}/>}/>

          <Route path='/treat' element={<TreatMent/>}/>
          <Route path='/treat/cornary' element={<Cornary apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route path='/treat/lab' element={<LabTest apointPop={apointPop} setApointPop={setApointPop}/>}/>

          <Route path='/doctors' element={<Doctors apointPop={apointPop} setApointPop={setApointPop}/>}/>

          <Route path='/query/:q'  element={<Query apointPop={apointPop} setApointPop={setApointPop} />} />
      </Routes>
      <Footer apointPop={apointPop} setApointPop={setApointPop}/>
    </Router>
  
  );
}

export default App;
