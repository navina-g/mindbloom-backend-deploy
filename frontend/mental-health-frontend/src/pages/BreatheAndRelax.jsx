// src/pages/BreatheAndRelax.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BreatheAndRelax() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-4">Breathe and Relax</h1>
        <p className="text-gray-700 mb-6">
          A short guided breathing video to help calm your mind and reduce anxiety.
        </p>

        {/* Video Embed */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md mb-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/aNXKjGFUlMs"
            title="Guided Breathing Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-700 mt-8 mb-2 text-center">How to Use</h3>
<ul className="list-disc list-inside text-gray-700 space-y-1 text-center">
  <li>Find a quiet, cozy place where you feel safe and relaxed.</li>
  <li>Sit or lie down comfortably. Let your hands rest gently.</li>
  <li>Press play and follow the calm breathing guidance in the video.</li>
  <li>Allow your thoughts to drift like clouds. No pressure, just presence.</li>
  <li>Repeat daily, or whenever you need to return to calm. 🌿</li>
</ul>
<p className="mt-6 text-center text-purple-600 font-medium">
  Remember, even just a few mindful breaths can create space for peace.  
  You’re doing better than you think. 🌈
</p>

        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/self-help")}
        className="mt-auto mb-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        ← Back to Library
      </button>
    </div>
  );
}
