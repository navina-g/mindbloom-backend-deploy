// src/pages/SelfHelpPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


const mockResources = [
  { id: 1, slug: "breathe-and-relax", title: "Breathe and Relax", type: "Video", category: "Anxiety", description: "A short guided breathing video." },
  { id: 2, slug: "affirmations-self-esteem", title: "Affirmations for Self-Esteem", type: "Affirmation", category: "Confidence", description: "Repeat these daily to boost your self-worth." },
  { id: 3, slug: "handling-stress-work", title: "Handling Stress at Work", type: "Article", category: "Stress", description: "A practical guide for managing workplace stress." },
  { id: 4, slug: "mindful-meditation", title: "Mindful Meditation", type: "Video", category: "Stress", description: "Learn the basics of mindfulness." },
];

const categories = ["All", "Stress", "Anxiety", "Confidence"];

export default function SelfHelpPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources =
    selectedCategory === "All"
      ? mockResources
      : mockResources.filter((res) => res.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 ">
      <Header />
      <main className="p-6">
      <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Self-Help Library</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border border-purple-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.type} - {item.category}</p>
            <p className="text-gray-800 flex-grow">{item.description}</p>

            {/* Link to detail page */}
            <Link
              to={`/self-help/${item.slug}`}
              className="mt-4 text-sm text-purple-500 hover:underline self-start"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
      </main>
    </div>
    
  );
}
