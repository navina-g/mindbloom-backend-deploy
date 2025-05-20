// src/pages/Dashboard.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Smile, BookOpen, Calendar } from "lucide-react";
import logo from "../assets/Untitled_logo_2_free-file.jpg";
import { motion } from "framer-motion";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200 flex flex-col font-['Quicksand']">

      {/* Header */}
      <header className="bg-white shadow-md py-6 shadow bg-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="MindBloom Logo" className="w-24 h-24 rounded-full mb-2 shadow-md" />
            <div>
              <h1 className="text-4xl font-extrabold text-purple-700 leading-tight">MindBloom</h1>
              <p className="text-sm text-gray-600 -mt-1 ml-1 italic tracking-wide">Bloom into your best self</p>
            </div>
          </div>
          <nav className="space-x-6">
            <Link className="text-purple-600 hover:text-purple-800" to="/mood-tracker">Mood</Link>
            <Link className="text-purple-600 hover:text-purple-800" to="/self-help">Self-Help</Link>
            <Link className="text-purple-600 hover:text-purple-800" to="/appointments">Appointments</Link>
            <Link className="text-purple-600 hover:text-purple-800" to="/user-dashboard">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Welcome Banner */}
      <motion.section
        className="flex-1 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white/70 backdrop-blur-md p-10 rounded-xl text-center max-w-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-purple-800 mb-4">Welcome Back!</h2>
          <p className="text-lg text-gray-700 mb-6">
            "Your journey to well-being starts with a single step. Let's bloom together."
          </p>
          <button
            onClick={() => navigate('/user-dashboard')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Get Started 🌸
          </button>
        </motion.div>
      </motion.section>

      {/* Quick Actions */}
      <section className="container mx-auto py-12 px-6">
        <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-center">Quick Actions</h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/mood-tracker" className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center">
              <Smile className="text-pink-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Track Mood 😊</h4>
              <p className="text-gray-700 text-center">Capture your feelings and see patterns.</p>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/self-help" className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center">
              <BookOpen className="text-purple-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Self-Help 📖</h4>
              <p className="text-gray-700 text-center">Explore guides and techniques.</p>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/appointments" className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center">
              <Calendar className="text-purple-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Book Session 📅</h4>
              <p className="text-gray-700 text-center">Schedule time with your counselor.</p>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Inspirational Quote */}
      <motion.section
        className="bg-purple-600 text-white py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl italic max-w-3xl mx-auto">
            "You are not alone — every small step you take is a victory worth celebrating."
          </blockquote>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        © 2025 MindBloom. Bloom into your best self 🌿
      </footer>
    </div>
  );
}
