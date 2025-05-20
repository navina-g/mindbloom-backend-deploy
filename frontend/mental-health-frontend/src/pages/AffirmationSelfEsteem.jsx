// src/pages/AffirmationSelfEsteem.jsx
import React from "react";
import { Link } from "react-router-dom";

const affirmations = [
  "I believe in myself",
  "I am always growing and learning",
  "I value myself",
  "I am capable",
  "I am in control",
  "I am stronger than I think",
];

export default function AffirmationSelfEsteem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-2 text-center">
        🌟 Affirmations for Self-Esteem
      </h1>
      <p className="text-center text-gray-700 max-w-xl mb-8">
        Repeat these daily to boost your self-worth and confidence. Let these positive thoughts anchor your day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {affirmations.map((quote, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-purple-300 hover:shadow-xl transition-transform transform hover:scale-105 text-center"
          >
            <p className="text-lg text-purple-800 italic font-medium">“{quote}”</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-purple-600 text-center max-w-md">
        💖 Your words shape your world. Speak kindly to yourself and let these affirmations remind you of your worth.
      </p>

      <Link
        to="/self-help"
        className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
      >
        ← Back to Library
      </Link>
    </div>
  );
}
