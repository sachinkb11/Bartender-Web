import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "../term&conditions/Bartender/PrivacyPolicy";
import TermsConditions from "../term&conditions/Bartender/TermsConditions";




 function TermCondion(props) {
    
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>
      <Route path="/TermsConditions" element={<TermsConditions />}/>
 


      

      {/* Establishment */}
      {/* <Route path="/LoginEst" element={<LoginEst />}/> */}
    </Routes>


   
  </BrowserRouter>
  );
}export default TermCondion;


 
 
