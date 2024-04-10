import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../LoginSignUp/Bartender/Login";
import SignUp from "../LoginSignUp/Bartender/SignUp";
import ForgetPass from "../LoginSignUp/Bartender/ForgetPass";
// import Wrapper from "./authWrapper/Wrapper";
import CodeVerifyPass from "../LoginSignUp/Bartender/CodeVerifyPass";
import CodeVerifyAccount from "../LoginSignUp/Bartender/CodeVerifyAccount";
import CreatePass from "../LoginSignUp/Bartender/CreatePass";
import TermCondition from "../LoginSignUp/Bartender/Term_Condtion";
import SuccesMsg from "../LoginSignUp/Bartender/SuccesMsg";
import LoginEst from "../LoginSignUp/Establishment/LoginEst";
import CodeVerifyAccountEst from "../LoginSignUp/Establishment/CodeVerifyAccountEst";
import CodeVerifyPassEst from "../LoginSignUp/Establishment/CodeVerifyPassEst";
import CreatePassEst from "../LoginSignUp/Establishment/CreatePassEst";
import ForgotPassEst from "../LoginSignUp/Establishment/ForgotPassEst";
import SuccessMsgEst from "../LoginSignUp/Establishment/SuccessMsgEst";
import Term_ConitionEst from "../LoginSignUp/Establishment/Term_ConitionEst";
import SignUpEst from "../LoginSignUp/Establishment/SignUpEst";
 function LoginSignup(props) {
  return (
    
    <BrowserRouter>
    <Routes>
      {/* Bartender */}
      <Route path="/" element={<Login />}/>
      <Route path="/SignUp" element={<SignUp />}/>
      <Route path="/forgetPass" element={<ForgetPass />}/>
      <Route path="/codeVerifyPass" element={<CodeVerifyPass />}/>
      <Route path="/codeVerifyAccount" element={<CodeVerifyAccount />}/>
      <Route path="/CreatePass" element={<CreatePass />}/>
      <Route path="/TermCondtion" element={<TermCondition />}/>
      <Route path="/SuccessMsg" element={<SuccesMsg />}/>


      {/* Establishment */}
      <Route path="/LoginEst" element={<LoginEst />}/>
      <Route path="/CodeVerifyAccountEst" element={<CodeVerifyAccountEst />}/>
      <Route path="/CodeVerifyPassEst" element={<CodeVerifyPassEst />}/>
      <Route path="/CreatePassEst" element={<CreatePassEst />}/>
      <Route path="/SignUpEst" element={<SignUpEst />}/>
      <Route path="/ForgotPassEst" element={<ForgotPassEst />}/>
      <Route path="/SuccessMsgEst" element={<SuccessMsgEst />}/>
      <Route path="/TermConitionEst" element={<Term_ConitionEst />}/> 

    </Routes>


   
  </BrowserRouter>
  );
}export default LoginSignup;


