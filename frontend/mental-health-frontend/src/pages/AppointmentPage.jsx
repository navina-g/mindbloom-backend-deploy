// src/pages/AppointmentPage.jsx
import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header"; // ✅ Step 1: Import Header
const API_BASE_URL = "https://mindbloom-backend-v2-ase0ctd8bzdvaqd9.southindia-01.azurewebsites.net/api/";

const therapists = ["Dr. M Shyamala Devi", "Dr. Aarthi Radhika Inuganti", "Dr. Latha Janaki"];

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function AppointmentPage() {
  // ❌ Fix: You placed <Header /> here outside the return — it won't render!

  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [confirmedTherapist, setConfirmedTherapist] = useState("");
  const [confirmedDate, setConfirmedDate] = useState("");
  const [confirmedTime, setConfirmedTime] = useState("");

  const [showModal, setShowModal] = useState(false);

  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours) + 12);
    }
    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }
    return `${hours}:${minutes}:00`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedTherapist && selectedDate && selectedTime) {
      const token = localStorage.getItem("accessToken");
      const formattedDate = new Date(selectedDate).toISOString().split("T")[0];
      const formattedTime = convertTo24Hour(selectedTime);

      try {
        await axios.post(
          `${API_BASE_URL}appointments/`, 
          {
            therapist_name: selectedTherapist,
            date: formattedDate,
            time: formattedTime,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setConfirmedTherapist(selectedTherapist);
        setConfirmedDate(selectedDate);
        setConfirmedTime(selectedTime);
        setShowModal(true);

        setSelectedTherapist("");
        setSelectedDate("");
        setSelectedTime("");
      } catch (error) {
        console.error("Submit error:", error.response?.data || error.message);
        alert("Failed to book appointment. Try again!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200">
      {/* ✅ Step 2: Place Header inside return */}
      <Header />

      {/* ✅ Step 3: Wrap main content in a padded container */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-8">Book an Appointment</h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Therapist Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-1">Select Therapist</label>
            <select
              className="w-full p-2 border border-indigo-300 rounded"
              value={selectedTherapist}
              onChange={(e) => setSelectedTherapist(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              {therapists.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-1">Choose Date</label>
            <input
              type="date"
              className="w-full p-2 border border-indigo-300 rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          {/* Time Slots */}
          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-2">Available Time Slots</label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot, index) => (
                <button
                  type="button"
                  key={index}
                  className={`p-2 rounded border transition ${
                    selectedTime === slot
                      ? "bg-indigo-500 text-white"
                      : "bg-indigo-100 hover:bg-indigo-200"
                  }`}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Confirm Appointment
          </button>
        </form>

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-indigo-700">Appointment Booked 🎉</h2>
              <p>
                You have an appointment with <strong>{confirmedTherapist}</strong><br />
                on <strong>{confirmedDate}</strong> at <strong>{confirmedTime}</strong>
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
