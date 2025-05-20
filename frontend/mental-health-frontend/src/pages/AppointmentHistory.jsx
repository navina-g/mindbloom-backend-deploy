import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentHistory() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    axios
      .get("http://127.0.0.1:8000/api/appointments/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAppointments(res.data))
      .catch((err) =>
        console.error("Error fetching appointments", err)
      );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        📅 Your Appointment History
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">
            No appointments found.
          </p>
        ) : (
          appointments.map((appt, index) => (
            <div
              key={index}
              className="p-4 border border-indigo-200 rounded-md shadow-sm"
            >
              <p className="font-semibold text-indigo-700">
                Therapist:{" "}
                <span className="text-black">
                  {appt.therapist_name}
                </span>
              </p>
              <p>Date: {appt.date}</p>
              <p>Time: {appt.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
