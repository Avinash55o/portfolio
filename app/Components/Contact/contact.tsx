"use client";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white dark:bg-gray-900 p-8 md:p-16 rounded-3xl shadow-lg">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Feel free to contact us anytime. We will get back to you as soon as we can!
          </p>
          {status && (
            <p className={`mt-4 ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>
              {status}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 bg-black text-white p-6 rounded-lg relative">
          <h3 className="text-xl font-semibold">Info</h3>
          <div className="mt-4 space-y-4">
            <p className="flex items-center gap-3">
              <FiMail size={20} /> avinashboruah8@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FiPhone size={20} /> +91 8011942590
            </p>
            <p className="flex items-center gap-3">
              <FiMapPin size={20} /> Jorhat, Assam, India
            </p>
            <p className="flex items-center gap-3">
              <FiClock size={20} /> 06:00PM - 08:00PM
            </p>
          </div>

          {/* Yellow Decorative Elements */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-400"></div>
        </div>
      </div>
    </section>
  );
} 