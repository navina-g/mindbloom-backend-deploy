// src/pages/LoginPage.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logo from "../assets/Untitled_logo_2_free-file.jpg";

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      console.log("Trying to log in with:", values);
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/token/", {
          username: values.email,
          password: values.password,
        });

        const { access, refresh } = response.data;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        setStatus({ success: "Login successful!" });
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        setStatus({
          error: error.response?.data?.detail || "Invalid credentials. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="MindBloom Logo" className="w-28 h-28 rounded-full mb-2 shadow-md" />
          <h2 className="text-3xl font-bold text-purple-700">Welcome Back to MindBloom</h2>
          <p className="text-sm text-gray-500 mt-1">Log in to continue your mental wellness journey 🌿</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {formik.status?.success && <div className="text-green-600 text-sm">{formik.status.success}</div>}
          {formik.status?.error && <div className="text-red-600 text-sm">{formik.status.error}</div>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm">{formik.errors.password}</div>}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition disabled:opacity-50"
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account? <a href="/signup" className="text-purple-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
