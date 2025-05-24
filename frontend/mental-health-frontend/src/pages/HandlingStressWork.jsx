import React from "react";
import { Link } from "react-router-dom";

export default function HandlingStressWork() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center">
        Handling Stress at Work
      </h1>
      <p className="text-center text-gray-700 max-w-2xl mb-6">
        Work-related stress can affect your mental, emotional, and physical well-being. Here’s a practical and gentle guide to help you recognize, manage, and reduce stress at work.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl space-y-6 text-gray-800">
        <h2 className="text-2xl font-semibold text-blue-600">What Causes Work Stress?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Heavy workload or long hours</li>
          <li>Lack of control over tasks</li>
          <li>Poor communication or support</li>
          <li>Unclear expectations or job insecurity</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">Strategies to Manage It💡</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Prioritize tasks:</strong> Break work into smaller steps.</li>
          <li><strong>Take mindful breaks:</strong> Even 5 minutes of fresh air helps.</li>
          <li><strong>Set boundaries:</strong> Protect your personal time.</li>
          <li><strong>Talk it out:</strong> Share concerns with a friend, therapist, or manager.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">Comforting Reminder</h2>
        <p>
          You are doing your best — and that is always enough. Your peace matters more than perfection. Step back, breathe deeply, and know you’re not alone.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Want to read more?</h3>
          <ul className="list-disc pl-5 text-blue-500">
            <li>
              <a href="https://www.apa.org/topics/healthy-workplaces/work-stress" target="_blank" rel="noreferrer" className="underline hover:text-blue-700">
                APA: Work Stress Overview
              </a>
            </li>
            <li>
              <a href="https://www.helpguide.org/mental-health/stress/stress-in-the-workplace" target="_blank" rel="noreferrer" className="underline hover:text-blue-700">
                HelpGuide: Stress in the Workplace
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-blue-600 text-center max-w-md">
        🌟 Be gentle with yourself — even small steps can lead to big changes.
      </p>

      <Link
        to="/self-help"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        ← Back to Library
      </Link>
    </div>
  );
}
