import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainProfile from "../Profile/Bartender/MainProfile";
import EditProfile from "../Profile/Bartender/EditProfile";
import CertificationLink from "../Profile/Bartender/EditProfile/CertificationLink";
import BasicInfo from "../Profile/Bartender/EditProfile/BasicInfo";
import Designation from "../Profile/Bartender/EditProfile/Designation";
import SkillInterest from "../Profile/Bartender/EditProfile/Skill_Interest";
import LinkDocument from "../Profile/Bartender/EditProfile/LinkDocument";
import BackGroundCheck from "../Profile/Bartender/EditProfile/BackGroundCheck";
import PaymentSetup from "../Profile/Bartender/EditProfile/PaymentSetup";

 function Profile(props) {
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/MainProfile" element={<MainProfile />}/>
      <Route path="/CertificationLink" element={<CertificationLink />}/>
      <Route path="/BasicInfo" element={<BasicInfo />}/>
      <Route path="/Designation" element={<Designation />}/>
      <Route path="/SkillInterest" element={<SkillInterest />}/>
      <Route path="/LinkDocument" element={<LinkDocument />}/>
      <Route path="/BackGroundCheck" element={<BackGroundCheck />}/>
      <Route path="/PaymentSetup" element={<PaymentSetup />}/>


      {/* Establishment */}
      {/* <Route path="/LoginEst" element={<LoginEst />}/> */}
     

    </Routes>


   
  </BrowserRouter>
  );
}export default Profile;


