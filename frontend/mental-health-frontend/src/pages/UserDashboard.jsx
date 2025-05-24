// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
const API_BASE_URL = "https://mindbloom-backend-v2-ase0ctd8bzdvaqd9.southindia-01.azurewebsites.net/api/";

export default function UserDashboard() {
  const [moods, setMoods] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  // Axios config with token
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Fetch moods & appointments
  useEffect(() => {
    fetchMoods();
    fetchAppointments();
  }, []);

  const fetchMoods = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}moods/`, config);
      setMoods(res.data.slice(0, 7)); // Last 7 entries
    } catch (err) {
      console.error("Mood fetch error:", err);
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}appointments/`, config);
      setAppointments(res.data);
    } catch (err) {
      console.error("Appointment fetch error:", err);
    }
  };

  // Mood to Emoji map
  const getMoodEmoji = (mood) => {
    switch (mood) {
      case "happy":
        return "😊";
      case "sad":
        return "😔";
      case "angry":
        return "😠";
      case "neutral":
        return "😐";
      case "content":
        return "😌";
      default:
        return "🙂";
    }
  };

return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
    <Header />
    <main className="p-6">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Welcome Back</h1>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mood Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Mood Overview (Last 7 Days)</h2>
          <div className="grid grid-cols-7 gap-4 text-center">
            {moods.map((entry, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-sm text-gray-500">
                  {new Date(entry.created_at).toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Appointments */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          {appointments.length === 0 ? (
            <p className="text-gray-500">No upcoming appointments</p>
          ) : (
            appointments.map((appt, index) => (
              <div key={index} className="border-b border-gray-200 py-2">
                <p className="font-medium">
                  {new Date(appt.date).toLocaleDateString()} @ {appt.time}
                </p>
                <p className="text-sm text-gray-600">with {appt.therapist_name}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/mood-tracker"
          className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 transition text-center"
        >
          Log Today's Mood
        </Link>
        <Link
          to="/appointments"
          className="bg-purple-600 text-white p-4 rounded-xl shadow hover:bg-purple-700 transition text-center"
        >
          Book Appointment
        </Link>
        <Link
          to="/self-help"
          className="bg-pink-500 text-white p-4 rounded-xl shadow hover:bg-pink-600 transition text-center"
        >
          Explore Self-Help
        </Link>
      </section>

      {/* Logout */}
      <div className="mt-12 text-center">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </main>
  </div>
);
}
