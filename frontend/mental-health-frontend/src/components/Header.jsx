import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Untitled_logo_2_free-file.jpg";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow bg-white sticky top-0 z-50">
      
      {/* ✅ Logo and Brand wrapped in a Link to dashboard */}
      <Link to="/dashboard" className="flex items-center gap-4">
        <img src={logo} alt="MindBloom Logo" className="w-14 h-14 rounded-full" />
        <h1 className="text-2xl font-bold text-purple-700">MindBloom</h1>
      </Link>

      {/* Navigation */}
      <nav className="space-x-6 text-purple-600 font-medium">
        <Link to="/mood-tracker" className="hover:text-purple-800">Mood</Link>
        <Link to="/self-help" className="hover:text-purple-800">Self-Help</Link>
        <Link to="/appointments" className="hover:text-purple-800">Appointments</Link>
        <Link to="/user-dashboard" className="hover:text-purple-800">Profile</Link>
      </nav>
    </header>
  );
}
