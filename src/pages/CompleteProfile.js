import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cp1 from "../complete_profile/Bartender/Cp1";
import Cp2 from "../complete_profile/Bartender/Cp2";
import Cp3 from "../complete_profile/Bartender/Cp3";
import Cp4 from "../complete_profile/Bartender/Cp4";
import Cp5 from "../complete_profile/Bartender/Cp5";
import Cp6 from "../complete_profile/Bartender/Cp6";
import Cp7 from "../complete_profile/Bartender/Cp7";
import Cp8 from "../complete_profile/Bartender/Cp8";

import CpE1 from "../complete_profile/Establishment/CpE1";
import CpE2 from "../complete_profile/Establishment/CpE2";
import CpE3 from "../complete_profile/Establishment/CpE3";
import CpE4 from "../complete_profile/Establishment/CpE4";
import CpE5 from "../complete_profile/Establishment/CpE5";
import CpE6 from "../complete_profile/Establishment/CpE6";
import CpE7 from "../complete_profile/Establishment/CpE7";
import CpE8 from "../complete_profile/Establishment/CpE8";








 function LoginSignup(props) {
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/Cp1" element={<Cp1 />}/>
      <Route path="/Cp2" element={<Cp2 />}/>
      <Route path="/Cp3" element={<Cp3 />}/>
      <Route path="/Cp4" element={<Cp4/>}/>
      <Route path="/Cp5" element={<Cp5/>}/>
      <Route path="/Cp6" element={<Cp6/>}/>
      <Route path="/Cp7" element={<Cp7/>}/>
      <Route path="/Cp8" element={<Cp8/>}/>

      {/* Establishment */}
      <Route path="/CpE1" element={<CpE1/>}/>
      <Route path="/CpE2" element={<CpE2/>}/>
      <Route path="/CpE3" element={<CpE3/>}/>
      <Route path="/CpE4" element={<CpE4/>}/>
      <Route path="/CpE5" element={<CpE5/>}/>
      <Route path="/CpE6" element={<CpE6/>}/>
      <Route path="/CpE7" element={<CpE7/>}/>
      <Route path="/CpE8" element={<CpE8/>}/>
     
    </Routes>
   
  </BrowserRouter>
  );
}export default LoginSignup;


