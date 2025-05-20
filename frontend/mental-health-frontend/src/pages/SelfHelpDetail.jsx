// src/pages/SelfHelpDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const selfHelpData = {
  "breathe-relax": {
    title: "Breathe and Relax",
    type: "Video",
    category: "Anxiety",
    description: "This short guided video helps you regulate your breathing and calm your nerves.",
    content: "https://www.youtube.com/embed/SEfs5TJZ6Nk",
  },
  "affirmations-esteem": {
    title: "Affirmations for Self-Esteem",
    type: "Affirmation",
    category: "Confidence",
    description: "Repeat these positive affirmations to reinforce self-worth and confidence.",
    content: "You are enough. You are strong. You believe in your growth. 🌱",
  },
  "stress-work": {
    title: "Handling Stress at Work",
    type: "Article",
    category: "Stress",
    description: "This article shares strategies for reducing stress in a workplace setting.",
    content:
      "🔹 Take regular breaks\n🔹 Prioritize tasks\n🔹 Communicate boundaries\n🔹 Seek support when needed",
  },
  "mindful-meditation": {
    title: "Mindful Meditation",
    type: "Video",
    category: "Stress",
    description: "An introduction to mindfulness through meditation.",
    content: "https://www.youtube.com/embed/inpok4MKVLM",
  },
};

export default function SelfHelpDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = selfHelpData[id];

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-red-500">
        <p>Resource not found.</p>
        <button
          onClick={() => navigate("/self-help")}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-purple-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-4">
        <h1 className="text-3xl font-bold text-purple-700">{resource.title}</h1>
        <p className="text-sm text-gray-600 italic">{resource.type} - {resource.category}</p>
        <p className="text-gray-700">{resource.description}</p>

        <div className="mt-4">
          {resource.type === "Video" ? (
            <iframe
              src={resource.content}
              title={resource.title}
              className="w-full h-64 rounded-md shadow"
              allowFullScreen
            />
          ) : (
            <pre className="bg-indigo-50 p-4 rounded text-sm whitespace-pre-wrap text-gray-800">
              {resource.content}
            </pre>
          )}
        </div>

        <button
          onClick={() => navigate("/self-help")}
          className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          ← Back to Library
        </button>
      </div>
    </div>
  );
}
