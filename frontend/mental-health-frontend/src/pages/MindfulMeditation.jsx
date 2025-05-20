import React from "react";
import { Link } from "react-router-dom";

export default function MindfulMeditation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 flex flex-col items-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          🧘‍♂️ Mindful Meditation
        </h1>
        <p className="text-gray-700 mb-6">
          Mindfulness is the gentle practice of being fully present in the moment —
          aware of where you are, what you're doing, and how you're feeling.
        </p>

        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-64 rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/inpok4MKVLM"
            title="5-Minute Meditation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">✨ Getting Started</h2>
        <ul className="text-left text-gray-800 space-y-2 mb-6">
          <li>• Sit comfortably and close your eyes</li>
          <li>• Take slow, deep breaths</li>
          <li>• Focus on the present — your breath, body, and space</li>
          <li>• If your mind wanders, gently bring it back</li>
        </ul>

        <p className="text-indigo-600 font-medium italic mb-8">
          “You can’t stop the waves, but you can learn to surf.” — Jon Kabat-Zinn
        </p>

        <Link
          to="/self-help"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ← Back to Library
        </Link>
      </div>
    </div>
  );
}
