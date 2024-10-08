import './App.css';
import Header from './Components/Navbar/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Navbar/Footer';
import About from './Components/About';
import Objectives from './Components/Objectives';
import VisionMission from './Components/VisionAndMission';
import Faculty from './Components/Faculty';
import Library from './Components/Library';
import Laboratory from './Components/Laboratory';
import ClinicalExperience from './Components/ClinicalExperience';
import Hostel from './Components/Hostel';
import EventsCompleted from './Components/Eventcompleted';
import PrincipalsMessage from './Components/PrincipalsMessage';
import CampusInfo from './Components/CampusInfo';
import Activities from './Components/Activities';

function App() {
  return (
    <div>
    <Header/>
        <BrowserRouter>
          <Routes>
            {/* <Route>
              <Route path="/About" element={<About/>} />
            </Route> */}
          </Routes>
        </BrowserRouter>
        {/* <EventsCompleted/> */}
        {/* <Objectives/> */}
        <VisionMission/>
        {/* <Faculty/> */}
       {/* <Library/> */}
       {/* <Laboratory/> */}
       {/* <ClinicalExperience /> */}
       {/* <Hostel /> */}
       {/* <PrincipalsMessage /> */}
       {/* <CampusInfo/> */}
       {/* <Activities/> */}
    </div>
  );
}

export default App;
