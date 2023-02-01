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
function App() {
  const [apointPop,setApointPop] = useState(false);
  return (
    <Router>
      
      <Routes>
          <Route exact path='/' element={<Home apointPop={apointPop} setApointPop={setApointPop}/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/cardio' element={<Cardiology apointPop={apointPop} setApointPop={setApointPop}/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
