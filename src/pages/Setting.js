import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingMain from "../settings/Bartender/SettingMain";
import FreqAsk from "../settings/Bartender/FreqAsk";
import ChatSupportBart from "../settings/Bartender/ChatSupportBart";
import ChangePassSetting from "../settings/Bartender/ChangePassSetting";
import NotifictionSetting from "../settings/Bartender/NotifictionSetting";


 function Setting(props) {
    
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/SettingMain" element={<SettingMain />}/>
      <Route path="/FreqAsk" element={<FreqAsk />}/>
      <Route path="/ChatSupportBart" element={<ChatSupportBart />}/>
      <Route path="/ChangePassSetting" element={<ChangePassSetting />}/>
      <Route path="/NotifictionSetting" element={<NotifictionSetting />}/>



      

      {/* Establishment */}
      {/* <Route path="/LoginEst" element={<LoginEst />}/> */}
    </Routes>


   
  </BrowserRouter>
  );
}export default Setting;


 
