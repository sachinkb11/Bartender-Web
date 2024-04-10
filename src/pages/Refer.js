import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reference from "../referFriends/Bartender/Reference";
import ReferAPI from "../referFriends/Bartender/ReferAPI";
import { useState } from "react";

 function Refer() {
  const[showAPI, setAPI]=useState(ReferAPI)

  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
    
      <Route path="/Reference" element={<Reference item={showAPI} />}/>

    
    
          {/* Establishment */}


    </Routes>
   
  </BrowserRouter>
  );
}export default Refer;


 
