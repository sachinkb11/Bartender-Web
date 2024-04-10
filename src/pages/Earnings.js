import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ReceivedPayment from "../Earning/Bartendar/ReceivedPayment";
import PaymentBartAPI from "../Earning/Bartendar/PaymentBartAPI";
import PendingPayment from "../Earning/Bartendar/PendingPayment";
import PendingAPI from "../Earning/Bartendar/PendingAPI";



 function Earnings(props) {
  const [PaymentBart,setAct] = useState(PaymentBartAPI);
  const [PendingApi,setPending] = useState(PendingAPI);

  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/ReceivedPayment" element={<ReceivedPayment menu={PaymentBart} />}/>
      <Route path="/PendingPayment" element={<PendingPayment menu={PendingApi} />}/>



        {/* Establishment */}
 
    </Routes>
   
  </BrowserRouter>
  );
}export default Earnings;


 
