import * as React from "react";
import LoginSignup from "./pages/LoginSignup";
import CompleteProfile from "./pages/CompleteProfile";
import Dashboard from "./pages/Dashboard";
import Calender from "./pages/Celender";
import EventDetail from "./pages/EventDetail";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Earnings from "./pages/Earnings";
import Reviews from "./pages/Reviews";
import Setting from "./pages/Setting";
import TermCondion from "./pages/TermCondion";
import Refer from "./pages/Refer";

export default function App(props) {
  return (
    <div>
      <LoginSignup />
      <CompleteProfile />
      <Dashboard />
      <Calender />
      <EventDetail />
      <Chat />
      <Profile />
      <Community />
      <Earnings />
      <Reviews />
      <Setting />
      <TermCondion />
      <Refer />
     
    </div>
  );
}
