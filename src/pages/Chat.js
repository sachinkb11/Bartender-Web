import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBrt from "../Chat/Bartendar/ChatBrt";
import Report from "../Chat/Bartendar/Report";
import Block from "../Chat/Bartendar/Block";

 function Chat(props) {
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/ChatBrt" element={<ChatBrt />}/>
      <Route path="/Report" element={<Report />}/>
      <Route path="/Block" element={<Block />}/>


     


      {/* Establishment */}
      {/* <Route path="/LoginEst" element={<LoginEst />}/> */}
    </Routes>


   
  </BrowserRouter>
  );
}export default Chat;


