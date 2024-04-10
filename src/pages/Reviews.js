import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewsBart from "../Reviews.js/Bartendar/ReviewsBart";
import ReviewBartAPI from "../Reviews.js/Bartendar/ReviewBartAPI";

 function Reviews(props) {
    const[showReviewAPI,setReviewAPI]=React.useState(ReviewBartAPI)
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/ReviewsBart" element={<ReviewsBart menu={showReviewAPI} />}/>
      

      {/* Establishment */}
      {/* <Route path="/LoginEst" element={<LoginEst />}/> */}
    </Routes>


   
  </BrowserRouter>
  );
}export default Reviews;


