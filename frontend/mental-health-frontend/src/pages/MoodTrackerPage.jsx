// src/pages/MoodTrackerPage.jsx

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Laugh, Smile, Meh, Frown, Angry } from "lucide-react";
const API_BASE_URL = "https://mindbloom-backend-v2-ase0ctd8bzdvaqd9.southindia-01.azurewebsites.net/api/";


// ✅ Added header import
import Header from "../components/Header";

const moods = [
  { label: "happy", icon: <Laugh className="text-yellow-400" /> },
  { label: "content", icon: <Smile className="text-green-500" /> },
  { label: "neutral", icon: <Meh className="text-blue-400" /> },
  { label: "sad", icon: <Frown className="text-purple-500" /> },
  { label: "angry", icon: <Angry className="text-red-500" /> },
];

export default function MoodTrackerPage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);
  const [status, setStatus] = useState("");

  const accessToken = localStorage.getItem("accessToken");
  console.log("📦 accessToken =", accessToken);

  const authConfig = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  async function fetchMoods() {
    try {
      const res = await axios.get(`${API_BASE_URL}moods/`, authConfig);
      console.log("✅ fetched moods:", res.data);
      setMoodHistory(res.data);
    } catch (err) {
      console.error("❌ fetchMoods error:", err.response?.data || err.message);
      setStatus("Error loading mood history 😞");
    }
  }

  async function handleSubmit() {
    if (!selectedMood) return;
    console.log("🚀 submitting mood:", selectedMood);

    try {
      const res = await axios.post(
        `${API_BASE_URL}moods/`,
        { mood: selectedMood },
        authConfig
      );
      console.log("✅ submit response:", res.data);
      setStatus("Mood submitted! 🎉");
      setSelectedMood(null);
      fetchMoods(); // refresh mood list
    } catch (err) {
      console.error("❌ submit error:", err.response?.data || err.message);
      setStatus("Error submitting mood 😞");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200">
      {/* ✅ Added shared header component */}
      <Header />

      {/* Main content container */}
      <div className="max-w-2xl mx-auto bg-white p-6 mt-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          How are you feeling today?
        </h2>

        {/* Mood selection */}
        <div className="grid grid-cols-5 gap-4 justify-items-center">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(m.label)}
              className={`flex flex-col items-center p-3 rounded-lg border transition ${
                selectedMood === m.label
                  ? "bg-indigo-100 border-indigo-500"
                  : "border-gray-300"
              }`}
            >
              {m.icon}
              <span className="mt-1 text-sm capitalize">{m.label}</span>
            </button>
          ))}
        </div>

        {/* Submit button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedMood}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition disabled:opacity-50"
          >
            Submit Mood
          </button>
          {status && (
            <p className="text-sm mt-2 text-center text-purple-700">{status}</p>
          )}
        </div>

        {/* Mood history */}
        <h3 className="text-xl font-semibold mt-10 text-indigo-600">
          Your Mood History
        </h3>
        <ul className="mt-4 space-y-2">
          {moodHistory.map((entry) => (
            <li
              key={entry.id}
              className="bg-indigo-50 p-3 rounded-md shadow-sm flex justify-between items-center"
            >
              <span className="capitalize font-medium">{entry.mood}</span>
              <span className="text-sm text-gray-600">
                {new Date(entry.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {new Date(entry.created_at).toLocaleDateString([], {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
