import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CelenderBrt from "../celender/Bartender/CelenderBrt";
import Availibilty from "../celender/Bartender/Availibilty";
import SetAvailibility from "../celender/Bartender/SetAvailibility";
import Event1 from "../celender/Bartender/event/Event1";
import Event2 from "../celender/Bartender/event/Event2";
import Event3 from "../celender/Bartender/event/Event3";
import Permission from "../celender/Bartender/event/Permission";
import CelenderEst from "../celender/Establishment/CelenderEst";




 function Calender(props) {
  const [activeTab,setActiveTab] = useState(0);
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/CelenderBrt" element={<CelenderBrt/>}/>
      <Route path="/Availibilty" element={<Availibilty/>}/>
      <Route path="/SetAvailibility" element={<SetAvailibility/>}/>
      <Route path="/Event1" element={<Event1/>}/>
      <Route path="/Event2" element={<Event2/>}/>
      <Route path="/Event3" element={<Event3/>}/>  
      <Route path="/Permission" element={<Permission/>}/>  


      {/* Establishment */}
      <Route path="/CelenderEst" element={<CelenderEst/>}/>
  


    

    </Routes>
   
  </BrowserRouter>
  );
}export default Calender;


