import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentGigs  from '../dashboard/Bartender/main/Current_Gigs';
import NewOpportunities  from '../dashboard/Bartender/main/NewOpportunities';
import Notification from "../dashboard/Bartender/Notification";
import Dropdown from "../dashboard/Bartender/Dropdown";
import SuccessMsg from "../dashboard/Bartender/Success_msg";
import Review from "../dashboard/Bartender/Review";
import Filter from "../dashboard/Bartender/Filter";
import AboutUs from "../dashboard/Bartender/About_Us";
import { useState } from "react";
import PastGigs from "../dashboard/Bartender/main/PastGigs";
import CurrentGigsEstablishment from "../dashboard/Establishment/main/CurrentGigs_Establishment";
import PendingAcceptance from "../dashboard/Establishment/main/PendingAcceptance";
import PastGigsEstablishment from "../dashboard/Establishment/main/PastGigsEstablishment";
import Profile from "../dashboard/Establishment/Profile";
import NotificationEst from "../dashboard/Establishment/NotificationEst";
import DropdownEst from "../dashboard/Establishment/DropdownEst";
import SuccessEst from "../dashboard/Establishment/SuccessEst";
import AboutUsEst from "../dashboard/Establishment/AboutUsEst";
import FilterEst from "../dashboard/Establishment/FilterEst";
import DashboardInvoice from "../dashboard/Establishment/Dashboard_Invoice";
import Jp1 from "../dashboard/Establishment/jobPost/Jp1";
import Jp2 from "../dashboard/Establishment/jobPost/Jp2";
import Jp3 from "../dashboard/Establishment/jobPost/Jp3";
import Jp4 from "../dashboard/Establishment/jobPost/Jp4";
import Frame from "../dashboard/Establishment/jobPost/Frame";
import Success1 from "../dashboard/Bartender/Success1";



 function Dashboard(props) {
  const [activeTab,setActiveTab] = useState(0);
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/CurrentGigs" element={<CurrentGigs/>}/>
      <Route path="/NewOpportunities" element={<NewOpportunities/>}/>
      <Route path="/PastGigs" element={<PastGigs/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/dropdown" element={<Dropdown/>}/>
      <Route path="/dash_success" element={<SuccessMsg/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/filter" element={<Filter/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/Success1" element={<Success1/>}/>


      {/* Establishment */}
      <Route path="/CurrentGigsEstablishment" element={<CurrentGigsEstablishment/>}/>
      <Route path="/PendingAcceptance" element={<PendingAcceptance/>}/>
      <Route path="/PastGigsEstablishment" element={<PastGigsEstablishment/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/NotificationEst" element={<NotificationEst/>}/>
      <Route path="/DropdownEst" element={<DropdownEst/>}/>
      <Route path="/SuccessEst" element={<SuccessEst/>}/>
      <Route path="/AboutUsEst" element={<AboutUsEst/>}/>
      <Route path="/FilterEst" element={<FilterEst/>}/>
      <Route path="/DashboardInvoice" element={<DashboardInvoice/>}/>
      <Route path="/Jp1" element={<Jp1/>}/>
      <Route path="/Jp2" element={<Jp2/>}/>
      <Route path="/Jp3" element={<Jp3/>}/>
      <Route path="/Jp4" element={<Jp4/>}/>
      <Route path="/frame" element={<Frame/>}/>


    

    </Routes>
   
  </BrowserRouter>
  );
}export default Dashboard;


