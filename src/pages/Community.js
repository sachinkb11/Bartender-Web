import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myfrnd from "../community/Bartendar/Myfrnd";
import SmallCp from "../community/Bartendar/SmallCp";
import InvitationRecived from "../community/Bartendar/InvitationRecived";
import InvitationBartAPI from "../community/Bartendar/InvitationBartAPI";
import InvitationSent from "../community/Bartendar/InvitationSent";
import NearbyBart from "../community/Bartendar/NearbyBart";
import NearbyEst from "../community/Bartendar/NearbyEst";
import NearbyEstAPI from "../community/Bartendar/NearbyEstAPI";
import UserReview from "../community/Bartendar/UserReview";
function Community() {
    const [users,setUsers]=React.useState(SmallCp)
    const [user1,setUser1]=React.useState(InvitationBartAPI)
    const [Nearbyestt,setNearbyEst]=React.useState(NearbyEstAPI)

  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/Myfrnd" element={<Myfrnd menu={users} />}/>
      <Route path="/InvitationRecived" element={<InvitationRecived menu1={user1} />}/>
      <Route path="/InvitationSent" element={<InvitationSent menu1={user1} />}/>
      <Route path="/NearbyBart" element={<NearbyBart menu1={user1} />}/>
      <Route path="/NearbyEst" element={<NearbyEst menu2={Nearbyestt}  />}/>

      <Route path="/UserReview" element={<UserReview />}/>





    

      {/* Establishment */}
      {/* <Route path="/CpE1" element={<CpE1/>}/> */}
     
    </Routes>
   
  </BrowserRouter>
  )
}

export default Community






