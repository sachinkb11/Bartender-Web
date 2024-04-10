import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GigCancel from "../eventDetails/Bartender/Cancel/GigCancel";
import EstaCancel from "../eventDetails/Bartender/Cancel/EstaCancel";
import BenefitCancel from "../eventDetails/Bartender/Cancel/BenefitCancel";
import PopConfirmation from "../eventDetails/Bartender/Cancel/PopConfirmation";
import GigsNewApply from "../eventDetails/Bartender/AcceptReject/GigsNewApply";
import EstaNewApply from "../eventDetails/Bartender/AcceptReject/EstaNewApply";
import BenefitNewApply from "../eventDetails/Bartender/AcceptReject/BenefitNewApply";
import SuccessFull from "../eventDetails/Bartender/AcceptReject/SuccessFull";

 function EventDetail(props) {
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/GigCancel" element={<GigCancel />}/>
      <Route path="/EstaCancel" element={<EstaCancel />}/>
      <Route path="/BenefitCancel" element={<BenefitCancel />}/>
      <Route path="/PopConfirmation" element={<PopConfirmation />}/>


    


      {/* Establishment */}
      <Route path="/GigsNewApply" element={<GigsNewApply />}/>
      <Route path="/EstaNewApply" element={<EstaNewApply />}/>
      <Route path="/BenefitNewApply" element={<BenefitNewApply />}/>
      <Route path="/SuccessFull" element={<SuccessFull />}/>



    

    </Routes>


   
  </BrowserRouter>
  );
}export default EventDetail;


