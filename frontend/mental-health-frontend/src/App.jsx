import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import MoodTrackerPage from "./pages/MoodTrackerPage";
import SelfHelpPage from './pages/SelfHelpPage';
import AppointmentPage from "./pages/AppointmentPage";
import UserDashboard from "./pages/UserDashboard";
import BreatheAndRelax from "./pages/BreatheAndRelax";
import AffirmationSelfEsteem from "./pages/AffirmationSelfEsteem";
import HandlingStressWork from "./pages/HandlingStressWork";
import MindfulMeditation from "./pages/MindfulMeditation";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/mood-tracker" element={<MoodTrackerPage />} />
        <Route path="/self-help" element={<SelfHelpPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/self-help/breathe-and-relax" element={<BreatheAndRelax />} />
        <Route path="/self-help/affirmations-self-esteem" element={<AffirmationSelfEsteem />} />
        <Route path="/self-help/handling-stress-work" element={<HandlingStressWork />} />
        <Route path="/self-help/mindful-meditation" element={<MindfulMeditation />} />
       

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
